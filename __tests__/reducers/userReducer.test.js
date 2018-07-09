import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  CHECK_USER,
  CHECK_USER_SUCCESS,
  CHECK_USER_ERROR,
  LOAD_USER_LIST_SUCCESS,
  LOGOUT_USER
} from '../../src/actions/types';
import userReducer from '../../src/reducers/userReducer';

const defaultState = {
  loading: false,
  userData: null,
  authenticated: false,
  userList: null
};

describe('user reducer actions', () => {
  it('should set loading to true during user logining', () => {
    expect(userReducer(defaultState, {
      type: LOGIN_USER
    })).toEqual({
      ...defaultState,
      loading: true
    });
  });

  it('should set loading to true during user status checking', () => {
    expect(userReducer(defaultState, {
      type: CHECK_USER
    })).toEqual({
      ...defaultState,
      loading: true
    });
  });

  it('should set loading to false if user logining failed', () => {
    expect(userReducer({
      ...defaultState,
      loading: true
    }, {
      type: LOGIN_USER_ERROR
    })).toEqual({
      ...defaultState,
      loading: false
    });
  });

  it('should set loading to false during if user status failing', () => {
    expect(userReducer({
      ...defaultState,
      loading: true
    }, {
      type: CHECK_USER_ERROR
    })).toEqual({
      ...defaultState,
      loading: false
    });
  });

  it('should set user status to authenticated if logining successful', () => {
    expect(userReducer(defaultState, {
      type: LOGIN_USER_SUCCESS,
      payload: { name: 'Admin', isAdmin: false }
    })).toEqual({
      loading: false,
      userData: { name: 'Admin', isAdmin: false },
      authenticated: true,
      userList: null
    });
  });

  it('should set user status to authenticated if user check successful', () => {
    expect(userReducer(defaultState, {
      type: CHECK_USER_SUCCESS,
      payload: { name: 'Admin', isAdmin: false }
    })).toEqual({
      loading: false,
      userData: { name: 'Admin', isAdmin: false },
      authenticated: true,
      userList: null
    });
  });

  it('should set user list successfully', () => {
    expect(userReducer(defaultState, {
      type: LOAD_USER_LIST_SUCCESS,
      payload: [{ name: 'Admin', isAdmin: false }]
    })).toEqual({
      ...defaultState,
      userList: [{ name: 'Admin', isAdmin: false }]
    });
  });

  it('should clear user state on logout', () => {
    expect(userReducer({
      ...defaultState,
      authenticated: true
    }, {
      type: LOGOUT_USER
    })).toEqual(defaultState);
  });

  it('should not change state if no action happens', () => {
    expect(userReducer()).toEqual(defaultState);
  });
});
