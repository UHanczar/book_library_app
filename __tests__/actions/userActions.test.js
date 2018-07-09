import axios from 'axios';

import {
  loadUserList,
  loginUser,
  checkUser,
  logoutUser
} from '../../src/actions/userActions';
import * as types from '../../src/actions/types';
import { api } from '../../config/config';

describe('user actions tests', () => {
  describe('loadUserList tests', () => {
    it('should fetch user list successfully', async () => {
      const expected = [
        {
          type: types.LOAD_USER_LIST
        },
        {
          type: types.LOAD_USER_LIST_SUCCESS,
          payload: [{ name: 'Admin' }]
        }
      ];


      axios.get = jest.fn(url => Promise.resolve({
        data: {
          success: true,
          userList: [{ name: 'Admin' }]
        } }
      ));

      const dispatch = jest.fn();
      const getState = jest.fn(() => {
        url: `${api}/userlist`;
      });

      await loadUserList(dispatch, getState);

      expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
      expect(dispatch.mock.calls[1][0]).toEqual(expected[1]);
    });

    it('should not call dispatch in case of user list not loading', async () => {
      const expected = [
        {
          type: types.LOAD_USER_LIST
        },
        {
          type: types.LOAD_USER_LIST_SUCCESS,
          payload: { name: 'js' }
        }
      ];

      axios.get = jest.fn(url => Promise.resolve({
        data: {
          success: false
        }
      }));

      const dispatch = jest.fn();
      const getState = jest.fn(() => {
        url: `${api}/booklist`;
      });

      await loadUserList(dispatch, getState);

      expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
      expect(dispatch.mock.calls.length).toBe(1);
    });

    it('should call flashError message in case throwing error', async () => {
      const expected = [
        {
          type: types.LOAD_USER_LIST
        },
        {
          type: types.LOAD_USER_LIST_SUCCESS,
          payload: { name: 'js' }
        }
      ];

      axios.get = jest.fn(url => Promise.reject());

      const dispatch = jest.fn();
      const getState = jest.fn(() => {
        url: `${api}/booklist`;
      });

      await loadUserList(dispatch, getState);

      expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
      expect(dispatch.mock.calls[1][0]).toEqual({ type: 'LOAD_USER_LIST_ERROR' });
    });
  });

  describe('loginUser tests', () => {
    let localStorageMock;

    beforeAll(() => {
      localStorageMock = {
        getItem: jest.fn(),
        setItem: jest.fn(),
        clear: jest.fn()
      };
      global.localStorage = localStorageMock;
    });

    it('should login user successfully and not call user list if user is not admin', async () => {
      const expected = [
        {
          type: types.LOGIN_USER
        },
        {
          type: types.LOGIN_USER_SUCCESS,
          payload: { name: 'Admin' }
        }
      ];

      axios.post = jest.fn(url => Promise.resolve({
        data: {
          success: true,
          user: { name: 'Admin' }
        }
      }));

      const dispatch = jest.fn();
      const getState = jest.fn(() => ({
        url: `${api}/login`,
        form: {
          login: {
            values: {}
          }
        }
      }));

      await loginUser({})(dispatch, getState);

      expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
      expect(dispatch.mock.calls[1][0]).toEqual(expected[1]);
    });

    it('should login user successfully and call user list if user is admin', async () => {
      const expected = [
        {
          type: types.LOGIN_USER
        },
        {
          type: types.LOAD_USER_LIST
        }
      ];

      axios.post = jest.fn(url => Promise.resolve({
        data: {
          success: true,
          user: { name: 'Admin', isAdmin: true }
        }
      }));

      const dispatch = jest.fn();
      const getState = jest.fn(() => ({
        url: `${api}/login`,
        form: {
          login: {
            values: {}
          }
        }
      }));

      await loginUser({})(dispatch, getState);

      expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
      expect(dispatch.mock.calls[1][0]).toEqual(expected[1]);
    });

    it('should call error if responce was unsuccessful', async () => {
      const expected = [
        {
          type: types.LOGIN_USER
        },
        {
          type: types.LOGIN_USER_ERROR
        }
      ];

      axios.post = jest.fn(url => Promise.resolve({
        data: {
          success: false
        }
      }));

      const dispatch = jest.fn();
      const getState = jest.fn(() => ({
        url: `${api}/login`,
        form: {
          login: {
            values: {}
          }
        }
      }));

      await loginUser({})(dispatch, getState);

      expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
      expect(dispatch.mock.calls[1][0]).toEqual(expected[1]);
    });

    it('should call error if there is an error during request', async () => {
      const expected = [
        {
          type: types.LOGIN_USER
        },
        {
          type: types.LOGIN_USER_ERROR
        }
      ];

      axios.post = jest.fn(url => Promise.reject());

      const dispatch = jest.fn();
      const getState = jest.fn(() => ({
        url: `${api}/login`,
        form: {
          login: {
            values: {}
          }
        }
      }));

      await loginUser({})(dispatch, getState);

      expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
      expect(dispatch.mock.calls[1][0]).toEqual(expected[1]);
    });
  });

  describe('checkUser tests', () => {
    it('should login user if check was successful and not call user list if user is not admin', async () => {
      const expected = [
        {
          type: types.CHECK_USER
        },
        {
          type: types.CHECK_USER_SUCCESS,
          payload: { name: 'Admin' }
        }
      ];

      axios.get = jest.fn(url => Promise.resolve({
        data: {
          success: true,
          user: { name: 'Admin' }
        }
      }));

      const dispatch = jest.fn();
      const getState = jest.fn(() => ({
        url: `${api}/checkuser`
      }));

      await checkUser('1234')(dispatch, getState);

      expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
      expect(dispatch.mock.calls[1][0]).toEqual(expected[1]);
    });

    it('should login user if check was successful and call user list if user is admin', async () => {
      const expected = [
        {
          type: types.CHECK_USER
        },
        {
          type: types.LOAD_USER_LIST
        }
      ];

      axios.get = jest.fn(url => Promise.resolve({
        data: {
          success: true,
          user: { name: 'Admin', isAdmin: true }
        }
      }));

      const dispatch = jest.fn();
      const getState = jest.fn(() => ({
        url: `${api}/checkuser`
      }));

      await checkUser({})(dispatch, getState);

      expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
      expect(dispatch.mock.calls[1][0]).toEqual(expected[1]);
    });

    it('should call error if responce was unsuccessful', async () => {
      const expected = [
        {
          type: types.CHECK_USER
        },
        {
          type: types.CHECK_USER_ERROR
        }
      ];

      axios.get = jest.fn(url => Promise.resolve({
        data: {
          success: false
        }
      }));

      const dispatch = jest.fn();
      const getState = jest.fn(() => ({
        url: `${api}/checkuser`
      }));

      await checkUser({})(dispatch, getState);

      expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
      expect(dispatch.mock.calls[1][0]).toEqual(expected[1]);
    });

    it('should not call error if there is an error during request', async () => {
      const expected = [
        {
          type: types.CHECK_USER
        }
      ];

      axios.get = jest.fn(url => Promise.reject());

      const dispatch = jest.fn();
      const getState = jest.fn(() => ({
        url: `${api}/checkuser`
      }));

      await checkUser({})(dispatch, getState);

      expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
      expect(dispatch.mock.calls.length).toBe(1);
    });
  });

  describe('logout tests', () => {
    let localStorageMock;

    beforeAll(() => {
      localStorageMock = {
        getItem: jest.fn(),
        setItem: jest.fn(),
        clear: jest.fn(),
        removeItem: jest.fn()
      };
      global.localStorage = localStorageMock;
    });

    it('should clear localStorage and user state on logout', () => {
      expect(logoutUser()).toEqual({ type: types.LOGOUT_USER });
      expect(localStorageMock.removeItem).toBeCalledWith('token');
    });
  });
});
