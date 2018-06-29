import React from 'react';

import RateFilter from '../../../src/components/RateFilter/RateFilter';

describe('RateFilter tests', () => {
  let wrapper;
  let filterName;
  let identifier;
  let filterByRate;
  let byRateFilter;

  beforeEach(() => {
    filterName = 'Filter by rate';
    identifier = 'rateFilter';
    byRateFilter = false;
    filterByRate = jest.fn();
    wrapper = mount(
      <RateFilter
        filterName={filterName}
        identifier={identifier}
        filterByRate={filterByRate}
        byRateFilter={byRateFilter}
      />
    );
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should pass props properly', () => {
    expect(wrapper.props().filterName).toBe(filterName);
    expect(wrapper.props().identifier).toBe(identifier);
    expect(wrapper.props().filterByRate).toEqual(expect.any(Function));
    expect(wrapper.props().byRateFilter).toBeFalsy();
  });

  it('should call filterByRate on change event', () => {
    wrapper.find('input').simulate('change');

    expect(filterByRate.mock.calls.length).toBe(1);
  });
});
