import axios from 'axios';
import { flashErrorMessage } from 'redux-flash';

import { FETCH_BOOK_CATEGORIES } from './types';
import { api } from '../../config/config';

export const fetchBookCategories = () => async (dispatch) => {
  try {
    const bookCategories = await axios.get(`${api}/categories`);
    if (bookCategories.data.success) {
      dispatch({
        type: FETCH_BOOK_CATEGORIES,
        payload: bookCategories.data.bookCategories
      });
    }
  } catch (error) {
    const errorMessage = flashErrorMessage('Book categories was not loaded.');
    dispatch(errorMessage);
  }
};
