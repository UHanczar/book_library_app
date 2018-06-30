export const filterByDateHelper = bookList =>
  bookList.sort((a, b) => {
    if (parseInt(a.year, 10) < parseInt(b.year, 10)) return 1;
    if (parseInt(a.year, 10) > parseInt(b.year, 10)) return -1;
    return 0;
  });

export const filterByRateHelper = bookList =>
  bookList.sort((a, b) => {
    if (parseFloat(a.rating) < parseFloat(b.rating)) return 1;
    if (parseFloat(a.rating) > parseFloat(b.rating)) return -1;
    return 0;
  });
