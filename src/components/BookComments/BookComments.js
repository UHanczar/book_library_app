import React from 'react';
import StarRatings from 'react-star-ratings';

import './book-comments.scss';

const BookComments = () => (
  <div className='book__comments-container'>
    <div className='rating__container'>
      <div className='rating-title'>Rate this book</div>
      <div className='rating-body'>
        <StarRatings
          rating={0}
          starRatedColor='orange'
          numberOfStars={5}
          name='rating'
          starDimension='25px'
          isSelectable
          isAggregateRating
          starSpacing='6px'
          changeRating={rating => console.log('RATING', rating)}
        />
      </div>
    </div>
  </div>
);

export default BookComments;
