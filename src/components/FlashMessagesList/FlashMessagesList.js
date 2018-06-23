import React from 'react';
import PropTypes from 'prop-types';
import { flashMessageType } from 'redux-flash';

import './flashMessageslist.scss';

import FlashMessage from '../FlashMessage/FlashMessage';

const FlashMessagesList = ({ flash }) => {
  return (
    <div className='flash__messages-container'>
      {flash && flash.map(item => (
        <FlashMessage
          key={item.id}
          message={item.message}
          bgColor={item.isError ? '#ffab91' : '#1de9b6'}
        />))}
    </div>
  );
};

FlashMessagesList.propTypes = {
  flash: PropTypes.arrayOf(flashMessageType)
};

export default FlashMessagesList;
