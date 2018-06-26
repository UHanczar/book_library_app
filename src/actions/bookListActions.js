import axios from 'axios';
import { flashErrorMessage } from 'redux-flash';

import { FETCH_BOOK_LIST } from './types';
import { api } from '../../config/config';

export const fetchBookList = () => async (dispatch) => {
  try {
    const bookList = await axios.get(`${api}/booklist`);
    if (bookList.data.success) {
      dispatch({
        type: FETCH_BOOK_LIST,
        payload: bookList.data.bookList
      });
    }
  } catch (error) {
    const errorMessage = flashErrorMessage('Book categories was not loaded.');
    dispatch(errorMessage);
  }
};
