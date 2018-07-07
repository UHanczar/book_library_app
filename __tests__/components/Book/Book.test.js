import React from 'react';

import Book from '../../../src/components/Book/Book';

describe('Book tests', () => {
  let book;
  let user;
  let assignItem;
  let unassignItem;
  let updateBookListRateData;
  let assigning;
  let rateItem;
  const wrapper = (item, person, assign, unassign, update, manage, rate) => mount(
    <Book
      book={item}
      user={person}
      assignItem={assign}
      unassignItem={unassign}
      updateBookListRateData={update}
      assigning={manage}
      rateItem={rate}
    />);

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
        ratingData: [{ rating: '3' }, { rating: '2' }],
        description: 'desc',
        isAvailable: true,
        currentReader: 'name',
        _id: 'adfasdfsadf'
      };
      user = {
        authenticated: false,
        userData: null
      };
      assignItem = jest.fn();
      unassignItem = jest.fn();
      updateBookListRateData = jest.fn();
      rateItem = jest.fn();
      assigning = false;
      conditionalWrapper = wrapper(book, user, assignItem, unassignItem, updateBookListRateData, assigning, rateItem);
    });

    it('should exist', () => {
      expect(conditionalWrapper).toBeDefined();
    });

    it('should render component properly', () => {
      expect(conditionalWrapper.find('.book__item-container-card').length).toBe(1);
    });
  });
});
