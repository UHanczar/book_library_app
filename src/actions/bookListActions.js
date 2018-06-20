import { FETCH_BOOK_LIST } from './types';

export const fetchBookList = () => ({
  type: FETCH_BOOK_LIST,
  payload: ['book1', 'book2']
});
