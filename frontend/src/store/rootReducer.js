import { combineReducers } from "redux";

import productsReducer from "../entities/product/model/productsReducer";
import categoriesSlice from "../entities/category/model/categoriesSlice";
import usersSlice from "../entities/user/model/usersSlice";

const rootReducer = combineReducers({
  products: productsReducer,
  users: usersSlice.reducer,
  categories: categoriesSlice.reducer,
});

export default rootReducer;