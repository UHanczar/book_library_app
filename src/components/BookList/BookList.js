// @flow

import React from 'react';
import PropTypes from 'prop-types';

import './bookList.scss';

import ShowSidebarButtons from '../ShowSidebarButtons/ShowSidebarButtons';

const BookList = (props: {
  toggleSidebar: Function,
  toggleFilterBar: Function
}) => {
  return (
    <div className='book__list-container'>
      <ShowSidebarButtons
        toggleSidebar={props.toggleSidebar}
        toggleFilterBar={props.toggleFilterBar}
      />
      {/* <div style={{ display: 'flex' }}>
        {props.bookList && props.bookList.map(item => (
          <div className='card' style={{ width: '15%', marginRight: '5%' }}>
          <div className="card-image">
            <img src='images/items/ninja.png' />
            <span className="card-title">Card Title</span>
          </div>
          <div className='card-content'>
            <p>I am a very simple card. I am good at containing small bits of information.</p>
          </div>
            <div className='card-action'>
              <a href="#">This is a link</a>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

BookList.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  toggleFilterBar: PropTypes.func.isRequired
};

export default BookList;
