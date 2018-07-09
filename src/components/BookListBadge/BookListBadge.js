// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';
import StarRatings from 'react-star-ratings';

import { bookInterface } from '../../models/reactPropTypes';
import type { BookInterfaceFlow } from '../../models/flowTypes';
import { calculateBookRating } from '../../helpers/helpers';

import './book-list-badge.scss';

const BookListBadge = (props: {
  bookList: Array<BookInterfaceFlow>
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
            src={`images/items/${item.pathName}.png`}
            alt={item.pathName}
            className='collection__image'
          />
          <p className='collection__authors'>{item.authors.map((author, i) => (
            <span key={uniqid()}>{
            item.authors.length > 1
              && item.authors.length !== 0 && i < item.authors.length - 1 ?
              `${author}, ` : author}
            </span>
          ))}
          </p>
          <p className='collection__title'>{item.name}</p>
          <p className='collection__publisher'>{item.publisher}</p>
          <p className='collection__year'>{item.year}</p>
          <div className='badge collection__rating'>
            <StarRatings
              rating={parseFloat(calculateBookRating(item.ratingData))}
              starRatedColor='orange'
              numberOfStars={5}
              name='rating'
              starDimension='15px'
              isSelectable
              isAggregateRating
              starSpacing='-2px'
            />
          </div>
        </Link>
      ))}
    </div>
  </div>
);

BookListBadge.propTypes = {
  bookList: PropTypes.arrayOf(PropTypes.shape(bookInterface))
};

export default BookListBadge;
