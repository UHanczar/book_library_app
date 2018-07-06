import axios from 'axios';
import { flashErrorMessage } from 'redux-flash';

import { api } from '../../config/config';
import {
  FETCH_BOOK_ITEM,
  FETCH_BOOK_ITEM_SUCCESS,
  FETCH_BOOK_ITEM_ERROR,
  REMOVE_ITEM,
  RATE_ITEM,
  RATE_ITEM_SUCCESS,
  RATE_ITEM_ERROR,
  ASSIGN_BOOK,
  ASSIGN_BOOK_SUCCESS,
  ASSIGN_BOOK_ERROR,
  UNASSIGN_BOOK,
  UNASSIGN_BOOK_SUCCESS,
  UNASSIGN_BOOK_ERROR
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

export const rateItem = rating => async (dispatch, getState) => {
  try {
    dispatch({
      type: RATE_ITEM
    });

    const token = localStorage.getItem('token');
    const { user, bookItem } = getState();
    const body = {
      rating,
      userId: user.userData._id,
      bookId: bookItem.book._id
    };

    const ratedBook = await axios.post(`${api}/book_item/rate`, body, {
      headers: { Authorization: token }
    });

    if (ratedBook.data.success) {
      dispatch({
        type: RATE_ITEM_SUCCESS,
        payload: ratedBook.data.ratingData
      });
    } else {
      const errorMessage = flashErrorMessage(ratedBook.data.message);
      dispatch(errorMessage);
    }
  } catch (error) {
    const errorMessage = flashErrorMessage('There is an error occured.');
    dispatch({
      type: RATE_ITEM_ERROR
    });

    dispatch(errorMessage);
  }
};

export const assignItem = (bookId, userId) => async (dispatch) => {
  try {
    dispatch({
      type: ASSIGN_BOOK
    });

    const token = localStorage.getItem('token');

    const assignedBook = await axios.post(`${api}/book_item/assign`, { bookId, userId }, {
      headers: { Authorization: token }
    });

    if (assignedBook.data.success) {
      dispatch({
        type: ASSIGN_BOOK_SUCCESS,
        payload: assignedBook.data.book
      });
    } else {
      const errorMessage = flashErrorMessage(assignedBook.data.message);
      dispatch(errorMessage);
    }
  } catch (error) {
    const errorMessage = flashErrorMessage('There is an error occured.');
    dispatch({
      type: ASSIGN_BOOK_ERROR
    });

    dispatch(errorMessage);
  }
};

export const unassignItem = bookId => async (dispatch) => {
  try {
    dispatch({
      type: UNASSIGN_BOOK
    });

    const token = localStorage.getItem('token');

    const unassignedBook = await axios.post(`${api}/book_item/unassign`, { bookId }, {
      headers: { Authorization: token }
    });

    if (unassignedBook.data.success) {
      dispatch({
        type: UNASSIGN_BOOK_SUCCESS,
        payload: unassignedBook.data.book
      });
    } else {
      const errorMessage = flashErrorMessage(unassignedBook.data.message);
      dispatch(errorMessage);
    }
  } catch (error) {
    const errorMessage = flashErrorMessage('There is an error occured.');
    dispatch({
      type: UNASSIGN_BOOK_ERROR
    });

    dispatch(errorMessage);
  }
};
