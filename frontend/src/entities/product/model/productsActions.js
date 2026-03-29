import productsSlice from "../model/productsSlice";
export const {
  fetchProductRequest,
  fetchProductSuccess,
  fetchProductFailure,
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
  createProductRequest,
  createProductSuccess,
  createProductFailure,
  deleteProductSuccess,
  deleteProductRequest,
  deleteProductFailure,
  resetDeleteProductState,
} = productsSlice.actions;
