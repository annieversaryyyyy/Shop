import baseApi from "../../../shared/api/baseApi";
import { addToCartError, addToCartRequest, addToCartSuccess } from "./cartActions";
import { call, put } from "redux-saga/effects";
import { takeEvery } from "redux-saga/effects";

export function* addToCartSaga({ payload }) {
  try {
    const response = yield call(baseApi.post, "/cart", payload);
    yield put(addToCartSuccess(response.data));
  } catch (e) {
    yield put(addToCartError(e.response.data));
  }
}

const cartSagas = [takeEvery(addToCartRequest, addToCartSaga)];

export default cartSagas;
