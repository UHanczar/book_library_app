import {
  filterByDateHelper,
  filterByRateHelper,
  calculateBookRating,
  validateLoginFormErrors,
  getReturnDate
} from '../../src/helpers/helpers';

describe('helpers tests', () => {
  let initialState;
  beforeEach(() => {
    initialState = [{ year: '2018', ratingData: [{ rating: '3' }] }, { year: '2015', ratingData: [{ rating: '2' }] }, { year: '2018', ratingData: [{ rating: '3' }] }, { year: '2015', ratingData: [{ rating: '2' }] }, { year: '2015', ratingData: [{ rating: '2' }] }, { year: '2018', ratingData: [{ rating: '3' }] }];
  });

  it('should calculate book rating properly', () => {
    expect(calculateBookRating([{ rating: '5' }, { rating: '3' }])).toBe(4);
    expect(calculateBookRating([{ rating: '5' }, { rating: '4' }])).toBe(4.5);
  });

  it('should rating data according to its date', () => {
    expect(filterByDateHelper(initialState)).toEqual([{ year: '2018', ratingData: [{ rating: '3' }] }, { year: '2018', ratingData: [{ rating: '3' }] }, { year: '2018', ratingData: [{ rating: '3' }] }, { year: '2015', ratingData: [{ rating: '2' }] }, { year: '2015', ratingData: [{ rating: '2' }] }, { year: '2015', ratingData: [{ rating: '2' }] }]);
  });

  it('should rating data according to its rating', () => {
    expect(filterByRateHelper(initialState)).toEqual([{ year: '2018', ratingData: [{ rating: '3' }] }, { year: '2018', ratingData: [{ rating: '3' }] }, { year: '2018', ratingData: [{ rating: '3' }] }, { year: '2015', ratingData: [{ rating: '2' }] }, { year: '2015', ratingData: [{ rating: '2' }] }, { year: '2015', ratingData: [{ rating: '2' }] }]);
  });

  it('should return error object if there is error in login form', () => {
    expect(validateLoginFormErrors({
      login: '',
      password: ''
    })).toEqual({
      login: 'Please enter a valid login',
      password: 'Please enter a password'
    });
  });

  it('should return empty object if there is no error in login form', () => {
    expect(validateLoginFormErrors({
      login: 'admin',
      password: 'admin123'
    })).toEqual({});
  });

  it('should return valid date', () => {
    expect(getReturnDate(1532332515188)).toEqual('23.7.2018');
  });
});
