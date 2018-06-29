import React from 'react';
import configureMockStore from 'redux-mock-store';

import FlashMessagesListContainer from '../../../src/components/FlashMessagesList/FlashMessagesListContainer';

const mockStore = configureMockStore();

describe('FlashMessagesListContainer tests', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    const initialState = {
      flash: [{
        message: 'Success',
        isError: false
      }]
    };

    store = mockStore(initialState);

    wrapper = mount(<FlashMessagesListContainer store={store} />);
  });

  it('should be defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('should pass props correctly', () => {
    expect(wrapper.props().store.getState().flash.length).toBe(1);
  });
});
