import { put, takeEvery } from "redux-saga/effects";
import baseApi from "../../../shared/api/baseApi";
import {
  FETCH_CATEGORIES_REQUEST,
  fetchCategoriesSuccess,
} from "./categoriesActions";

export function* fetchCategories() {
  try {
    const response = yield baseApi("/categories");
    yield put(fetchCategoriesSuccess(response.data));
  } catch (error) {
    console.error("Fetch to categories failed!", error);
  }
}

const categoriesSagas = [takeEvery(FETCH_CATEGORIES_REQUEST, fetchCategories)];
export default categoriesSagas;
