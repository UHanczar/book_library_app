import React from 'react';
import configureMockStore from 'redux-mock-store';

import LoginContainer from '../../../src/components/Login/LoginContainer';

const mockStore = configureMockStore();

describe('LoginContainer tests', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    const initialState = {};

    store = mockStore(initialState);

    wrapper = shallow(<LoginContainer store={store} />);
  });

  it('should pass props correctly', () => {
    expect(wrapper).toBeDefined();
  });
});
