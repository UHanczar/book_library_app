import React from 'react';
import configureMockStore from 'redux-mock-store';

import BookItemContainer from '../../../src/components/BookItem/BookItemContainer';

const mockStore = configureMockStore();

describe('BookItemContainer tests', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    const initialState = {
      bookItem: {
        name: 'book',
        pathName: 'book'
      },
      match: {
        params: {
          id: '1'
        }
      },
      getBookItem: jest.mock(),
      removeBookItem: jest.mock()
    };

    store = mockStore(initialState);

    wrapper = shallow(<BookItemContainer store={store} match={{ params: { id: '1' } }} />);
  });

  it('should be defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('should pass props correctly', () => {
    expect(wrapper.props().store.getState().bookItem).toEqual({
      name: 'book',
      pathName: 'book'
    });
  });
});
