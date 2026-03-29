const { default: categoriesSlice } = require("./categoriesSlice");

export const {
  fetchCategoriesRequest,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
  createCategoryRequest,
  createCategorySuccess,
  createCategoryFailure,
  resetCreateCategoryState,
  deleteCategoryRequest,
  deleteCategorySuccess,
  deleteCategoryFailure,
  resetDeleteCategoryState,
} = categoriesSlice.actions;
