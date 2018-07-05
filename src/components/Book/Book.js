// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tabs from 'react-responsive-tabs';
import StarRatings from 'react-star-ratings';

import 'react-responsive-tabs/styles.css';
import './book.scss';

import { calculateBookRating, getReturnDate } from '../../helpers/helpers';
import BookInfo from '../BookInfo/BookInfo';
import BookDescription from '../BookDescription/BookDescription';

class Book extends Component {
  constructor(props: {
    book: Object
  }) {
    super(props);

    this.renderTabs = this.renderTabs.bind(this);
  }

  renderTabs() {
    const { book } = this.props;

    const bookData = [
      {
        name: 'Info',
        data: <BookInfo
          authors={book.authors}
          publisher={book.publisher}
          year={book.year}
          pages={book.pages}
        />
      },
      {
        name: 'Description',
        data: <BookDescription description={book.description} />
      }
    ];

    return bookData.map((item, index) => ({
      key: index,
      tabClassName: 'book__tab',
      panelClassName: 'book__panel',
      title: item.name,
      getContent: () => item.data
    }));
  }

  render() {
    const { book, rateItem, user: { authenticated, userData, loading } } = this.props;
    const ratingData: any = authenticated && userData && book ?
      book.ratingData.filter(item => item.userId === userData._id) : 0;
    const userRating = ratingData.length > 0 ? parseInt(ratingData[0].rating, 10) : 0;

    return (
      <div className='book__item-container-card'>
        <div className='card__info'>
          <div className='card__info-title'>{book.name}</div>
          <div className='rating__container'>
            <div className='rating-title'>Rate this book</div>
            <div className='rating-body'>
              {
                authenticated && !userRating ? (
                  <StarRatings
                    rating={userRating}
                    starRatedColor='orange'
                    numberOfStars={5}
                    name='rating'
                    starDimension='25px'
                    isAggregateRating
                    starSpacing='6px'
                    changeRating={rating => rateItem(rating)}
                  />
                ) : (
                  <StarRatings
                    rating={userRating}
                    starRatedColor='orange'
                    numberOfStars={5}
                    name='rating'
                    starDimension='25px'
                    isAggregateRating
                    starSpacing='6px'
                  />
                )
              }
            </div>
          </div>
          <Tabs items={this.renderTabs()} transform={false} showInkBar />
        </div>
        <div className='card__data'>
          <div className='card__data-image'>
            <img
              className='card__data-image-item'
              src={`/images/items/${book.pathName}.png`}
              alt={book.pathName}
            />
          </div>
          <StarRatings
            rating={parseFloat(calculateBookRating(book.ratingData))}
            starRatedColor='orange'
            numberOfStars={5}
            name='rating'
            starDimension='15px'
            isSelectable='false'
            isAggregateRating
            starSpacing='4px'
          />
          <div className='card__data-access'>
            <div className='card__data-access-status'>
              <p className='access-title'>Status:</p>
              <p className={book.isAvailable ? 'access-text' : 'access-text access-text-red'}>{book.isAvailable ? ' Available' : ' Not Available'}</p>
            </div>
            <div className='card__data-access-reader'>
              <p className='access-title'>Reader:</p> <p className='access-text'><a>{!book.isAvailable ? `@${book.currentReader.login}` : null}</a></p>
            </div>
            <div className='card__data-access-return-date'>
              <p className='access-title'>Return:</p>
              <p className='access-text'>{!book.isAvailable ? getReturnDate(book.returnDate) : null}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const bookInterface = {
  authors: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  pathName: PropTypes.string,
  publisher: PropTypes.string,
  year: PropTypes.string,
  pages: PropTypes.string,
  rating: PropTypes.string,
  description: PropTypes.string,
  isAvailable: PropTypes.bool
};

Book.propTypes = {
  book: PropTypes.shape(bookInterface).isRequired,
  rateItem: PropTypes.func.isRequired
};

export default Book;
