import { filterByDate, filterByRate } from '../../src/actions/filterActions';
import filterReducer from '../../src/reducers/filterReducer';

describe('filter reducer actions', () => {
  it('should set filterByDate to true', () => {
    expect(filterReducer({
      filterByDate: false,
      filterByRate: false
    }, filterByDate())).toEqual({
      filterByDate: true,
      filterByRate: false
    });
  });

  it('should set filterByDate to false', () => {
    expect(filterReducer({
      filterByDate: true,
      filterByRate: false
    }, filterByDate())).toEqual({
      filterByDate: false,
      filterByRate: false
    });
  });

  it('should set filterByRate to true', () => {
    expect(filterReducer({
      filterByDate: false,
      filterByRate: true
    }, filterByRate())).toEqual({
      filterByDate: false,
      filterByRate: false
    });
  });

  it('should set filterByRate to true', () => {
    expect(filterReducer({
      filterByDate: false,
      filterByRate: false
    }, filterByRate())).toEqual({
      filterByDate: false,
      filterByRate: true
    });
  });

  it('should not change default state', () => {
    expect(filterReducer({
      filterByDate: true,
      filterByRate: true
    }, { type: 'TEST_ACTION' })).toEqual({
      filterByDate: true,
      filterByRate: true
    });
  });
});
