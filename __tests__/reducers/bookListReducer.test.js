import bookListReducer from '../../src/reducers/bookListReducer';
import {
  FETCH_BOOK_LIST,
  FETCH_BOOK_LIST_SUCCESS,
  FETCH_BOOK_LIST_ERROR
} from '../../src/actions/types';

describe('bookListReducer tests', () => {
  it('should set loading property to true, when fetch request was sent', () => {
    expect(bookListReducer({
      loading: false,
      list: null
    }, { type: FETCH_BOOK_LIST })).toEqual({
      loading: true,
      list: null
    });
  });

  it('should load book list and set load to false', () => {
    expect(bookListReducer({
      loading: true,
      list: null
    }, {
      type: FETCH_BOOK_LIST_SUCCESS,
      payload: 'book list'
    })).toEqual({
      loading: false,
      list: 'book list'
    });
  });

  it('should set load to false, when error occurs', () => {
    expect(bookListReducer({
      loading: true,
      list: null
    }, {
      type: FETCH_BOOK_LIST_ERROR
    })).toEqual({
      loading: false,
      list: null
    });
  });

  it('should not change state, when unregistered action was dispatched', () => {
    expect(bookListReducer({
      loading: false,
      list: 'book list'
    }, {
      type: 'FETCH_SOMETHING'
    })).toEqual({
      loading: false,
      list: 'book list'
    });
  });
});
