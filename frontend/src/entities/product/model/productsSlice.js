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
    deleteSuccess: false,
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
      state.fetchError = null;
    },
    fetchProductsSuccess: (state, { payload: products }) => {
      state.fetchLoading = false;
      state.fetchError = null;
      state.products = products;
    },
    fetchProductsFailure: (state, { payload: message }) => {
      state.fetchLoading = false;
      state.fetchError = message ?? "Failed to load products";
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
      state.products = state.products.filter((product) => product._id !== id);
      state.deleteSuccess = true;
      state.deleteError = null;
    },
    deleteProductFailure: (state, { payload: error }) => {
      state.deleteLoading = false;
      state.deleteError = error;
    },
    resetDeleteProductState: (state) => {
      state.deleteLoading = false;
      state.deleteError = null;
      state.deleteSuccess = false;
    },
  },
});
export default productsSlice;
