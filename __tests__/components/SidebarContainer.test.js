import React from 'react';
import configureMockStore from 'redux-mock-store';

import SidebarContainer from '../../src/components/Sidebar/SidebarContainer';

const mockStore = configureMockStore();

describe('Footer tests', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    const initialState = {
      bookCategories: [{
        categoryName: 'JavaScript',
        categoryPathName: 'javascript'
      }]
    };

    store = mockStore(initialState);

    wrapper = shallow(<SidebarContainer store={store} />);
  });

  it('should pass props correctly', () => {
    expect(wrapper.props().bookCategories.length).toBe(1);
    expect(wrapper.props().fetchBookCategories).toEqual(expect.any(Function));
  });
});
