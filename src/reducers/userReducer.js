import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  CHECK_USER,
  CHECK_USER_SUCCESS,
  CHECK_USER_ERROR,
  LOAD_USER_LIST_SUCCESS,
  LOGOUT_USER
} from '../actions/types';

const initialState = {
  loading: false,
  userData: null,
  authenticated: false,
  userList: null
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
    case LOAD_USER_LIST_SUCCESS:
      return {
        ...state,
        userList: action.payload
      };
    case LOGOUT_USER:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
