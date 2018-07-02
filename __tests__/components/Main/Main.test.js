import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';

import * as filters from '../../../src/helpers/helpers';
import Main from '../../../src/components/Main/Main';

jest.doMock('../../../src/components/BookCategoryList/BookCategoryList', () => {
  const BookCategoryListMock = () => <div />;
  return BookCategoryListMock;
});

describe('Main tests', () => {
  let wrapper;
  let filterByDate;
  let filterByRate;
  let fetchBookList;
  let bookListFilter;
  let bookCategories;
  let bookList;
  let store;
  let initialState;
  const options = new ReactRouterEnzymeContext();

  beforeEach(() => {
    bookCategories = [{
      categoryName: 'JavaScript',
      categoryPathName: 'javascript'
    }];
    bookList = {
      loading: false,
      list: [{
        authors: ['John Dow'],
        name: 'name',
        pathName: 'name',
        publisher: 'publ',
        year: '2016',
        pages: '341',
        rating: '2',
        description: 'desc',
        isAvailable: true,
        currentReader: 'name',
        categoryKeys: ['js'],
        _id: '1'
      }, {
        authors: ['John Dow'],
        name: 'name',
        pathName: 'name',
        publisher: 'publ',
        year: '2017',
        pages: '341',
        rating: '3',
        description: 'desc',
        isAvailable: true,
        currentReader: 'name',
        categoryKeys: ['js'],
        _id: '2'
      }]
    };
    bookListFilter = {
      byDateFilter: false,
      byRateFilter: false
    };
    filterByDate = jest.fn();
    filterByRate = jest.fn();
    fetchBookList = jest.fn();
    initialState = {
      bookItem: {
        loading: true,
        book: {}
      }
    };
    const mockStore = configureMockStore([thunk]);
    store = mockStore(initialState);
    wrapper = (
      blf = bookListFilter,
      list = bookList,
      categories = bookCategories,
      fd = filterByDate,
      fr = filterByRate,
      fbl = fetchBookList
    ) =>
      shallow(
        <Main
          filterByDate={fd}
          filterByRate={fr}
          fetchBookList={fbl}
          bookList={bookList}
          bookCategories={categories}
          bookListFilter={blf}
        />, options.get());
  });

  it('should exist', () => {
    const conditionalWrapper = wrapper();
    expect(conditionalWrapper).toBeDefined();
  });

  describe('Main instance methods tests', () => {
    it('should set categorySidebarOpened to opposite on toggleSidebar', () => {
      const conditionalWrapper = wrapper();
      const oldState = conditionalWrapper.state();

      conditionalWrapper.instance().toggleSidebar();

      expect(conditionalWrapper.state().categorySidebarOpened)
        .not.toBe(oldState.categorySidebarOpened);
    });

    it('should set filterSidebarOpened to true on toggleFilterBar call and to false if Sidebar should be opened on toggleSidebar', () => {
      const conditionalWrapper = wrapper();

      conditionalWrapper.instance().toggleFilterBar();
      expect(conditionalWrapper.state().filterSidebarOpened).toBe(true);

      conditionalWrapper.instance().toggleSidebar();

      expect(conditionalWrapper.state().filterSidebarOpened).toBe(false);
    });

    it('should set filterSidebarOpened to opposite on toggleFilterBar', () => {
      const conditionalWrapper = wrapper();
      const oldState = conditionalWrapper.state();

      conditionalWrapper.instance().toggleFilterBar();

      expect(conditionalWrapper.state().filterSidebarOpened)
        .not.toBe(oldState.filterSidebarOpened);
    });

    it('should set categorySidebarOpened to true on toggleSidebar call and to false if Filterbar should be opened on toggleFilterBar', () => {
      const conditionalWrapper = wrapper();

      conditionalWrapper.instance().toggleSidebar();
      expect(conditionalWrapper.state().categorySidebarOpened).toBe(true);

      conditionalWrapper.instance().toggleFilterBar();

      expect(conditionalWrapper.state().categorySidebarOpened).toBe(false);
    });

    it('should set categorySidebarOpened to false on hideSidebars call', () => {
      const conditionalWrapper = wrapper();

      conditionalWrapper.instance().toggleSidebar();

      conditionalWrapper.instance().hideSidebars();

      expect(conditionalWrapper.state().categorySidebarOpened).toBe(false);
    });

    it('should set filterSidebarOpened to false on hideSidebars call', () => {
      const conditionalWrapper = wrapper();

      conditionalWrapper.instance().toggleFilterBar();

      conditionalWrapper.instance().hideSidebars();

      expect(conditionalWrapper.state().filterSidebarOpened).toBe(false);
    });

    it('should switch showAsTable on toggleBookListTableView', () => {
      const conditionalWrapper = wrapper();

      const oldState = conditionalWrapper.state().showAsTable;

      conditionalWrapper.instance().toggleBookListTableView();

      expect(conditionalWrapper.state().showAsTable).not.toBe(oldState);
    });
  });

  describe('helpers functions tests', () => {
    beforeEach(() => {
      filters.filterByDateHelper = jest.fn();
      filters.filterByRateHelper = jest.fn();
    });

    it('should call filterByDateHelper if byDateFilter', () => {
      const conditionalWrapper = wrapper({ byDateFilter: true, byRateFilter: false });

      expect(filters.filterByDateHelper.mock.calls.length).toBe(1);
    });

    it('should call filterByDateHelper if byDateFilter', () => {
      const conditionalWrapper = wrapper({ byDateFilter: false, byRateFilter: true });

      expect(filters.filterByRateHelper.mock.calls.length).toBe(1);
    });
  });

  describe('render tests', () => {
    it('should call hideSidebars on main component area click', () => {
      const conditionalWrapper = wrapper();
      conditionalWrapper.instance().hideSidebars = jest.fn();

      conditionalWrapper.find('.main__route-container').simulate('click');

      expect(conditionalWrapper.instance().hideSidebars.mock.calls.length).toBe(1);
    });

    it('should use Loader component on loading base route', () => {
      const conditionalWrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={[{ pathname: '/' }]}>
            <Main
              filterByDate={filterByDate}
              filterByRate={filterByRate}
              fetchBookList={fetchBookList}
              bookList={{ loading: true, list: [] }}
              bookCategories={bookCategories}
              bookListFilter={bookListFilter}
            />
          </MemoryRouter>
        </Provider>, options.get());

      expect(conditionalWrapper.find('.loader-wrapper-container').length).toBe(1);
    });

    it('should use BookItem component on according route', () => {
      const conditionalWrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={[{ pathname: '/book/143' }]}>
            <Main
              filterByDate={filterByDate}
              filterByRate={filterByRate}
              fetchBookList={fetchBookList}
              bookList={{ loading: true, list: [] }}
              bookCategories={bookCategories}
              bookListFilter={bookListFilter}
            />
          </MemoryRouter>
        </Provider>, options.get());

      expect(conditionalWrapper.find('BookItem').length).toBe(1);
    });

    it('should use BookCategoryList component on according route', () => {
      const conditionalWrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={[{ pathname: '/category/js' }]}>
            <Main
              filterByDate={filterByDate}
              filterByRate={filterByRate}
              fetchBookList={fetchBookList}
              bookList={{ loading: false, list: bookList.list }}
              bookCategories={bookCategories}
              bookListFilter={bookListFilter}
            />
          </MemoryRouter>
        </Provider>, options.get());

      expect(conditionalWrapper.find('BookCategoryList').length).toBe(1);
    });

    it('should use Loader component on BookCategoryList route loading', () => {
      const conditionalWrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={[{ pathname: '/category/js' }]}>
            <Main
              filterByDate={filterByDate}
              filterByRate={filterByRate}
              fetchBookList={fetchBookList}
              bookList={{ loading: true, list: [] }}
              bookCategories={bookCategories}
              bookListFilter={bookListFilter}
            />
          </MemoryRouter>
        </Provider>, options.get());

      expect(conditionalWrapper.find('Loader').length).toBe(1);
    });
  });
});
