import { combineReducers } from "redux";

import categoriesSlice from "../entities/category/model/categoriesSlice";
import usersSlice from "../entities/user/model/usersSlice";
import productsSlice from "../entities/product/model/productsSlice";
import cartSlice from "../entities/cart/model/cartSlice";

const rootReducer = combineReducers({
  users: usersSlice.reducer,
  categories: categoriesSlice.reducer,
  products: productsSlice.reducer,
  cart: cartSlice.reducer,
});

export default rootReducer;