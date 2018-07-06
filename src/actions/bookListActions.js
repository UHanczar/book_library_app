import axios from 'axios';
import { flashErrorMessage } from 'redux-flash';

import { api } from '../../config/config';
import {
  FETCH_BOOK_LIST,
  FETCH_BOOK_LIST_SUCCESS,
  FETCH_BOOK_LIST_ERROR,
  UPDATE_BOOK_LIST_RATE_DATA
} from '../actions/types';

export const fetchBookList = () => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_BOOK_LIST
    });

    const bookList = await axios.get(`${api}/booklist`);
    if (bookList.data.success) {
      dispatch({
        type: FETCH_BOOK_LIST_SUCCESS,
        payload: bookList.data.bookList
      });
    }
  } catch (error) {
    dispatch({
      type: FETCH_BOOK_LIST_ERROR
    });
    const errorMessage = flashErrorMessage('List of books was not loaded.');
    dispatch(errorMessage);
  }
};

export const updateBookListRateData = book => ({
  type: UPDATE_BOOK_LIST_RATE_DATA,
  payload: book
});
