import axios from 'axios';
import { flashErrorMessage } from 'redux-flash';

import { api } from '../../config/config';
import {
  FETCH_BOOK_ITEM,
  FETCH_BOOK_ITEM_SUCCESS,
  FETCH_BOOK_ITEM_ERROR,
  REMOVE_ITEM
} from '../actions/types';

export const getBookItem = bookId => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_BOOK_ITEM
    });

    const bookItem = await axios.get(`${api}/book_item/${bookId}`);

    if (bookItem.data.success) {
      dispatch({
        type: FETCH_BOOK_ITEM_SUCCESS,
        payload: bookItem.data.book
      });
    }
  } catch (error) {
    const errorMessage = flashErrorMessage('Book item was not loaded.');
    dispatch({
      type: FETCH_BOOK_ITEM_ERROR
    });

    dispatch(errorMessage);
  }
};


export const removeBookItem = () => ({
  type: REMOVE_ITEM
});
