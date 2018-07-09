import React from 'react';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';

import BookListBadge from '../../../src/components/BookListBadge/BookListBadge';

describe('BookListItemBadge tests', () => {
  let wrapper;
  let bookList;

  describe('render tests', () => {
    beforeEach(() => {
      bookList = [{
        pathName: 'pathName',
        name: 'name',
        authors: ['author'],
        ratingData: [{ rating: '2' }, { rating: '3' }],
        _id: '1'
      }];
      const options = new ReactRouterEnzymeContext();
      wrapper = (bl = bookList) => mount(
        <BookListBadge
          bookList={bl}
        />,
        options.get()
      );
    });

    it('should exist', () => {
      expect(wrapper()).toBeDefined();
    });

    it('should render proper amount of badge bomponents', () => {
      expect(wrapper().find('Link').length).toBe(1);
    });
  });

  describe('conditional render tests', () => {
    beforeEach(() => {
      bookList = [{
        pathName: 'pathName',
        name: 'name',
        authors: ['author1', 'author2'],
        ratingData: [{ rating: '2' }, { rating: '3' }],
        _id: '1'
      }];
      const options = new ReactRouterEnzymeContext();
      wrapper = (bl = bookList) => mount(
        <BookListBadge
          bookList={bl}
        />,
        options.get()
      );
    });

    it('should render proper amount of authors', () => {
      expect(wrapper().find('.collection__authors').props().children.length).toBe(2);
    });
  })
});
