import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';

import MainContainer from '../../../src/components/Main/MainContainer';

jest.doMock('../../../src/components/Sidebar/SidebarContainer', () => ({
  SidebarContainer: {
    fetchBookCategories: jest.fn(() => {})
  }
}));

describe('MainContainer tests', () => {
  let wrapper;
  let store;
  let filterByDate;
  let filterByRate;
  let fetchBookList;

  beforeEach(() => {
    const initialState = {
      bookCategories: [{
        categoryName: 'JavaScript',
        categoryPathName: 'javascript'
      }],
      bookList: {
        loading: false,
        list: [{
          authors: ['John Dow'],
          name: 'name',
          pathName: 'name',
          publisher: 'publ',
          year: '2016',
          pages: '341',
          rating: '0',
          description: 'desc',
          isAvailable: true,
          currentReader: 'name',
          _id: '1' }] },
      bookListFilter: {
        byDateFilter: false,
        byRateFilter: false
      }
    };
    filterByDate = jest.fn();
    filterByRate = jest.fn();
    fetchBookList = jest.fn();
    const mockStore = configureMockStore([thunk]);
    store = mockStore(initialState);
    const options = new ReactRouterEnzymeContext();
    wrapper = mount(
      <Provider store={store}>
        <MainContainer
          filterByDate={filterByDate}
          filterByRate={filterByRate}
          fetchBookList={fetchBookList}
        />
      </Provider>, options.get());
  });

  it('should be defined', () => {
    // expect(wrapper).toBeDefined();
  });
});
