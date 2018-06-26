// @flow

import React from 'react';
import PropTypes from 'prop-types';

import './bookList.scss';

import ShowSidebarButtons from '../ShowSidebarButtons/ShowSidebarButtons';
import BookListItem from '../BookListItem/BookListItem';

const BookList = (props: {
  toggleSidebar: Function,
  toggleFilterBar: Function,
  bookList: Object
}) => {
  return (
    <div className='book__list-container'>
      <ShowSidebarButtons
        toggleSidebar={props.toggleSidebar}
        toggleFilterBar={props.toggleFilterBar}
      />
      <div className='book__item-container'>
        {props.bookList && props.bookList.map(item => (
          <BookListItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

const bookInterface = PropTypes.shape({
  authors: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  pathName: PropTypes.string,
  publisher: PropTypes.string,
  year: PropTypes.string,
  pages: PropTypes.string,
  description: PropTypes.string
});

BookList.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  toggleFilterBar: PropTypes.func.isRequired,
  bookList: PropTypes.arrayOf(bookInterface)
};

export default BookList;
