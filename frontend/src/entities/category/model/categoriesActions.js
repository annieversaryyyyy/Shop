const { default: categoriesSlice } = require("./categoriesSlice");

export const {
  fetchCategoriesRequest,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} = categoriesSlice.actions;

// export default categoriesSlice.reducer;
