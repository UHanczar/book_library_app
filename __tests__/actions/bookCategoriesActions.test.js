import axios from 'axios';

import { fetchBookCategories } from '../../src/actions/bookCategoriesActions';
import * as types from '../../src/actions/types';
import { api } from '../../config/config';

describe('book categories actions', () => {
  it('should fetch book categories successfully', async () => {
    const expected = [
      {
        type: types.FETCH_BOOK_CATEGORIES,
        payload: ['book']
      }
    ];


    axios.get = jest.fn(url => Promise.resolve({ data: {
      success: true,
      bookCategories: ['book']
    } }));

    const dispatch = jest.fn();
    const getState = jest.fn(() => {
      url: `${api}/categories`;
    });

    await fetchBookCategories()(dispatch, getState);

    expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
  });

  it('should not call dispatch in case of book categories not loading', async () => {
    axios.get = jest.fn(url => Promise.resolve({ data: {
      success: false
    } }));

    const dispatch = jest.fn();
    const getState = jest.fn(() => {
      url: `${api}/categories`;
    });

    await fetchBookCategories()(dispatch, getState);

    expect(dispatch).not.toBeCalled();
  });

  it('should call flashError message in case throwing error', async () => {
    axios.get = jest.fn(url => Promise.reject());

    const dispatch = jest.fn();
    const getState = jest.fn(() => {
      url: `${api}/categories`;
    });

    await fetchBookCategories()(dispatch, getState);

    expect(dispatch.mock.calls[0][0].payload.message).toBe('Book categories was not loaded.');
  });
});