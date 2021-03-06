// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tabs from 'react-responsive-tabs';
import StarRatings from 'react-star-ratings';

import 'react-responsive-tabs/styles.css';
import './book.scss';

import { calculateBookRating, getReturnDate } from '../../helpers/helpers';
import { bookInterface, userInterface } from '../../models/reactPropTypes';

import BookInfo from '../BookInfo/BookInfo';
import BookDescription from '../BookDescription/BookDescription';
import BookManagement from '../BookManagement/BookManagement';

type Props = {
  book: Object,
  user: Object,
  updateBookListRateData: Function,
  rateItem: Function,
  assignItem: Function,
  unassignItem: Function,
  assigning: boolean
};

type State = {
  rateUpdated: boolean
};

class Book extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      rateUpdated: false
    };

    (this: any).renderTabs = this.renderTabs.bind(this);
    (this: any).rateBook = this.rateBook.bind(this);
    (this: any).assignBookToUser = this.assignBookToUser.bind(this);
    (this: any).unassignBookToUser = this.unassignBookToUser.bind(this);
  }

  componentWillUnmount() {
    const { book, updateBookListRateData } = this.props;
    if (this.state.rateUpdated) {
      updateBookListRateData(book);
    }
  }

  rateBook(rating: number) {
    this.props.rateItem(rating);
    this.setState({
      rateUpdated: true
    });
  }

  assignBookToUser(bookId: string, userId: string) {
    this.props.assignItem(bookId, userId);
    this.setState({
      rateUpdated: true
    });
  }

  unassignBookToUser(bookId: string) {
    this.props.unassignItem(bookId);
    this.setState({
      rateUpdated: true
    });
  }

  renderTabs(): any[] {
    const {
      assigning,
      book,
      user
    } = this.props;

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

    const bookManagement = {
      name: 'Management',
      data: <BookManagement
        userList={user.userList}
        assignItem={this.assignBookToUser}
        unassignItem={this.unassignBookToUser}
        id={book._id}
        currentReader={book.currentReader}
        isAvailable={book.isAvailable}
        assigning={assigning}
      />
    };

    if (user.userData && user.userData.isAdmin) {
      bookData.push(bookManagement);
    }

    return bookData.map((item, index) => ({
      key: index,
      tabClassName: 'book__tab',
      panelClassName: 'book__panel',
      title: item.name,
      getContent: () => item.data
    }));
  }

  render() {
    const { book, user: { authenticated, userData } } = this.props;
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
                    changeRating={rating => this.rateBook(rating)}
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
              <p className={book.returnDate > Date.now() ? 'access-text' : 'access-text-overdue'}>{!book.isAvailable ? getReturnDate(book.returnDate) : null}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Book.propTypes = {
  book: PropTypes.shape(bookInterface).isRequired,
  rateItem: PropTypes.func.isRequired,
  updateBookListRateData: PropTypes.func.isRequired,
  assignItem: PropTypes.func.isRequired,
  unassignItem: PropTypes.func.isRequired,
  assigning: PropTypes.bool.isRequired,
  user: PropTypes.shape(userInterface).isRequired
};

export default Book;
