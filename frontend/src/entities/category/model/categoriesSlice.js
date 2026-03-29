import { createSlice } from "@reduxjs/toolkit";
const name = "categories";
const categoriesSlice = createSlice({
  name,
  initialState: {
    categories: [],
    fetchLoading: false,
    fetchError: null,
    createSuccess: false,
    createError: null,
    createLoading: false,
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
      state.createLoading = true;
      state.createError = null;
    },
    createCategorySuccess(state, action) {
      state.createSuccess = true;
      state.createError = null;
      state.createLoading = false;
      state.categories.push(action.payload);
    },
    createCategoryFailure(state, action) {
      state.createLoading = false;
      state.createError = action.payload;
      state.createSuccess = false;
    },
    resetCreateCategoryState(state) {
      state.createSuccess = false;
      state.createError = null;
    },
  },
});
export default categoriesSlice;
