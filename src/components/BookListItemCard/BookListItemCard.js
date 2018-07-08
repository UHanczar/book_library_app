// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';
import StarRatings from 'react-star-ratings';

import { calculateBookRating } from '../../helpers/helpers';
import { bookInterface } from '../../models/reactPropTypes';
import type { BookInterfaceFlow } from '../../models/flowTypes';

import './book-list-item-card.scss';

const BookListItem = (props: {
  item: BookInterfaceFlow
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
        {props.item.authors.map((author, i) => (
          <span key={uniqid()}>{
            props.item.authors.length > 1
              && props.item.authors.length !== 0 && i < props.item.authors.length - 1 ?
              `${author}, ` : author}
          </span>
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
  item: PropTypes.shape(bookInterface).isRequired
};

export default BookListItem;
