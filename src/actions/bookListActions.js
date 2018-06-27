import axios from 'axios';
import { flashErrorMessage } from 'redux-flash';

import { api } from '../../config/config';
import {
  FETCH_BOOK_LIST,
  FETCH_BOOK_LIST_SUCCESS,
  FETCH_BOOK_LIST_ERROR
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
    const errorMessage = flashErrorMessage('List of books was not loaded.');
    dispatch(errorMessage);
    dispatch({
      type: FETCH_BOOK_LIST_ERROR
    });
  }
};

export const addBookList = () => {};
