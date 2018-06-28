import {
  FETCH_BOOK_ITEM,
  FETCH_BOOK_ITEM_SUCCESS,
  FETCH_BOOK_ITEM_ERROR,
  REMOVE_ITEM
} from '../actions/types';

const initialState = {
  loading: false,
  book: null
};

const bookItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOK_ITEM:
      return {
        ...state,
        loading: true
      };
    case FETCH_BOOK_ITEM_SUCCESS:
      return {
        loading: false,
        book: action.payload
      };
    case FETCH_BOOK_ITEM_ERROR:
      return {
        ...state,
        loading: false
      };
    case REMOVE_ITEM:
      return {
        ...state,
        book: null
      };
    default:
      return state;
  }
};

export default bookItemReducer;
