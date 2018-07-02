import {
  filterByDateHelper,
  filterByRateHelper
} from '../../src/helpers/helpers';

describe('helpers tests', () => {
  let initialState;
  beforeEach(() => {
    initialState = [{ year: '2018', rating: '4' }, { year: '2015', rating: '2' }, { year: '2018', rating: '4' }, { year: '2015', rating: '2' }, { year: '2015', rating: '2' }, { year: '2018', rating: '4' }];
  });

  it('should rating data according to its date', () => {
    expect(filterByDateHelper(initialState)).toEqual([{ year: '2018', rating: '4' }, { year: '2018', rating: '4' }, { year: '2018', rating: '4' }, { year: '2015', rating: '2' }, { year: '2015', rating: '2' }, { year: '2015', rating: '2' }]);
  });

  it('should rating data according to its rating', () => {
    expect(filterByRateHelper(initialState)).toEqual([{ year: '2018', rating: '4' }, { year: '2018', rating: '4' }, { year: '2018', rating: '4' }, { year: '2015', rating: '2' }, { year: '2015', rating: '2' }, { year: '2015', rating: '2' }]);
  });
});
