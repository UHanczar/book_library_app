// @flow

import { FETCH_BOOK_CATEGORIES } from '../actions/types';

const bookCategoriesReducer = (state: any = null, action: Object): any[] => {
  switch (action.type) {
    case FETCH_BOOK_CATEGORIES:
      return action.payload.sort((a, b) => {
        if (a.categoryName < b.categoryName) return -1;
        if (a.categoryName > b.categoryName) return 1;
        return 0;
      });
    default:
      return state;
  }
};

export default bookCategoriesReducer;
