import { FETCH_BOOK_CATEGORIES } from '../actions/types';

const bookCategoriesReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_BOOK_CATEGORIES:
      return action.payload;
    default:
      return state;
  }
};

export default bookCategoriesReducer;
