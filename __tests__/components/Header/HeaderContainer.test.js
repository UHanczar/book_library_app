import React from 'react';
import configureMockStore from 'redux-mock-store';

import HeaderContainer from '../../../src/components/Header/HeaderContainer';

const mockStore = configureMockStore();

describe('HeaderContainer tests', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    const initialState = {};

    store = mockStore(initialState);

    wrapper = shallow(<HeaderContainer store={store} />);
  });

  it('should pass props correctly', () => {
    expect(wrapper).toBeDefined();
  });
});
