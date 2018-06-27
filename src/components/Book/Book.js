import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tabs from 'react-responsive-tabs';

import 'react-responsive-tabs/styles.css';
import './book.scss';

class Book extends Component {
  constructor(props) {
    super(props);

    this.renderTabs = this.renderTabs.bind(this);
  }

  renderTabs() {
    const presidents = [{ name: 'Info', biography: '' }, { name: 'Description', biography: '' }, { name: 'Comments', biography: '' }];
    return presidents.map((president, index) => ({
      key: index, // Optional. Equals to tab index if this property is omitted
      tabClassName: 'tab', // Optional
      panelClassName: 'panel', // Optional
      title: president.name,
      getContent: () => president.biography
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
        <div className='card__data'>Image</div>
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
