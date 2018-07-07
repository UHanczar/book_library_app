// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './book-item.scss';

import { bookInterface } from '../../models/reactPropTypes';

import Loader from '../Loader/Loader';
import Book from '../Book/Book';

type Props = {
  getBookItem: Function,
  removeBookItem: Function,
  rateItem: Function,
  assignItem: Function,
  unassignItem: Function,
  updateBookListRateData: Function,
  user: Object,
  bookItem: Object,
  match: Object
};

class BookItem extends Component<Props> {
  constructor(props: Props) {
    super(props);

    (this: any).renderBookItem = this.renderBookItem.bind(this);
  }

  componentDidMount() {
    this.props.getBookItem(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.removeBookItem();
  }

  renderBookItem() {
    const {
      bookItem,
      rateItem,
      assignItem,
      unassignItem,
      user,
      updateBookListRateData
    } = this.props;

    if (!bookItem.loading && !bookItem.book) {
      return null;
    } else if (bookItem.loading && !bookItem.book) {
      return <Loader />;
    } else if (!bookItem.loading && bookItem.book) {
      return (
        <Book
          book={bookItem.book}
          assigning={bookItem.assigning}
          rateItem={rateItem}
          user={user}
          unassignItem={unassignItem}
          assignItem={assignItem}
          updateBookListRateData={updateBookListRateData}
        />
      );
    }
  }

  render() {
    return (
      <div className='book__item-container'>
        {this.renderBookItem()}
      </div>
    );
  }
}

BookItem.propTypes = {
  getBookItem: PropTypes.func.isRequired,
  removeBookItem: PropTypes.func.isRequired,
  bookItem: PropTypes.shape({
    loading: PropTypes.bool,
    list: PropTypes.arrayOf(bookInterface)
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }).isRequired,
  rateItem: PropTypes.func.isRequired,
  assignItem: PropTypes.func.isRequired,
  unassignItem: PropTypes.func.isRequired,
  updateBookListRateData: PropTypes.func.isRequired
};

export default BookItem;
