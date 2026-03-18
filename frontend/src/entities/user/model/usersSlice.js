import { createSlice } from "@reduxjs/toolkit";
import {
  clearRegisterErrors,
  clearRegisterSuccess,
  registerUserFailure,
  registerUserRequest,
  registerUserSuccess,
} from "./usersActions";

const name = "users";

export const initialState = {
  user: null,
  registerSuccess: false,
  registerLoading: false,
  registerError: null,
  loginSuccess: false,
  loginLoading: false,
  loginError: null,
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
  },
});
export default usersSlice;
