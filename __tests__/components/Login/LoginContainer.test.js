import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';

import LoginContainer from '../../../src/components/Login/LoginContainer';

jest.mock('redux-form/immutable', () => ({
  Field:  'Field',
  reduxForm: redux_form_configuration => wrapped_form_component => wrapped_form_component
}));

describe('LoginContainer tests', () => {
  let wrapper;
  let store;
  let loginUser;
  let logoutUser;

  beforeEach(() => {
    const initialState = {
      bookList: { loading: false, list: null },
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
    loginUser = jest.fn();
    logoutUser = jest.fn();

    const mockStore = configureMockStore([thunk]);
    store = mockStore(initialState);
    const options = new ReactRouterEnzymeContext();
    wrapper = mount(
      <Provider store={store}>
        <LoginContainer
          loginUser={loginUser}
          logoutUser={logoutUser}
        />
      </Provider>, options.get());
  });

  it('should be defined', () => {
    expect(wrapper).toBeDefined();
  });
});
