import { LOGIN_USER, LOGOUT_USER } from './types';

export const loginUser = () => (dispatch, getState) => {
  const loginValues = (getState()).form.login.values;

  console.log('data', loginValues);
};

export const logoutUser = () => dispatch => ({
  type: LOGOUT_USER
});
