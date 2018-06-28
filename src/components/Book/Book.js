import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tabs from 'react-responsive-tabs';

import 'react-responsive-tabs/styles.css';
import './book.scss';

import BookInfo from '../BookInfo/BookInfo';
import BookDescription from '../BookDescription/BookDescription';

class Book extends Component {
  constructor(props) {
    super(props);

    this.renderTabs = this.renderTabs.bind(this);
  }

  renderTabs() {
    const { book } = this.props;
    console.log('BOOK', book);
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
      },
      {
        name: 'Comments',
        data: ''
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
    const { book } = this.props;

    return (
      <div className='book__item-container-card'>
        <div className='card__info'>
          <div className='card__info-title'>{book.name}</div>
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
          <div className='card__data-access'>
            <p className='card__data-access-status'>
              Status: <span>Available</span>
            </p>
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
  description: PropTypes.string
};

Book.propTypes = {
  book: PropTypes.shape(bookInterface).isRequired
};

export default Book;
