import { thunk } from "redux-thunk";
import { setupInterceptors } from "../shared/api/baseApi";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { loadFromLocalStorage, saveToLocalStorage } from "./localStorage";
import usersReducer, {
  initialState,
} from "../entities/user/model/usersReducer";
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
