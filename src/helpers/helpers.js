export const calculateBookRating = (bookRating) => {
  return bookRating.length > 0 ?
    bookRating.reduce((sum, i) => sum += parseInt(i.rating, 10), 0) / bookRating.length : 0;
};

export const filterByDateHelper = bookList =>
  bookList.sort((a, b) => {
    if (parseInt(a.year, 10) < parseInt(b.year, 10)) return 1;
    if (parseInt(a.year, 10) > parseInt(b.year, 10)) return -1;
    return 0;
  });

export const filterByRateHelper = bookList =>
  bookList.sort((a, b) => {
    if (parseFloat(calculateBookRating(a.ratingData)) < parseFloat(calculateBookRating(b.ratingData))) return 1;
    if (parseFloat(calculateBookRating(a.ratingData)) > parseFloat(calculateBookRating(b.ratingData))) return -1;
    return 0;
  });

export const validateLoginFormErrors = (formProps) => {
  const errors = {};

  if (!formProps.login) {
    errors.login = 'Please enter a valid login';
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }

  return errors;
};

export const getReturnDate = (date) => {
  const returnDate = new Date(date);
  return `${returnDate.getDate()}.${returnDate.getMonth() + 1}.${returnDate.getFullYear()}`;
};
