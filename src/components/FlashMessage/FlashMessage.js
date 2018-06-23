// @flow

import React from 'react';
import PropTypes from 'prop-types';

import './flashMessage.scss';

const FlashMessage = (props: {
  message: string,
  bgColor: string
}) => (
  <div className='flash__message-item' style={{ backgroundColor: props.bgColor }}>
    {props.message}
  </div>
);

FlashMessage.propTypes = {
  message: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired
};

export default FlashMessage;
