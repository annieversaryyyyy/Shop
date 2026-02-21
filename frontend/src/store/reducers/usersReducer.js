import {
  CLEAR_LOGIN_ERRORS,
  CLEAR_LOGIN_SUCCESS,
  CLEAR_REGISTER_ERRORS,
  CLEAR_REGISTER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
} from "../actions/usersActions";

const initialState = {
  user: null,
  registerSuccess: false,
  registerLoading: false,
  registerError: null,
  loginSuccess: false,
  loginLoading: false,
  loginError: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return { ...state, registerLoading: true };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        registerLoading: false,
        registerSuccess: true,
        user: action.payload,
      };
    case REGISTER_USER_FAILURE:
      return {
        ...state,
        registerLoading: false,
        registerError: action.payload,
        registerSuccess: false,
      };
    case CLEAR_REGISTER_ERRORS:
      return { ...state, registerError: null };
    case CLEAR_REGISTER_SUCCESS:
      return { ...state, registerSuccess: false, user: action.payload };

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
    default:
      return state;
  }
};

export default usersReducer;
