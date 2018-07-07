import bookCategoriesReducer from '../../src/reducers/bookCategoriesReducer';
import {
  FETCH_BOOK_CATEGORIES
} from '../../src/actions/types';

describe('bookCategoriesReducer tests', () => {
  it('should set loading property to true, when fetch request was sent', () => {
    expect(bookCategoriesReducer(null, {
      type: FETCH_BOOK_CATEGORIES,
      payload: [{ categoryName: 'css' }, { categoryName: 'js' }, { categoryName: 'js' }, { categoryName: 'css' }, { categoryName: 'css' }]
    })).toEqual([{ categoryName: 'css' }, { categoryName: 'css' }, { categoryName: 'css' }, { categoryName: 'js' }, { categoryName: 'js' }]);
  });

  it('should not change state, when unregistered action was dispatched', () => {
    expect(bookCategoriesReducer(null, {
      type: 'FETCH_SOMETHING'
    })).toBe(null);
  });
});
