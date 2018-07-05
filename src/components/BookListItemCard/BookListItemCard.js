// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';
import StarRatings from 'react-star-ratings';
import { calculateBookRating } from '../../helpers/helpers';

import './book-list-item-card.scss';

const BookListItem = (props: {
  item: Object
}) => (
  <Link to={`/book/${props.item._id}`} className='card hoverable card-item'>
    <div className='card-image'>
      <img
        className='card-image-item'
        src={`images/items/${props.item.pathName}.png`}
        alt={props.item.pathName}
      />
    </div>
    <div className='card-content'>
      <p className='card-content-title'>{props.item.name}</p>
      <p className='card-content-authors'>
        {props.item.authors.map(author => (
          <span key={uniqid()}>{author}</span>
        ))}
      </p>
      <StarRatings
        rating={parseFloat(calculateBookRating(props.item.ratingData))}
        starRatedColor='orange'
        numberOfStars={5}
        name='rating'
        starDimension='15px'
        isSelectable='false'
        isAggregateRating
        starSpacing='4px'
      />
    </div>
  </Link>
);

BookListItem.propTypes = {
  item: PropTypes.shape({
    pathName: PropTypes.string,
    name: PropTypes.string,
    authors: PropTypes.arrayOf(PropTypes.string),
    rating: PropTypes.string,
    _id: PropTypes.string
  }).isRequired
};

export default BookListItem;
