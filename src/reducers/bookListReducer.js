// @flow

import {
  FETCH_BOOK_LIST,
  FETCH_BOOK_LIST_SUCCESS,
  FETCH_BOOK_LIST_ERROR,
  UPDATE_BOOK_LIST_RATE_DATA
} from '../actions/types';


const initialState = {
  loading: false,
  list: null
};

const bookListReducer = (state: Object = initialState, action: Object = {}): Object => {
  switch (action.type) {
    case FETCH_BOOK_LIST:
      return {
        ...state,
        loading: true
      };
    case FETCH_BOOK_LIST_SUCCESS:
      return {
        loading: false,
        list: action.payload.sort((a, b) => {
          if (a.pathName < b.pathName) return -1;
          if (a.pathName > b.pathName) return 1;
          return 0;
        })
      };
    case FETCH_BOOK_LIST_ERROR:
      return {
        ...state,
        loading: false
      };
    case UPDATE_BOOK_LIST_RATE_DATA:
      return {
        ...state,
        list: state.list.map((book) => {
          if (book._id === action.payload._id) {
            return action.payload;
          }
          return book;
        })
      };
    default:
      return state;
  }
};

export default bookListReducer;
