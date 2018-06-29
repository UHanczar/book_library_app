export const filterByDateHelper = bookList =>
  bookList.sort((a, b) => parseInt(a.year, 10) < parseInt(b.year, 10));

export const filterByRateHelper = bookList =>
  bookList.sort((a, b) => parseFloat(a.rating) < parseFloat(b.rating));
