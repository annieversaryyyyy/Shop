import { createSlice } from "@reduxjs/toolkit";
import { toggleFavoriteFailure, toggleFavoriteSuccess } from "./usersActions";

const name = "users";

export const initialState = {
  user: null,
  favorites: [],
  registerSuccess: false,
  registerLoading: false,
  registerError: null,
  loginSuccess: false,
  loginLoading: false,
  loginError: null,
  toggleLoading: false,
  toggleError: null,
};

const usersSlice = createSlice({
  name,
  initialState,
  reducers: {
    registerUserRequest(state) {
      state.registerLoading = true;
      state.registerError = null;
    },
    registerUserSuccess(state, action) {
      state.registerLoading = false;
      state.user = action.payload;
      state.registerSuccess = true;
    },
    registerUserFailure(state, action) {
      state.registerLoading = false;
      state.registerError = action.payload;
      state.registerSuccess = false;
    },
    clearRegisterSuccess(state) {
      state.registerSuccess = false;
    },
    clearRegisterErrors(state) {
      state.registerError = null;
    },

    loginUserRequest(state) {
      state.loginLoading = true;
      state.loginError = null;
    },
    loginUserSuccess(state, action) {
      state.loginLoading = false;
      state.loginSuccess = true;
      state.user = action.payload;
    },
    loginUserFailure(state, action) {
      state.loginLoading = false;
      state.loginError = action.payload;
      state.loginSuccess = false;
    },
    clearLoginSuccess(state) {
      state.loginSuccess = false;
    },
    clearLoginErrors(state) {
      state.loginError = null;
    },
    logoutUserRequest(state) {
      state.loginLoading = true;
    },
    logoutUserSuccess(state) {
      state.user = null;
    },

    googleLoginRequest(state) {
      state.loginLoading = true;
      state.loginError = null;
    },

    toggleFavoriteRequest(state) {
      state.toggleLoading = true;
      state.toggleError = null;
    },
    toggleFavoriteSuccess(state, action) {
      state.toggleLoading = false;
      state.favorites = action.payload;
    },
    toggleFavoriteFailure(state, action) {
      state.toggleLoading = false;
      state.toggleError = action.payload;
    },
  },
});
export default usersSlice;
