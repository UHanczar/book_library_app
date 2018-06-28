// @flow

import React from 'react';
import PropTypes from 'prop-types';

import './book-description.scss';

const BookDescription = (props: {
  description: String
}) => (
  <div className='book__description'>{props.description}</div>
);

BookDescription.propTypes = {
  description: PropTypes.string.isRequired
};

export default BookDescription;
