// @flow

import React from 'react';
import PropTypes from 'prop-types';

import './rate-filter.scss';

const RateFilter = (props: {
  filterName: string,
  identifier: string,
  filterByRate: Function
}) => (
  <div className='filter__item-container'>
    <div className='filter__item-container-title'>
      {props.filterName}
    </div>
    <div className='switch filter__item-container-text' onChange={props.filterByRate}>
      <label htmlFor={props.identifier}>
        Off
        <input type='checkbox' id={props.identifier} name={props.identifier} />
        <span className='lever' />
        On
      </label>
    </div>
  </div>
);

RateFilter.propTypes = {
  filterName: PropTypes.string.isRequired,
  identifier: PropTypes.string.isRequired,
  filterByRate: PropTypes.func.isRequired
};

export default RateFilter;
