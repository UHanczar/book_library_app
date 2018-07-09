import axios from 'axios';
import { flashErrorMessage } from 'redux-flash';

import { api } from '../../config/config';
import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  CHECK_USER,
  CHECK_USER_SUCCESS,
  CHECK_USER_ERROR,
  LOGOUT_USER,
  LOAD_USER_LIST,
  LOAD_USER_LIST_SUCCESS,
  LOAD_USER_LIST_ERROR
} from './types';

export const loadUserList = async (dispatch) => {
  try {
    dispatch({
      type: LOAD_USER_LIST
    });

    const result = await axios.get(`${api}/userlist`);

    if (result.data.success) {
      dispatch({
        type: LOAD_USER_LIST_SUCCESS,
        payload: result.data.userList
      });
    }
  } catch (error) {
    dispatch({
      type: LOAD_USER_LIST_ERROR
    });
    const errorMessage = flashErrorMessage('Error with loading list of users.');
    dispatch(errorMessage);
  }
};

export const loginUser = history => async (dispatch, getState) => {
  try {
    dispatch({
      type: LOGIN_USER
    });

    const loginValues = (getState()).form.login.values;

    const result = await axios.post(`${api}/login`, loginValues);

    if (result.data.success) {
      localStorage.setItem('token', result.data.token);

      if (result.data.user.isAdmin) {
        loadUserList(dispatch);
      }

      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: result.data.user
      });
      history.replace('/');
    } else {
      dispatch({
        type: LOGIN_USER_ERROR
      });
      const errorMessage = flashErrorMessage(result.data.message);
      dispatch(errorMessage);
    }
  } catch (error) {
    dispatch({
      type: LOGIN_USER_ERROR
    });
    const errorMessage = flashErrorMessage('Login was not successful.');
    dispatch(errorMessage);
  }
};

export const checkUser = token => async (dispatch) => {
  try {
    dispatch({
      type: CHECK_USER
    });

    const result = await axios.get(`${api}/checkuser`, {
      headers: { Authorization: token }
    });

    if (result.data.success) {
      if (result.data.user.isAdmin) {
        loadUserList(dispatch);
      }

      dispatch({
        type: CHECK_USER_SUCCESS,
        payload: result.data.user
      });
    } else {
      dispatch({
        type: CHECK_USER_ERROR
      });

      const errorMessage = flashErrorMessage(result.data.message);
      dispatch(errorMessage);
    }
  } catch (error) {
    console.log('Error with checking user token');
  }
};

export const logoutUser = () => {
  localStorage.removeItem('token');

  return {
    type: LOGOUT_USER
  };
};
