// @flow

import React from 'react';
import PropTypes from 'prop-types';

import './date-filter.scss';

const DateFilter = (props: {
  filterName: string,
  identifier: string,
  byDateFilter: boolean,
  filterByDate: Function
}) => (
  <div className='filter__item-container'>
    <div className='filter__item-container-title'>
      {props.filterName}
    </div>
    <div className='switch filter__item-container-text' onChange={props.filterByDate}>
      <label htmlFor={props.identifier}>
        Off
        <input
          type='checkbox'
          id={props.identifier}
          name={props.identifier}
          checked={props.byDateFilter}
        />
        <span className='lever' />
        On
      </label>
    </div>
  </div>
);

DateFilter.propTypes = {
  filterName: PropTypes.string.isRequired,
  identifier: PropTypes.string.isRequired,
  filterByDate: PropTypes.func.isRequired,
  byDateFilter: PropTypes.bool.isRequired
};

export default DateFilter;
