import { createSlice } from "@reduxjs/toolkit";

const name = "cart";
const cartSlice = createSlice({
  name,
  initialState: {
    items: [],
    addToCartLoading: false,
    addToCartError: null,
  },
  reducers: {
    addToCartRequest(state) {
      state.addToCartLoading = true;
      state.addToCartError = null;
    },
    addToCartSuccess(state, { payload }) {
      state.addToCartLoading = false;
      state.items = payload.items;
    },
    addToCartError(state, { payload }) {
      state.addToCartLoading = false;
      state.addToCartError = payload;
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export default cartSlice;
