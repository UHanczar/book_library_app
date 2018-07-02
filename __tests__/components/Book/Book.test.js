import React from 'react';

import Book from '../../../src/components/Book/Book';

describe('Book tests', () => {
  let book;
  const wrapper = item => mount(<Book book={item} />);

  describe('Book tests', () => {
    let conditionalWrapper;
    beforeEach(() => {
      book = {
        authors: ['John Dow'],
        name: 'name',
        pathName: 'name',
        publisher: 'publ',
        year: '2016',
        pages: '341',
        rating: '0',
        description: 'desc',
        isAvailable: true,
        currentReader: 'name'
      };
      conditionalWrapper = wrapper(book);
    });

    it('should exist', () => {
      expect(conditionalWrapper).toBeDefined();
    });

    it('should render component properly', () => {
      expect(conditionalWrapper.find('.book__item-container-card').length).toBe(1);
    });
  });
});
