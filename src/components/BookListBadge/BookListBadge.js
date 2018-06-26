// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';

import './book-list-badge.scss';

const BookListBadge = (props: {
  bookList: Array<{
    pathname: string,
    _id: string,
    name: string,
    authors: Array<String>,
    publisher: string,
    year: string
  }>
}) => (
  <div className='badge__container'>
    <div className='collection'>
      {props.bookList && props.bookList.map(item => (
        <Link
          to={`/book/${item._id}`}
          key={item._id}
          className='collection-item item-badge'
        >
          <img
            src='images/items/ninja.png'
            alt={item.pathname}
            className='collection__image'
          />
          <p className='collection__authors'>{item.authors.map(author => <span key={uniqid()}>{author}</span>)}</p>
          <p className='collection__title'>{item.name}</p>
          <p className='collection__publisher'>{item.publisher}</p>
          <p className='collection__year'>{item.year}</p>
          <p className='badge collection__badge'>Rating</p>
        </Link>
      ))}
    </div>
  </div>
);

const bookItem = PropTypes.shape({
  pathname: PropTypes.string,
  name: PropTypes.string,
  authors: PropTypes.arrayOf(PropTypes.string),
  _id: PropTypes.string
});


BookListBadge.propTypes = {
  bookList: PropTypes.arrayOf(bookItem)
};

export default BookListBadge;
