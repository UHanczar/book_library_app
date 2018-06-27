// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { flashMessageType } from 'redux-flash';

import './flash-messages-list.scss';

import FlashMessage from '../FlashMessage/FlashMessage';

const FlashMessagesList = (props: {
  flash: Object,
  removeMessage: Function
}) => {
  return (
    <div className='flash__messages-container'>
      {props.flash && props.flash.map(item => (
        <FlashMessage
          key={item.id}
          id={item.id}
          message={item.message}
          bgColor={item.isError ? '#f4511e' : '#1de9b6'}
          removeMessage={props.removeMessage}
        />))}
    </div>
  );
};

FlashMessagesList.propTypes = {
  flash: PropTypes.arrayOf(flashMessageType),
  removeMessage: PropTypes.func.isRequired
};

export default FlashMessagesList;
