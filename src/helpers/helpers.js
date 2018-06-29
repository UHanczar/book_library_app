export const defaultSort = bookList =>
  bookList && bookList.sort((a, b) => {
    if (a.pathName < b.pathName) return -1;
    if (a.pathName > b.pathName) return 1;
    return 0;
  });

export const filterByDateHelper = bookList =>
  bookList.sort((a, b) => parseInt(a.year, 10) < parseInt(b.year, 10));

export const filterByRateHelper = bookList =>
  bookList.sort((a, b) => parseFloat(a.rating) < parseFloat(b.rating));
