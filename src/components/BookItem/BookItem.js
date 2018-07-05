// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './book-item.scss';
import Loader from '../Loader/Loader';
import Book from '../Book/Book';

class BookItem extends Component {
  constructor(props: {
    getBookItem: Function,
    removeBookItem: Function,
    bookItem: Object,
    match: Object
  }) {
    super(props);

    this.renderBookItem = this.renderBookItem.bind(this);
  }

  componentDidMount() {
    this.props.getBookItem(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.removeBookItem();
  }

  renderBookItem() {
    const { bookItem, rateItem, user } = this.props;

    if (!bookItem.loading && !bookItem.book) {
      return null;
    } else if (bookItem.loading && !bookItem.book) {
      return <Loader />;
    } else if (!bookItem.loading && bookItem.book) {
      return (
        <Book
          book={bookItem.book}
          rateItem={rateItem}
          user={user}
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

const bookInterface = PropTypes.shape({
  authors: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  pathName: PropTypes.string,
  publisher: PropTypes.string,
  year: PropTypes.string,
  pages: PropTypes.string,
  description: PropTypes.string
});

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
  }).isRequired
};

export default BookItem;
