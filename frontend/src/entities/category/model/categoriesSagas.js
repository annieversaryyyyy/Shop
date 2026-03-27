import { put, takeEvery } from "redux-saga/effects";
import baseApi from "../../../shared/api/baseApi";
import {
  fetchCategoriesRequest,
  fetchCategoriesSuccess,
  createCategoryRequest,
  createCategorySuccess,
  createCategoryFailure,
} from "./categoriesActions";

export function* fetchCategories() {
  try {
    const response = yield baseApi.get("/categories");
    yield put(fetchCategoriesSuccess(response.data));
  } catch (error) {
    console.error("Fetch to categories failed!", error);
  }
}

export function* createCategory({ payload: categoryData }) {
  try {
    const response = yield baseApi.post("/categories", categoryData);
    yield put(createCategorySuccess(response.data));
  } catch (error) {
    yield put(
      createCategoryFailure(error.response?.data || { error: "Unknown error" }),
    );
    console.log("Creating category failed!", error);
  }
}

const categoriesSagas = [
  takeEvery(fetchCategoriesRequest.type, fetchCategories),
  takeEvery(createCategoryRequest.type, createCategory),
];
export default categoriesSagas;
