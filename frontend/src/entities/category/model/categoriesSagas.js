import { put, takeEvery } from "redux-saga/effects";
import baseApi from "../../../shared/api/baseApi";
import {
  fetchCategoriesRequest,
  fetchCategoriesSuccess,
} from "./categoriesActions";

export function* fetchCategories() {
  try {
    const response = yield baseApi.get("/categories");
    yield put(fetchCategoriesSuccess(response.data));
  } catch (error) {
    console.error("Fetch to categories failed!", error);
  }
}

const categoriesSagas = [
  takeEvery(fetchCategoriesRequest.type, fetchCategories),
];
export default categoriesSagas;
