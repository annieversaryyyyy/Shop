import { put, takeEvery } from "redux-saga/effects";
import baseApi from "../../../shared/api/baseApi";
import {
  registerUserRequest,
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
const userSagas = [takeEvery(registerUserRequest, registerUserSaga)];
export default userSagas;
