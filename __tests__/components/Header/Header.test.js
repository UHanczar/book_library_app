import React from 'react';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';

import Header from '../../../src/components/Header/Header';

describe('Header tests', () => {
  let wrapper;
  let logoutUser;
  let user;

  beforeEach(() => {
    logoutUser = jest.fn();
    user = {
      authenticated: false,
      userData: null
    };
    const options = new ReactRouterEnzymeContext();
    wrapper = (u = user, logout = logoutUser) => mount(
      <Header
        destination='/login'
        logoutUser={logout}
        user={u}
      />, options.get());
  });

  it('should exist', () => {
    const conditionalWrapper = wrapper();
    expect(conditionalWrapper).toBeDefined();
  });

  it('should get render itserf properly', () => {
    const conditionalWrapper = wrapper();
    expect(conditionalWrapper.find('.header__container').length).toBe(1);
  });

  it('should get render itserf properly', () => {
    const conditionalWrapper = wrapper();
    expect(conditionalWrapper.find('.header__container').length).toBe(1);
  });

  it('should not render logout button if user is not authenticated', () => {
    const conditionalWrapper = wrapper();
    expect(conditionalWrapper.find('.header-btnr').length).toBe(0);
  });

  it('should render logout button if user is authenticated', () => {
    const conditionalWrapper = wrapper({ authenticated: true, userData: { firstName: 'John' } });
    expect(conditionalWrapper.find('.header-btn').length).toBe(1);
  });

  it('should call logoutUser on button click', () => {
    const conditionalWrapper = wrapper({ authenticated: true, userData: { firstName: 'John' } });
    conditionalWrapper.find('.logout-btn').simulate('click');
    expect(logoutUser.mock.calls.length).toBe(1);
  });
});
