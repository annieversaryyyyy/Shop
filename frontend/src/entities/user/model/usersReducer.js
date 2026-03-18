import {
  CLEAR_LOGIN_ERRORS,
  CLEAR_LOGIN_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
} from "./usersActions";

export const initialState = {
  user: null,
  loginSuccess: false,
  loginLoading: false,
  loginError: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return { ...state, loginLoading: true };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loginLoading: false,
        loginSuccess: true,
        user: action.payload,
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        loginLoading: false,
        loginError: action.payload,
        loginSuccess: false,
      };

    case CLEAR_LOGIN_ERRORS:
      return { ...state, loginError: null };
    case CLEAR_LOGIN_SUCCESS:
      return { ...state, loginSuccess: false };

    case LOGOUT_USER:
      return { ...state, user: null };

    default:
      return state;
  }
};

export default usersReducer;
