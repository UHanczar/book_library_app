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
  const wrapper = (
    book,
    path = match,
    Component = BookItem,
    getBook = getBookItem,
    removeBook = removeBookItem
  ) =>
    mount(
      <Component
        bookItem={book}
        match={path}
        getBookItem={getBook}
        removeBookItem={removeBook}
      />);

  beforeEach(() => {
    getBookItem = jest.fn();
    removeBookItem = jest.fn();
    match = { params: { id: '1' } };
  });

  describe('book not exist state', () => {
    it('should return null if there is no book', () => {
      const conditionalWrapper = wrapper({ loading: null, book: null });
      expect(conditionalWrapper.children().props().children).toBe(null);
    });
  });

  describe('loading state', () => {
    it('should return Loader component', () => {
      const conditionalWrapper = wrapper({ loading: true, book: null });
      expect(conditionalWrapper.find('.loader-wrapper-container').length).toBe(1);
    });
  });

  describe('bookItem loaded successfully state', () => {
    let conditionalWrapper;
    beforeEach(() => {
      conditionalWrapper = wrapper({ loading: false, book: { name: 'book', authors: [], publisher: 'John', year: '2016', rating: '0', description: 'Description' } });
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
