import React from 'react';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';

import BookList from '../../../src/components/BookList/BookList';

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

describe('BookLIst tests', () => {
  let wrapper;
  let toggleSidebar;
  let toggleFilterBar;
  let toggleBookListTableView;
  let bookList;
  let showAsTable;
  let options;

  beforeEach(() => {
    bookList = [{
      pathName: 'pathName',
      name: 'name',
      authors: ['author'],
      ratingData: [],
      _id: '1'
    }];
    toggleSidebar = jest.fn();
    toggleFilterBar = jest.fn();
    toggleBookListTableView = jest.fn();
    options = new ReactRouterEnzymeContext();
  });

  describe('BookLIst render tests', () => {
    beforeEach(() => {
      showAsTable = false;
      wrapper = mount(
        <BookList
          bookList={bookList}
          toggleSidebar={toggleSidebar}
          toggleFilterBar={toggleFilterBar}
          toggleBookListTableView={toggleBookListTableView}
          showAsTable={showAsTable}
        />, options.get());
    });

    it('should exist', () => {
      expect(wrapper).toBeDefined();
    });

    it('should render BookListItemCard component', () => {
      expect(wrapper.find('.card-item')).toBeDefined();
      expect(wrapper.find('.badge__container').length).toBe(0);
    });
  });

  describe('BookLIst conditional component rendering', () => {
    beforeEach(() => {
      showAsTable = true;
      wrapper = mount(
        <BookList
          bookList={bookList}
          toggleSidebar={toggleSidebar}
          toggleFilterBar={toggleFilterBar}
          toggleBookListTableView={toggleBookListTableView}
          showAsTable={showAsTable}
        />, options.get());
    });

    it('should render BookListBadge component', () => {
      expect(wrapper.find('.card-item').length).toBe(0);
      expect(wrapper.find('.badge__container').length).toBe(1);
    });
  });
});
