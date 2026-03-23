import { call, put, takeEvery } from "redux-saga/effects";
import baseApi from "../../../shared/api/baseApi";
import {
  createProductFailure,
  createProductRequest,
  createProductSuccess,
  deleteProductFailure,
  deleteProductRequest,
  deleteProductSuccess,
  fetchProductFailure,
  fetchProductRequest,
  fetchProductsFailure,
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductSuccess,
} from "./productsActions";

export function* fetchProductSagas({ payload: id }) {
  try {
    const response = yield baseApi("/products/" + id);
    yield put(fetchProductSuccess(response.data));
  } catch (e) {
    yield put(fetchProductFailure(e.message));
  }
}

export function* fetchProductsSagas({ payload: query }) {
  try {
    const response = yield baseApi("/products" + query);
    yield put(fetchProductsSuccess(response.data));
  } catch (e) {
    yield put(fetchProductsFailure(e.message));
  }
}

export function* createProductSaga({ payload: productData }) {
  try {
    yield baseApi.post("/products", productData);
    yield put(createProductSuccess());
  } catch (e) {
    yield put(createProductFailure(e.response.data));
  }
}

export function* deleteProductSaga({ payload: id }) {
  try {
    yield call(baseApi.delete, "/products/" + id);
    yield put(deleteProductSuccess(id));
  } catch (error) {
    yield put(deleteProductFailure(error.message));
  }
}

const productsSagas = [
  takeEvery(fetchProductsRequest, fetchProductsSagas),
  takeEvery(fetchProductRequest, fetchProductSagas),
  takeEvery(createProductRequest, createProductSaga),
  takeEvery(deleteProductRequest, deleteProductSaga)
];

export default productsSagas;
