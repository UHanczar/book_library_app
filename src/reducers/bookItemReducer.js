import {
  GET_BOOK_ITEM,
  GET_BOOK_ITEM_SUCCESS,
  GET_BOOK_ITEM_ERROR,
  REMOVE_ITEM
} from '../actions/types';

const initialState = {
  loading: false,
  book: null
};

const bookItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOK_ITEM:
      return {
        ...state,
        loading: true
      };
    case GET_BOOK_ITEM_SUCCESS:
      return {
        loading: false,
        book: action.payload
      };
    case GET_BOOK_ITEM_ERROR:
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
