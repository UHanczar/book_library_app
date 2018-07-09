// @flow

import type { BookInterfaceFlow, RatingData } from '../models/flowTypes';

export const calculateBookRating = (bookRating: RatingData): any => {
  return bookRating.length > 0 ?
    bookRating.reduce((sum, i) => sum += parseInt(i.rating, 10), 0) / bookRating.length : 0;
};

export const filterByDateHelper = (bookList: Array<BookInterfaceFlow>): any[] =>
  bookList.sort((a: BookInterfaceFlow, b: BookInterfaceFlow) => {
    if (parseInt(a.year, 10) < parseInt(b.year, 10)) return 1;
    if (parseInt(a.year, 10) > parseInt(b.year, 10)) return -1;
    return 0;
  });

export const filterByRateHelper = (bookList: Array<BookInterfaceFlow>): any[] =>
  bookList.sort((a: BookInterfaceFlow, b: BookInterfaceFlow) => {
    if (parseFloat(calculateBookRating(a.ratingData)) < parseFloat(calculateBookRating(b.ratingData))) return 1;
    if (parseFloat(calculateBookRating(a.ratingData)) > parseFloat(calculateBookRating(b.ratingData))) return -1;
    return 0;
  });

export const validateLoginFormErrors = (formProps: Object): Object => {
  const errors = {};

  if (!formProps.login) {
    errors.login = 'Please enter a valid login';
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }

  return errors;
};

export const getReturnDate = (date: Date) => {
  const returnDate = new Date(date);
  return `${returnDate.getDate()}.${returnDate.getMonth() + 1}.${returnDate.getFullYear()}`;
};
