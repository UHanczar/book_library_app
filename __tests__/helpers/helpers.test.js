import {
  filterByDateHelper,
  filterByRateHelper,
  calculateBookRating
} from '../../src/helpers/helpers';

describe('helpers tests', () => {
  let initialState;
  beforeEach(() => {
    initialState = [{ year: '2018', ratingData: [{ rating: '3' }] }, { year: '2015', ratingData: [{ rating: '2' }] }, { year: '2018', ratingData: [{ rating: '3' }] }, { year: '2015', ratingData: [{ rating: '2' }] }, { year: '2015', ratingData: [{ rating: '2' }] }, { year: '2018', ratingData: [{ rating: '3' }] }];
  });

  it('should rating data according to its date', () => {
    expect(filterByDateHelper(initialState)).toEqual([{ year: '2018', ratingData: [{ rating: '3' }] }, { year: '2018', ratingData: [{ rating: '3' }] }, { year: '2018', ratingData: [{ rating: '3' }] }, { year: '2015', ratingData: [{ rating: '2' }] }, { year: '2015', ratingData: [{ rating: '2' }] }, { year: '2015', ratingData: [{ rating: '2' }] }]);
  });

  it('should rating data according to its rating', () => {
    expect(filterByRateHelper(initialState)).toEqual([{ year: '2018', ratingData: [{ rating: '3' }] }, { year: '2018', ratingData: [{ rating: '3' }] }, { year: '2018', ratingData: [{ rating: '3' }] }, { year: '2015', ratingData: [{ rating: '2' }] }, { year: '2015', ratingData: [{ rating: '2' }] }, { year: '2015', ratingData: [{ rating: '2' }] }]);
  });
});
