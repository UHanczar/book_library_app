import { FETCH_BOOK_LIST } from '../actions/types';

const bookListReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_BOOK_LIST:
      return action.payload;
    default:
      return state;
  }
};

export default bookListReducer;
