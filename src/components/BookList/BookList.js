// @flow

import React from 'react';
import PropTypes from 'prop-types';

import './book-list.scss';

import ShowSidebarButtons from '../ShowSidebarButtons/ShowSidebarButtons';
import BookListItemCard from '../BookListItemCard/BookListItemCard';
import BookListBadge from '../BookListBadge/BookListBadge';

const BookList = (props: {
  toggleSidebar: Function,
  toggleFilterBar: Function,
  toggleBookListTableView: Function,
  bookList: Object,
  showAsTable: Boolean
}) => {
  return (
    <div className='book__list-container'>
      <ShowSidebarButtons
        toggleSidebar={props.toggleSidebar}
        toggleFilterBar={props.toggleFilterBar}
        toggleBookListTableView={props.toggleBookListTableView}
        showAsTable={props.showAsTable}
      />
      <div className={props.showAsTable ? 'book__item-container show-table' : 'book__item-container'}>
        {props.bookList && props.showAsTable ? (
          <BookListBadge bookList={props.bookList} />
        ) : (props.bookList && props.bookList.map(item => (
            (<BookListItemCard key={item._id} item={item} />)
        )))}
      </div>
    </div>
  );
};

const bookInterface = PropTypes.shape({
  authors: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  pathName: PropTypes.string,
  publisher: PropTypes.string,
  year: PropTypes.string,
  pages: PropTypes.string,
  description: PropTypes.string
});

BookList.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  toggleFilterBar: PropTypes.func.isRequired,
  toggleBookListTableView: PropTypes.func.isRequired,
  bookList: PropTypes.arrayOf(bookInterface),
  showAsTable: PropTypes.bool.isRequired
};

export default BookList;
