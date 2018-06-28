import React from 'react';

import DateFilter from '../../src/components/DateFilter/DateFilter';

describe('DateFilter tests', () => {
  let wrapper;
  let filterName;
  let identifier;
  let filterByDate;

  beforeEach(() => {
    filterName = 'Filter by date';
    identifier = 'dateFilter';
    filterByDate = jest.fn();
    wrapper = mount(
      <DateFilter
        filterName={filterName}
        identifier={identifier}
        filterByDate={filterByDate}
      />
    );
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should pass props properly', () => {
    expect(wrapper.props().filterName).toBe(filterName);
    expect(wrapper.props().identifier).toBe(identifier);
    expect(wrapper.props().filterByDate).toEqual(expect.any(Function));
  });

  it('should call filterByDate on change event', () => {
    wrapper.find('input').simulate('change');

    expect(filterByDate.mock.calls.length).toBe(1);
  });
});
