import bookItemReducer from '../../src/reducers/bookItemReducer';
import {
  FETCH_BOOK_ITEM,
  FETCH_BOOK_ITEM_SUCCESS,
  FETCH_BOOK_ITEM_ERROR,
  REMOVE_ITEM
} from '../../src/actions/types';

describe('bookItemReducer tests', () => {
  it('should set loading property to true, when fetch request was sent', () => {
    expect(bookItemReducer({
      loading: false,
      book: null
    }, { type: FETCH_BOOK_ITEM })).toEqual({
      loading: true,
      book: null
    });
  });

  it('should load book list and set load to false', () => {
    expect(bookItemReducer({
      loading: true,
      book: null
    }, {
      type: FETCH_BOOK_ITEM_SUCCESS,
      payload: 'book'
    })).toEqual({
      loading: false,
      book: 'book'
    });
  });

  it('should set load to false, when error occurs', () => {
    expect(bookItemReducer({
      loading: true,
      book: null
    }, {
      type: FETCH_BOOK_ITEM_ERROR
    })).toEqual({
      loading: false,
      book: null
    });
  });

  it('should remove book on unMountingComponent', () => {
    expect(bookItemReducer({
      loading: false,
      book: 'book'
    }, {
      type: REMOVE_ITEM
    })).toEqual({
      loading: false,
      book: null
    });
  });

  it('should not change state, when unregistered action was dispatched', () => {
    expect(bookItemReducer({
      loading: false,
      book: 'book'
    }, {
      type: 'FETCH_SOMETHING'
    })).toEqual({
      loading: false,
      book: 'book'
    });
  });
});
