import usersSlice from "./usersSlice";

export const {
  registerUserRequest,
  registerUserSuccess,
  registerUserFailure,
  clearRegisterErrors,
  clearRegisterSuccess,
  loginUserRequest,
  loginUserSuccess,
  loginUserFailure,
  clearLoginErrors,
  clearLoginSuccess,
  logoutUserSuccess,
  logoutUserRequest,
  googleLoginRequest,
  toggleFavoriteRequest,
  toggleFavoriteSuccess,
  toggleFavoriteFailure,
} = usersSlice.actions;
