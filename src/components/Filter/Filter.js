// @flow

import React from 'react';
import PropTypes from 'prop-types';

import './filter.scss';

const Filter = (props: {
  filterName: string,
  identifier: string,
}) => (
  <div className='filter__item-container'>
    <div className='filter__item-container-title'>
      {props.filterName}
    </div>
    <div className='switch filter__item-container-text'>
      <label htmlFor={props.identifier}>
        Off
        <input type='checkbox' id={props.identifier} name={props.identifier} />
        <span className='lever' />
        On
      </label>
    </div>
  </div>
);

Filter.propTypes = {
  filterName: PropTypes.string.isRequired,
  identifier: PropTypes.string.isRequired
};

export default Filter;
