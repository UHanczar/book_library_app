// @flow

import React from 'react';
import PropTypes from 'prop-types';

import './flash-message.scss';

const FlashMessage = (props: {
  message: string,
  bgColor: string,
  id: string,
  removeMessage: Function
}) => (
  <div className='flash__message-item' style={{ backgroundColor: props.bgColor }}>
    <div className='flash__message-item-text'>
      <p>{props.message}</p>
    </div>
    <div
      className='flash__message-item-close'
      onClick={() => props.removeMessage(props.id)}
    >+</div>
  </div>
);

FlashMessage.propTypes = {
  message: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  removeMessage: PropTypes.func.isRequired
};

export default FlashMessage;
