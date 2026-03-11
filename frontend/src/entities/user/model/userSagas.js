import { put, takeEvery } from "redux-saga/effects";
import baseApi from "../../../shared/api/baseApi";
import {
  REGISTER_USER_REQUEST,
  registerUserFailure,
  registerUserSuccess,
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
const userSagas = [takeEvery(REGISTER_USER_REQUEST, registerUserSaga)];
export default userSagas;
