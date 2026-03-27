import { createSlice } from "@reduxjs/toolkit";
import { createCategory } from "./categoriesSagas";
const name = "categories";
const categoriesSlice = createSlice({
  name,
  initialState: {
    categories: [],
    fetchLoading: false,
    fetchError: null,
  },
  reducers: {
    fetchCategoriesRequest(state) {
      state.fetchLoading = true;
      state.fetchError = null;
    },
    fetchCategoriesSuccess(state, { payload: categories }) {
      state.fetchLoading = false;
      state.categories = categories;
    },
    fetchCategoriesFailure(state, action) {
      state.fetchLoading = false;
      state.fetchError = action.payload;
    },
    createCategoryRequest(state) {
      state.fetchLoading = true;
      state.fetchError = null;
    },
    createCategorySuccess(state, action) {
      state.fetchLoading = false;
      state.categories.push(action.payload);
    },
    createCategoryFailure(state, action) {
      state.fetchLoading = false;
      state.fetchError = action.payload;
    },
  },
});
export default categoriesSlice;
