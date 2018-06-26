// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';

import './book-list-item-card.scss';

const BookListItem = (props: {
  item: Object
}) => (
  <Link to={`/book/${props.item._id}`} className='card card-item'>
    <div className='card-image'>
      <img src='images/items/ninja.png' alt={props.item.pathname} />
      <span className='card-title'>Card Title</span>
    </div>
    <div className='card-content'>
      <p className='card-content-title'>{props.item.name}</p>
      <p className='card-content-authors'>
        {props.item.authors.map(author => (
          <span key={uniqid()}>{author}</span>
        ))}
      </p>
    </div>
  </Link>
);

BookListItem.propTypes = {
  item: PropTypes.shape({
    pathname: PropTypes.string,
    name: PropTypes.string,
    authors: PropTypes.arrayOf(PropTypes.string),
    _id: PropTypes.string
  }).isRequired
};

export default BookListItem;
