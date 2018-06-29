import React from 'react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import Login from '../../../src/components/Login/Login';

jest.mock('redux-form/immutable', () => ({
  Field:  'Field',
  reduxForm: redux_form_configuration => wrapped_form_component => wrapped_form_component
}));

const mockStore = configureMockStore();


describe('Login tests', () => {
  let wrapper;
  let handleSubmit;
  let loginUser;
  let store;

  beforeEach(() => {
    handleSubmit = jest.fn();
    loginUser = jest.fn();
    const initialState = {};

    store = mockStore(initialState);

    wrapper = mount(
      <Provider store={store}>
        <Login
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
});
