import axios from 'axios';

import {
  getBookItem,
  removeBookItem
} from '../../src/actions/bookItemActions';
import * as types from '../../src/actions/types';
import { api } from '../../config/config';

describe('book item actions', () => {
  it('should fetch book item successfully', async () => {
    const expected = [
      {
        type: types.FETCH_BOOK_ITEM
      },
      {
        type: types.FETCH_BOOK_ITEM_SUCCESS,
        payload: { name: 'js' }
      }
    ];


    axios.get = jest.fn(url => Promise.resolve({ data: {
      success: true,
      book: { name: 'js' }
    } }));

    const dispatch = jest.fn();
    const getState = jest.fn(() => {
      url: `${api}/book_item/123`;
    });

    await getBookItem()(dispatch, getState);

    expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
    expect(dispatch.mock.calls[1][0]).toEqual(expected[1]);
  });

  it('should not call dispatch in case of book item not loading', async () => {
    const expected = [
      {
        type: types.FETCH_BOOK_ITEM
      },
      {
        type: types.FETCH_BOOK_ITEM_SUCCESS,
        payload: { name: 'js' }
      }
    ];

    axios.get = jest.fn(url => Promise.resolve({ data: {
      success: false
    } }));

    const dispatch = jest.fn();
    const getState = jest.fn(() => {
      url: `${api}/book_item/123`;
    });

    await getBookItem()(dispatch, getState);

    expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
    expect(dispatch.mock.calls.length).toBe(1);
  });

  it('should call flashError message in case throwing error', async () => {
    const expected = [
      {
        type: types.FETCH_BOOK_ITEM
      },
      {
        type: types.FETCH_BOOK_ITEM_SUCCESS,
        payload: { name: 'js' }
      }
    ];

    axios.get = jest.fn(url => Promise.reject());

    const dispatch = jest.fn();
    const getState = jest.fn(() => {
      url: `${api}/book_item/123`;
    });

    await getBookItem()(dispatch, getState);

    expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
    expect(dispatch.mock.calls[1][0]).toEqual({ type: 'FETCH_BOOK_ITEM_ERROR' });
  });

  it('should remove book item from reducer properly', () => {
    expect(removeBookItem()).toEqual({
      type: types.REMOVE_ITEM
    });
  });
});
