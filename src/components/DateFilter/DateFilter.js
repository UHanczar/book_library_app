// @flow

import React from 'react';
import PropTypes from 'prop-types';

import './dateFilter.scss';

const DateFilter = (props: {
  filterName: string,
  identifier: string,
  filterByDate: Function
}) => (
  <div className='filter__item-container'>
    <div className='filter__item-container-title'>
      {props.filterName}
    </div>
    <div className='switch filter__item-container-text' onChange={props.filterByDate}>
      <label htmlFor={props.identifier}>
        Off
        <input type='checkbox' id={props.identifier} name={props.identifier} />
        <span className='lever' />
        On
      </label>
    </div>
  </div>
);

DateFilter.propTypes = {
  filterName: PropTypes.string.isRequired,
  identifier: PropTypes.string.isRequired,
  filterByDate: PropTypes.func.isRequired
};

export default DateFilter;
