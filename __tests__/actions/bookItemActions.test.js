import axios from 'axios';

import {
  getBookItem,
  removeBookItem,
  rateItem,
  assignItem,
  unassignItem
} from '../../src/actions/bookItemActions';
import * as types from '../../src/actions/types';
import { api } from '../../config/config';

describe('book item actions', () => {
  describe('getBookItemAction', () => {
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
  });

  describe('removeBookItem action', () => {
    it('should remove book item from reducer properly', () => {
      expect(removeBookItem()).toEqual({
        type: types.REMOVE_ITEM
      });
    });
  });

  describe('rateItem actions', () => {
    let localStorageMock;

    beforeAll(() => {
      localStorageMock = {
        getItem: jest.fn(),
        setItem: jest.fn(),
        removeItem: jest.fn(),
        clear: jest.fn()
      };
      global.localStorage = localStorageMock;
    });

    it('should rate book successfully', async () => {
      const expected = [
        {
          type: types.RATE_ITEM
        },
        {
          type: types.RATE_ITEM_SUCCESS,
          payload: [{ rating: '4' }]
        }
      ];

      axios.post = jest.fn(url => Promise.resolve({
        data: {
          success: true,
          ratingData: [{ rating: '4' }]
        }
      }));

      const dispatch = jest.fn();
      const getState = jest.fn(() => ({
        url: `${api}/book_item/rate`,
        user: {
          userData: {
            _id: '1'
          }
        },
        bookItem: {
          book: {
            _id: '2'
          }
        }
      }));

      await rateItem('4')(dispatch, getState);

      expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
      expect(dispatch.mock.calls[1][0]).toEqual(expected[1]);
    });

    it('should call error message if request was unsuccessful', async () => {
      const expected = [
        {
          type: types.RATE_ITEM
        },
        {
          type: types.RATE_ITEM_ERROR
        }
      ];

      axios.post = jest.fn(url => Promise.resolve({
        data: {
          success: false
        }
      }));

      const dispatch = jest.fn();
      const getState = jest.fn(() => ({
        url: `${api}/book_item/rate`,
        user: {
          userData: {
            _id: '1'
          }
        },
        bookItem: {
          book: {
            _id: '2'
          }
        }
      }));

      await rateItem('4')(dispatch, getState);

      expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
      expect(dispatch.mock.calls[1][0]).toEqual(expected[1]);
    });

    it('should call error message if error occurs', async () => {
      const expected = [
        {
          type: types.RATE_ITEM
        },
        {
          type: types.RATE_ITEM_ERROR
        }
      ];

      axios.post = jest.fn(url => Promise.reject());

      const dispatch = jest.fn();
      const getState = jest.fn(() => ({
        url: `${api}/book_item/rate`,
        user: {
          userData: {
            _id: '1'
          }
        },
        bookItem: {
          book: {
            _id: '2'
          }
        }
      }));

      await rateItem('4')(dispatch, getState);

      expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
      expect(dispatch.mock.calls[1][0]).toEqual(expected[1]);
    });
  });

  describe('assignItem actions', () => {
    let localStorageMock;

    beforeAll(() => {
      localStorageMock = {
        getItem: jest.fn(),
        setItem: jest.fn(),
        removeItem: jest.fn(),
        clear: jest.fn()
      };
      global.localStorage = localStorageMock;
    });

    it('should assign book to user successfully', async () => {
      const expected = [
        {
          type: types.ASSIGN_BOOK
        },
        {
          type: types.ASSIGN_BOOK_SUCCESS,
          payload: { name: 'js' }
        }
      ];

      axios.post = jest.fn(url => Promise.resolve({
        data: {
          success: true,
          book: { name: 'js' }
        }
      }));

      const dispatch = jest.fn();
      const getState = jest.fn(() => ({
        url: `${api}/book_item/assign`
      }));

      await assignItem('4', '1')(dispatch, getState);

      expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
      expect(dispatch.mock.calls[1][0]).toEqual(expected[1]);
    });

    it('should call error message if request was unsuccessful', async () => {
      const expected = [
        {
          type: types.ASSIGN_BOOK
        },
        {
          type: types.ASSIGN_BOOK_ERROR
        }
      ];

      axios.post = jest.fn(url => Promise.resolve({
        data: {
          success: false
        }
      }));

      const dispatch = jest.fn();
      const getState = jest.fn(() => ({
        url: `${api}/book_item/assign`
      }));

      await assignItem('4', '1')(dispatch, getState);

      expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
      expect(dispatch.mock.calls[1][0]).toEqual(expected[1]);
    });

    it('should call error message if error occurs', async () => {
      const expected = [
        {
          type: types.ASSIGN_BOOK
        },
        {
          type: types.ASSIGN_BOOK_ERROR
        }
      ];

      axios.post = jest.fn(url => Promise.reject());

      const dispatch = jest.fn();
      const getState = jest.fn(() => ({
        url: `${api}/book_item/assign`
      }));

      await assignItem('4', '1')(dispatch, getState);

      expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
      expect(dispatch.mock.calls[1][0]).toEqual(expected[1]);
    });
  });

  describe('unassignItem actions', () => {
    let localStorageMock;

    beforeAll(() => {
      localStorageMock = {
        getItem: jest.fn(),
        setItem: jest.fn(),
        removeItem: jest.fn(),
        clear: jest.fn()
      };
      global.localStorage = localStorageMock;
    });

    it('should unassignItem book successfully', async () => {
      const expected = [
        {
          type: types.UNASSIGN_BOOK
        },
        {
          type: types.UNASSIGN_BOOK_SUCCESS,
          payload: { name: 'js' }
        }
      ];

      axios.post = jest.fn(url => Promise.resolve({
        data: {
          success: true,
          book: { name: 'js' }
        }
      }));

      const dispatch = jest.fn();
      const getState = jest.fn(() => ({
        url: `${api}/book_item/unassign`
      }));

      await unassignItem('4')(dispatch, getState);

      expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
      expect(dispatch.mock.calls[1][0]).toEqual(expected[1]);
    });

    it('should call error message if request was unsuccessful', async () => {
      const expected = [
        {
          type: types.UNASSIGN_BOOK
        },
        {
          type: types.UNASSIGN_BOOK_ERROR
        }
      ];

      axios.post = jest.fn(url => Promise.resolve({
        data: {
          success: false
        }
      }));

      const dispatch = jest.fn();
      const getState = jest.fn(() => ({
        url: `${api}/book_item/unassign`
      }));

      await unassignItem('4')(dispatch, getState);

      expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
      expect(dispatch.mock.calls[1][0]).toEqual(expected[1]);
    });

    it('should call error message if error occurs', async () => {
      const expected = [
        {
          type: types.UNASSIGN_BOOK
        },
        {
          type: types.UNASSIGN_BOOK_ERROR
        }
      ];

      axios.post = jest.fn(url => Promise.reject());

      const dispatch = jest.fn();
      const getState = jest.fn(() => ({
        url: `${api}/book_item/unassign`
      }));

      await unassignItem('4')(dispatch, getState);

      expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
      expect(dispatch.mock.calls[1][0]).toEqual(expected[1]);
    });
  });
});
