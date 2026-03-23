import { createSlice } from "@reduxjs/toolkit";
const name = "products";
const productsSlice = createSlice({
  name,
  initialState: {
    products: [],
    product: null,
    fetchLoading: false,
    singleLoading: false,
    fetchError: null,
    createProductError: null,
    createProductLoading: false,
    deleteLoading: false,
    deleteError: null,
  },
  reducers: {
    fetchProductRequest: (state) => {
      state.singleLoading = true;
    },
    fetchProductSuccess: (state, { payload: product }) => {
      state.singleLoading = false;
      state.product = product;
    },
    fetchProductFailure: (state) => {
      state.singleLoading = false;
    },
    fetchProductsRequest: (state) => {
      state.fetchLoading = true;
    },
    fetchProductsSuccess: (state, { payload: products }) => {
      state.fetchLoading = false;
      state.products = products;
    },
    fetchProductsFailure: (state) => {
      state.fetchLoading = false;
    },
    createProductRequest: (state) => {
      state.createProductLoading = true;
    },
    createProductSuccess: (state) => {
      state.createProductLoading = false;
    },

    createProductFailure: (state, { payload: error }) => {
      state.createProductLoading = false;
      state.createProductError = error;
    },

    deleteProductRequest: (state) => {
      state.deleteLoading = true;
      state.deleteError = null;
    },
    deleteProductSuccess: (state, { payload: id }) => {
      state.deleteLoading = false;
      state.products = state.products.filter((product) => product.id !== id);
    },
    deleteProductFailure: (state, { payload: error }) => {
      state.deleteLoading = false;
      state.deleteError = error;
    },
  },
});
export default productsSlice;
