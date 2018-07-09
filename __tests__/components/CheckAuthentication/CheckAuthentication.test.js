import React from 'react';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import Login from '../../../src/components/Login/LoginContainer';
import CheckAuthentication from '../../../src/components/CheckAuthentication/CheckAuthentication';

jest.mock('redux-form/immutable', () => ({
  Field:  'Field',
  reduxForm: redux_form_configuration => wrapped_form_component => wrapped_form_component
}));

describe('CheckAuthentication tests', () => {
  let wrapper;
  let initialState;

  beforeEach(() => {
    const options = new ReactRouterEnzymeContext();
    const ConditionalComponent = CheckAuthentication(Login);

    wrapper = state => mount(
      <Provider store={state}>
        <ConditionalComponent />
      </Provider>,
      options.get()
    );
  });

  describe('render tests', () => {
    let component;
    beforeEach(() => {
      initialState = {
        user: { authenticated: false, user: null },
        form: 'login',
        history: {}
      };
      const mockStore = configureMockStore([thunk]);
      const store = mockStore(initialState);
      component = wrapper(store);
    });
    it('should exist', () => {
      expect(component).toBeDefined();
    });

    it('should render login component', () => {
      expect(component.find('.login__container').length).toBe(1);
    });
  });

  describe('conditional render tests', () => {
    let component;
    beforeEach(() => {
      initialState = {
        user: { authenticated: true, user: { name: 'admin' } },
        form: 'login',
        history: {
          location: {
            pathname: '/login'
          },
          replace: jest.fn()
        }
      };
      const mockStore = configureMockStore([thunk]);

      const store = mockStore(initialState);
      component = wrapper(store);
    });

    it('should not render login component', () => {
      expect(component.find('Authentication').props().history.length).toBe(1);
      expect(component.find('Authentication').props().history.action).toBe('REPLACE');
      expect(component.find('Authentication').props().history.location.pathname).toBe('/');
    });
  });
});
