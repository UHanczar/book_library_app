import { FILTER_BY_DATE, FILTER_BY_RATE } from '../../src/actions/types';
import { filterByDate, filterByRate } from '../../src/actions/filterActions';

describe('filter actions tests', () => {
  it('shoul return proper action type on filterByDate action', () => {
    expect(filterByDate()).toEqual({
      type: FILTER_BY_DATE
    });
  });

  it('shoul return proper action type on filterByRate action', () => {
    expect(filterByRate()).toEqual({
      type: FILTER_BY_RATE
    });
  });
});
