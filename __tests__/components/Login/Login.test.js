import React from 'react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import Login from '../../../src/components/Login/Login';

jest.mock('redux-form/immutable', () => ({
  Field:  'Field',
  reduxForm: redux_form_configuration => wrapped_form_component => wrapped_form_component
}));

describe('Login tests', () => {
  let wrapper;
  let handleSubmit;
  let loginUser;
  let mockCall = jest.fn();

  describe('Login render tests', () => {
    beforeEach(() => {
      loginUser = jest.fn(() => mockCall());
      handleSubmit = jest.fn(() => loginUser());
      const initialState = {
        user: { authenticated: false, user: null },
        form: {
          login: {
            fields: {
              login: {
                touched: false
              },
              password: {
                touched: false
              }
            },
            syncErrors: {
              login: 'Please enter a valid login',
              password: 'Please enter a valid password'
            }
          }
        }
      };

      const mockStore = configureMockStore([thunk]);
      const store = mockStore(initialState);

      wrapper = mount(
        <Provider store={store}>
          <Login
            {...initialState}
            handleSubmit={handleSubmit}
            loginUser={loginUser}
          />
        </Provider>);
    });

    it('should be defined', () => {
      expect(wrapper).toBeDefined();
    });

    it('should pass props correctly', () => {
      expect(wrapper.props().children.props.loginUser).toEqual(expect.any(Function));
      expect(wrapper.props().children.props.handleSubmit).toEqual(expect.any(Function));
    });

    it('should call handleSubmit on submit event', () => {
      wrapper.find('.submit-form').simulate('submit');
      expect(handleSubmit.mock.calls.length).toBe(1);
    });

    it('should call handleSubmit on submit event', () => {
      console.log(wrapper.find('.submit-form').props());
    });
  });

  describe('Login render tests', () => {
    beforeEach(() => {
      loginUser = jest.fn(() => mockCall());
      handleSubmit = jest.fn(() => loginUser());
      const initialState = {
        user: { authenticated: false, user: null, loading: true },
        form: {
          login: {
            fields: {
              login: {
                touched: false
              },
              password: {
                touched: false
              }
            },
            syncErrors: {
              login: 'Please enter a valid login',
              password: 'Please enter a valid password'
            }
          }
        }
      };

      const mockStore = configureMockStore([thunk]);
      const store = mockStore(initialState);

      wrapper = mount(
        <Provider store={store}>
          <Login
            {...initialState}
            handleSubmit={handleSubmit}
            loginUser={loginUser}
          />
        </Provider>);
    });

    it('should be defined', () => {
      expect(wrapper.find('.loader-wrapper-container').length).toBe(1);
    });
  });
});
