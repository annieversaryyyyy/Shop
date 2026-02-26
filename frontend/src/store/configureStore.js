import { thunk } from "redux-thunk";
import baseApi, { setupInterceptors } from "../shared/api/baseApi";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { loadFromLocalStorage, saveToLocalStorage } from "./localStorage";
import usersReducer from "../entities/user/model/usersReducer";
import productsReducer from "../entities/product/model/productsReducer";
import categoriesReducer from "../entities/category/model/categoriesReducer";

export const composeEnhancers =
  window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const rootReducer = combineReducers({
  products: productsReducer,
  users: usersReducer,
  categories: categoriesReducer,
});

const persistedState = loadFromLocalStorage();

const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(thunk)),
);

store.subscribe(() => {
  saveToLocalStorage({
    users: store.getState().users,
  });
});

setupInterceptors(store);

export default store;
