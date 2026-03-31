import { put, takeEvery, select } from "redux-saga/effects";
import baseApi from "../../../shared/api/baseApi";
import {
  registerUserRequest,
  registerUserFailure,
  registerUserSuccess,
  loginUserSuccess,
  loginUserRequest,
  loginUserFailure,
  logoutUserRequest,
  logoutUserSuccess,
  googleLoginRequest,
  toggleFavoriteSuccess,
  toggleFavoriteFailure,
  toggleFavoriteRequest,
  fetchFavoritesSuccess,
  fetchFavoritesFailure,
  fetchFavoritesRequest,
} from "./usersActions";

export function* registerUserSaga({ payload: userData }) {
  try {
    const response = yield baseApi.post("/users", userData);
    console.log("User registered:", response.data);
    yield put(registerUserSuccess(response.data));
  } catch (e) {
    yield put(registerUserFailure(e.response.data));
  }
}

export function* loginUserSaga({ payload: userData }) {
  try {
    const response = yield baseApi.post("/users/sessions", userData);
    yield put(loginUserSuccess(response.data.user));
    yield put(fetchFavoritesRequest());
  } catch (e) {
    yield put(loginUserFailure(e.response.data));
  }
}

export function* googleLoginSaga({ payload: data }) {
  try {
    const response = yield baseApi.post("/users/googleLogin", {
      token: data.credential,
    });
    yield put(loginUserSuccess(response.data.user));
    yield put(fetchFavoritesRequest());
  } catch (e) {
    yield put(loginUserFailure(e.response.data));
  }
}

export function* logoutUserSaga() {
  try {
    yield baseApi.delete("/users/sessions");
    yield put(logoutUserSuccess());
  } catch (e) {
    console.error("Logout Failed", e);
  }
}

export function* toggleFavoriteSaga({ payload: productId }) {
  try {
    const user = yield select((state) => state.users.user);
    const response = yield baseApi.post(
      "/users/favorites",
      { productId },
      {
        headers: {
          Authorization: user.token,
        },
      },
    );
    yield put(fetchFavoritesRequest());
    yield put(toggleFavoriteSuccess(response.data.favorites));
  } catch (error) {
    yield put(toggleFavoriteFailure(error));
  }
}

export function* fetchFavoritesSaga() {
  try {
    const user = yield select((state) => state.users.user);

    const response = yield baseApi.get("/users/favorites", {
      headers: {
        Authorization: user.token,
      },
    });

    yield put(fetchFavoritesSuccess(response.data));
  } catch (error) {
    yield put(fetchFavoritesFailure(error));
  }
}
const userSagas = [
  takeEvery(registerUserRequest, registerUserSaga),
  takeEvery(loginUserRequest, loginUserSaga),
  takeEvery(logoutUserRequest, logoutUserSaga),
  takeEvery(googleLoginRequest, googleLoginSaga),
  takeEvery(toggleFavoriteRequest, toggleFavoriteSaga),
  takeEvery(fetchFavoritesRequest, fetchFavoritesSaga),
];
export default userSagas;
