import cartSlice from "./cartSlice";

export const { addToCartRequest, addToCartSuccess, addToCartError, clearCart } =
  cartSlice.actions;
