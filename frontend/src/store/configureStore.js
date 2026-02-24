import { thunk } from "redux-thunk";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { loadFromLocalStorage, saveToLocalStorage } from "./localStorage";
import usersReducer from "./reducers/usersReducer";
import productsReducer from "./reducers/productsReducer";
import axios from "axios";
import axiosApi from "../axiosApi";
import categoriesReducer from "./reducers/categoriesReducer";

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

axiosApi.interceptors.request.use((config) => {
  try {
    config.headers["Authorization"] = store.getState().users.user.token;
  } catch (error) {}

  return config;
});

export default store;
