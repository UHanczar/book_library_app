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

  describe('Login render tests', () => {
    beforeAll(() => {
      loginUser = jest.fn();
      handleSubmit = jest.fn(cb => cb());
      const initialState = {
        user: { authenticated: false, user: null },
        login: {
          fields: {
            login: {
              touched: true
            },
            password: {
              touched: true
            }
          },
          syncErrors: {
            login: 'Please enter a valid login',
            password: 'Please enter a valid password'
          }
        },
        history: {}
      };

      const mockStore = configureMockStore([thunk]);
      const store = mockStore(initialState);

      wrapper = mount(
        <Provider store={store}>
          <Login
            {...initialState}
            handleSubmit={handleSubmit}
            loginUser={loginUser}
            history={{}}
          />
        </Provider>
      );
    });

    beforeEach(() => {
      loginUser.mockClear();
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

    it('should call loginUser on handleSubmit calling', () => {
      wrapper.props().children.props.handleSubmit(loginUser);

      expect(wrapper.props().children.props.loginUser).toBeCalled();
      expect(loginUser.mock.calls.length).toBe(1);
    });
  });

  describe('Login conditional render tests', () => {
    beforeEach(() => {
      loginUser = jest.fn();
      handleSubmit = jest.fn();
      const initialState = {
        user: { authenticated: false, user: null, loading: true },
        form: 'login'
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
