import axios from 'axios';

import { fetchBookList } from '../../src/actions/bookListActions';
import * as types from '../../src/actions/types';
import { api } from '../../config/config';

describe('book list actions', () => {
  it('should fetch book list successfully', async () => {
    const expected = [
      {
        type: types.FETCH_BOOK_LIST
      },
      {
        type: types.FETCH_BOOK_LIST_SUCCESS,
        payload: [{ name: 'js' }]
      }
    ];


    axios.get = jest.fn(url => Promise.resolve({ data: {
      success: true,
      bookList: [{ name: 'js' }]
    } }));

    const dispatch = jest.fn();
    const getState = jest.fn(() => {
      url: `${api}/booklist`;
    });

    await fetchBookList()(dispatch, getState);

    expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
    expect(dispatch.mock.calls[1][0]).toEqual(expected[1]);
  });

  it('should not call dispatch in case of book list not loading', async () => {
    const expected = [
      {
        type: types.FETCH_BOOK_LIST
      },
      {
        type: types.FETCH_BOOK_LIST_SUCCESS,
        payload: { name: 'js' }
      }
    ];

    axios.get = jest.fn(url => Promise.resolve({ data: {
      success: false
    } }));

    const dispatch = jest.fn();
    const getState = jest.fn(() => {
      url: `${api}/booklist`;
    });

    await fetchBookList()(dispatch, getState);

    expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
    expect(dispatch.mock.calls.length).toBe(1);
  });

  it('should call flashError message in case throwing error', async () => {
    const expected = [
      {
        type: types.FETCH_BOOK_LIST
      },
      {
        type: types.FETCH_BOOK_LIST_SUCCESS,
        payload: { name: 'js' }
      }
    ];

    axios.get = jest.fn(url => Promise.reject());

    const dispatch = jest.fn();
    const getState = jest.fn(() => {
      url: `${api}/booklist`;
    });

    await fetchBookList()(dispatch, getState);

    expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
    expect(dispatch.mock.calls[1][0]).toEqual({ type: 'FETCH_BOOK_LIST_ERROR' });
  });
});