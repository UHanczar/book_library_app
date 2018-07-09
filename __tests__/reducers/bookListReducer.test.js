import bookListReducer from '../../src/reducers/bookListReducer';
import {
  FETCH_BOOK_LIST,
  FETCH_BOOK_LIST_SUCCESS,
  FETCH_BOOK_LIST_ERROR,
  UPDATE_BOOK_LIST_RATE_DATA
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

  it('should load book list, sort it and set load to false', () => {
    expect(bookListReducer({
      loading: true,
      list: null
    }, {
      type: FETCH_BOOK_LIST_SUCCESS,
      payload: [{ name: 'js list', pathName: 'js_list' }, { name: 'ts list', pathName: 'ts_list' }, { name: 'ts list', pathName: 'ts_list' }, { name: 'js list', pathName: 'js_list' }, { name: 'js list', pathName: 'js_list' }]
    })).toEqual({
      loading: false,
      list: [{ name: 'js list', pathName: 'js_list' }, { name: 'js list', pathName: 'js_list' }, { name: 'js list', pathName: 'js_list' }, { name: 'ts list', pathName: 'ts_list' }, { name: 'ts list', pathName: 'ts_list' }]
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
      list: null
    }, {
      type: 'FETCH_SOMETHING',
      payload: [{ name: 'book list', pathName: 'book_list' }]
    })).toEqual({
      loading: false,
      list: null
    });
  });

  it('should not change state, when no action dispatched', () => {
    expect(bookListReducer()).toEqual({
      loading: false,
      list: null
    });
  });

  it('should update rating data of precise book', () => {
    expect(bookListReducer({
      loading: false,
      list: [{ _id: '1', name: 'book list', pathName: 'book_list' }, { _id: '2', name: 'css', pathName: 'css' }]
    }, {
      type: UPDATE_BOOK_LIST_RATE_DATA,
      payload: { _id: '1', name: 'js', pathName: 'js' }
    })).toEqual({
      loading: false,
      list: [{ _id: '1', name: 'js', pathName: 'js' }, { _id: '2', name: 'css', pathName: 'css' }]
    });
  });
});
