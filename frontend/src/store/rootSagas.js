import { all } from "redux-saga/effects";
import categoriesSagas from "../entities/category/model/categoriesSagas";
import userSagas from "../entities/user/model/userSagas";
import productsSagas from "../entities/product/model/productsSagas";
import cartSagas from "../entities/cart/model/cartSagas";

export default function* rootSagas() {
  yield all([...categoriesSagas, ...userSagas, ...productsSagas, ...cartSagas]);
}
