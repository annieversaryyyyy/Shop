import { thunk } from "redux-thunk";
import { setupInterceptors } from "../shared/api/baseApi";
import createSagaMiddleware from "redux-saga";
import { combineReducers, compose, createStore } from "redux";
import { loadFromLocalStorage, saveToLocalStorage } from "./localStorage";
import  {
  initialState,
} from "../entities/user/model/usersReducer";
import productsReducer from "../entities/product/model/productsReducer";
import rootSagas from "./rootSagas";
import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "../entities/category/model/categoriesSlice";
import usersSlice from "../entities/user/model/usersSlice";

const rootReducer = combineReducers({
  products: productsReducer,
  users: usersSlice.reducer,
  categories: categoriesSlice.reducer,
});

const persistedState = loadFromLocalStorage();
const sagaMiddleware = createSagaMiddleware();

const middleware = [thunk, sagaMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
  devTools: true,
  preloadedState: persistedState,
});

sagaMiddleware.run(rootSagas);

store.subscribe(() => {
  saveToLocalStorage({
    users: {
      ...initialState,
      user: store.getState().users.user,
    },
  });
});

setupInterceptors(store);

// baseApi.interceptors.response.use(
//   (res) => res,
//   (e) => {
//     if (!e.response.data) {
//       e.response = { data: { global: "No internet!" } };
//     }
//     throw e;
//   },
// );

export default store;
