import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  CHECK_USER,
  CHECK_USER_SUCCESS,
  CHECK_USER_ERROR,
  LOGOUT_USER
} from '../actions/types';

const initialState = {
  loading: false,
  userData: null,
  authenticated: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loading: true
      };
    case LOGIN_USER_SUCCESS:
      return {
        loading: false,
        userData: action.payload,
        authenticated: true
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        loading: false
      };
    case CHECK_USER:
      return {
        ...state,
        loading: true
      };
    case CHECK_USER_SUCCESS:
      return {
        loading: false,
        userData: action.payload,
        authenticated: true
      };
    case CHECK_USER_ERROR:
      return {
        ...state,
        loading: false
      };
    case LOGOUT_USER:
      return {
        ...state,
        userData: null,
        authenticated: false
      };
    default:
      return state;
  }
};

export default userReducer;
