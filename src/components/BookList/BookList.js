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
    </div>
  );
};

BookList.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  toggleFilterBar: PropTypes.func.isRequired
};

export default BookList;
