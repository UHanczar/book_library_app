import {
  FETCH_BOOK_ITEM,
  FETCH_BOOK_ITEM_SUCCESS,
  FETCH_BOOK_ITEM_ERROR,
  REMOVE_ITEM,
  RATE_ITEM_SUCCESS,
  ASSIGN_BOOK,
  ASSIGN_BOOK_SUCCESS,
  ASSIGN_BOOK_ERROR,
  UNASSIGN_BOOK,
  UNASSIGN_BOOK_SUCCESS,
  UNASSIGN_BOOK_ERROR
} from '../actions/types';

const initialState = {
  loading: false,
  assigning: false,
  book: null
};

const bookItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOK_ITEM:
      return {
        ...state,
        loading: true
      };
    case ASSIGN_BOOK:
    case UNASSIGN_BOOK:
      return {
        ...state,
        assigning: true
      };
    case FETCH_BOOK_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        book: action.payload
      };
    case ASSIGN_BOOK_SUCCESS:
    case UNASSIGN_BOOK_SUCCESS:
      return {
        ...state,
        assigning: false,
        book: action.payload
      };
    case FETCH_BOOK_ITEM_ERROR:
      return {
        ...state,
        loading: false
      };
    case ASSIGN_BOOK_ERROR:
    case UNASSIGN_BOOK_ERROR:
      return {
        ...state,
        assigning: false
      };
    case REMOVE_ITEM:
      return {
        ...state,
        book: null
      };
    case RATE_ITEM_SUCCESS:
      return {
        ...state,
        book: {
          ...state.book,
          ratingData: action.payload
        }
      };
    default:
      return state;
  }
};

export default bookItemReducer;
