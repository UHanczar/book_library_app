import React from 'react';
import ReactDOM from 'react-dom';

import BookItem from '../../../src/components/BookItem/BookItem';

jest.doMock('../../../src/components/Book/Book', () => {
  const BookMock = () => <div />;
  return BookMock;
});

jest.doMock('../../../src/components/Loader/Loader', () => {
  const LoaderMock = () => <div />;
  return LoaderMock;
});

describe('BookItem tests', () => {
  let getBookItem;
  let removeBookItem;
  let match;
  let user;
  let rateItem;
  let assignItem;
  let unassignItem;
  let updateBookListRateData;
  let assigning;
  const wrapper = (
    book,
    person = user,
    path = match,
    Component = BookItem,
    getBook = getBookItem,
    removeBook = removeBookItem,
    rate = rateItem,
    assign = assignItem,
    unassign = unassignItem,
    update = updateBookListRateData,
    a = assigning
  ) =>
    mount(
      <Component
        bookItem={book}
        match={path}
        getBookItem={getBook}
        removeBookItem={removeBook}
        user={person}
        rateItem={rate}
        assignItem={assign}
        unassignItem={unassign}
        updateBookListRateData={update}
        assigning={a}
      />);

  beforeEach(() => {
    getBookItem = jest.fn();
    removeBookItem = jest.fn();
    match = { params: { id: '1' } };
    rateItem = jest.fn();
    assignItem = jest.fn();
    unassignItem = jest.fn();
    updateBookListRateData = jest.fn();
    assigning = false;
  });

  describe('book not exist state', () => {
    it('should return null if there is no book', () => {
      const conditionalWrapper = wrapper({ loading: null, book: null }, { authenticated: false, userData: null });
      expect(conditionalWrapper.children().props().children).toBe(null);
    });
  });

  describe('loading state', () => {
    it('should return Loader component', () => {
      const conditionalWrapper = wrapper({ loading: true, book: null }, { authenticated: false, userData: null });
      expect(conditionalWrapper.find('.loader-wrapper-container').length).toBe(1);
    });
  });

  describe('bookItem loaded successfully state', () => {
    let conditionalWrapper;
    beforeEach(() => {
      conditionalWrapper = wrapper(
        {
          loading: false,
          assigning: false,
          book: {
            name: 'book',
            authors: [],
            publisher: 'John',
            year: '2016',
            ratingData: [],
            description: 'Description',
            isAvailable: true,
            currentReader: null,
            pages: '345',
            _id: '3232323'
          }
        },
        {
          authenticated: false,
          userData: null
        });
    });
    it('should return Book component', () => {
      expect(conditionalWrapper.find('.book__item-container-card').length).toBe(1);
    });

    it('should call removeBookItem on component unmounting', () => {
      conditionalWrapper.unmount();
      expect(removeBookItem.mock.calls.length).toBe(1);
    });
  });
});
