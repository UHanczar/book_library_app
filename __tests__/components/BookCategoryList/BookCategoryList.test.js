import React from 'react';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';

import BookCategoryList from '../../../src/components/BookCategoryList/BookCategoryList';

jest.doMock('../../../src/components/ShowSidebarButtons/ShowSidebarButtons', () => {
  const ShowSidebarButtonsMock = () => <div />;
  return ShowSidebarButtonsMock;
});

jest.doMock('../../../src/components/BookListItemCard/BookListItemCard', () => {
  const BookListItemCardMock = () => <div />;
  return BookListItemCardMock;
});

jest.doMock('../../../src/components/BookListBadge/BookListBadge', () => {
  const BookListBadgeMock = () => <div />;
  return BookListBadgeMock;
});

describe('BookCategoryList tests', () => {
  let toggleSidebar;
  let toggleFilterBar;
  let toggleBookListTableView;
  let bookList;
  let showAsTable;
  let match;
  const options = new ReactRouterEnzymeContext();
  const wrapper = (
    list = bookList,
    st = showAsTable,
    ts = toggleSidebar,
    tf = toggleFilterBar,
    ttv = toggleBookListTableView,
    m = match
  ) =>
    mount(
      <BookCategoryList
        toggleSidebar={ts}
        toggleFilterBar={tf}
        toggleBookListTableView={ttv}
        bookList={list}
        showAsTable={st}
        match={m}
      />, options.get());

  beforeEach(() => {
    toggleSidebar = jest.fn();
    toggleFilterBar = jest.fn();
    toggleBookListTableView = jest.fn();
    bookList = [{ name: 'name', pathName: 'name', categoryKeys: [], _id: '1' }];
    showAsTable = false;
    match = { params: { name: 'js' } };
  });

  it('should exist', () => {
    const conditionalWrapper = wrapper();
    expect(conditionalWrapper).toBeDefined();
  });

  describe('BookListItemCard render block', () => {
    it('should render BookListItemCard', () => {
      const conditionalWrapper = wrapper();
      expect(conditionalWrapper.find('.book__item-container').length).toBe(1);
      expect(conditionalWrapper.find('.show-table').length).toBe(0);
    });
  });

  describe('BookListBadge render block', () => {
    it('should render BookListBadge', () => {
      const conditionalWrapper = wrapper(bookList, true);

      expect(conditionalWrapper.find('.show-table').length).toBe(1);
    });
  });

  describe('component props update', () => {
    it('should update filteredList when props updated', () => {
      const conditionalWrapper = shallow(
        <BookCategoryList
          toggleSidebar={toggleSidebar}
          toggleFilterBar={toggleFilterBar}
          toggleBookListTableView={toggleBookListTableView}
          bookList={null}
          showAsTable={false}
          match={match}
        />, options.get());
      const newProps = [{ name: 'js', pathName: 'js', categoryKeys: ['js'], authors: [], _id: '1' }];

      conditionalWrapper.setProps({ bookList: newProps });

      expect(conditionalWrapper.state().filteredList).toEqual(newProps);
    });

    it('should not filteredList when props do not match', () => {
      const conditionalWrapper = shallow(
        <BookCategoryList
          toggleSidebar={toggleSidebar}
          toggleFilterBar={toggleFilterBar}
          toggleBookListTableView={toggleBookListTableView}
          bookList={null}
          showAsTable={false}
          match={match}
        />, options.get());
      const newProps = [{ name: 'js', pathName: 'js', categoryKeys: ['css'], authors: [], _id: '1' }];

      conditionalWrapper.setProps({ bookList: newProps });

      expect(conditionalWrapper.state().filteredList).not.toEqual(newProps);
    });
  });
});
