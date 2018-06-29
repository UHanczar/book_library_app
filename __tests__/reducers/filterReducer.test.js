import { filterByDate, filterByRate } from '../../src/actions/filterActions';
import filterReducer from '../../src/reducers/filterReducer';

describe('filter reducer actions', () => {
  it('should set byRateFilter to true', () => {
    expect(filterReducer({
      byDateFilter: false,
      byRateFilter: false
    }, filterByDate())).toEqual({
      byDateFilter: true,
      byRateFilter: false
    });
  });

  it('should set byRateFilter to false', () => {
    expect(filterReducer({
      byDateFilter: true,
      byRateFilter: false
    }, filterByDate())).toEqual({
      byDateFilter: false,
      byRateFilter: false
    });
  });

  it('should set byRateFilter to true', () => {
    expect(filterReducer({
      byDateFilter: false,
      byRateFilter: true
    }, filterByRate())).toEqual({
      byDateFilter: false,
      byRateFilter: false
    });
  });

  it('should set byRateFilter to true', () => {
    expect(filterReducer({
      byDateFilter: false,
      byRateFilter: false
    }, filterByRate())).toEqual({
      byDateFilter: false,
      byRateFilter: true
    });
  });

  it('should not change default state', () => {
    expect(filterReducer({
      byDateFilter: true,
      byRateFilter: true
    }, { type: 'TEST_ACTION' })).toEqual({
      byDateFilter: true,
      byRateFilter: true
    });
  });
});
