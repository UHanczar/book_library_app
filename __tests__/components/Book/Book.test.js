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
  let conditionalWrapper;
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

  beforeAll(() => {
    book = {
      authors: ['John Dow'],
      name: 'name',
      pathName: 'name',
      publisher: 'publ',
      year: '2016',
      pages: '341',
      ratingData: [{ rating: '3', userId: '2' }, { rating: '2', userId: '1' }],
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
  });

  describe('Book tests', () => {
    beforeEach(() => {
      conditionalWrapper = wrapper(book, user, assignItem, unassignItem, updateBookListRateData, assigning, rateItem);
    });

    it('should exist', () => {
      expect(conditionalWrapper).toBeDefined();
    });

    it('should render component properly', () => {
      expect(conditionalWrapper.find('.book__item-container-card').length).toBe(1);
    });
  });

  describe('Book instance tests', () => {
    beforeEach(() => {
      user = {
        authenticated: true,
        userData: {
          isAdmin: true,
          _id: '2'
        }
      };
      conditionalWrapper = wrapper(book, user, assignItem, unassignItem, updateBookListRateData, assigning, rateItem);
    });

    it('should change rateUpdated to true and update book on component unmounting', () => {
      const wrapperInstance = conditionalWrapper.instance();

      wrapperInstance.rateBook(4);
      expect(rateItem).toBeCalledWith(4);
      expect(conditionalWrapper.state().rateUpdated).toBeTruthy();

      conditionalWrapper.unmount();


      expect(updateBookListRateData).toBeCalled();
    });

    it('should assign book on assignBookToUser calling', () => {
      const wrapperInstance = conditionalWrapper.instance();

      wrapperInstance.assignBookToUser('1', '2');
      expect(assignItem).toBeCalledWith('1', '2');
      expect(conditionalWrapper.state().rateUpdated).toBeTruthy();

      conditionalWrapper.unmount();


      expect(updateBookListRateData).toBeCalled();
    });

    it('should unassign book on unassignBookToUser calling', () => {
      const wrapperInstance = conditionalWrapper.instance();

      wrapperInstance.unassignBookToUser('1');
      expect(unassignItem).toBeCalledWith('1');
      expect(conditionalWrapper.state().rateUpdated).toBeTruthy();

      conditionalWrapper.unmount();


      expect(updateBookListRateData).toBeCalled();
    });
  });

  describe('Book render method tests', () => {
    beforeEach(() => {
      book = {
        authors: ['John Dow'],
        name: 'name',
        pathName: 'name',
        publisher: 'publ',
        year: '2016',
        pages: '341',
        ratingData: [],
        description: 'desc',
        isAvailable: false,
        currentReader: 'name',
        returnDate: 99999134243434,
        _id: 'adfasdfsadf'
      };

      user = {
        authenticated: true,
        userData: {
          isAdmin: true,
          _id: '3'
        }
      };
      conditionalWrapper = wrapper(book, user, assignItem, unassignItem, updateBookListRateData, assigning, rateItem);
    });

    it('should change rateUpdated to true and update book on component unmounting', () => {
      const wrapperInstance = conditionalWrapper.instance();

      wrapperInstance.rateBook = jest.fn();
      conditionalWrapper.find('StarRatings').first().props().changeRating();

      expect(wrapperInstance.rateBook).toBeCalled();
    });
  });
});
