// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './book-category-list.scss';

import ShowSidebarButtons from '../ShowSidebarButtons/ShowSidebarButtons';
import BookListItemCard from '../BookListItemCard/BookListItemCard';
import BookListBadge from '../BookListBadge/BookListBadge';

type Props = {
  toggleSidebar: Function,
  toggleFilterBar: Function,
  toggleBookListTableView: Function,
  bookList: Object,
  showAsTable: Boolean
};

type State = {
  filteredList: any[]
};

class BookCategoryList extends Component<Props, State> {
  constructor(props: Object) {
    super(props);

    this.state = {
      filteredList: []
    };
  }

  static getDerivedStateFromProps(props: any, state: any) {
    if (props.bookList && props.bookList !== state.filteredList) {
      return {
        filteredList: props.bookList.filter(book =>
          book.categoryKeys.includes(props.match.params.name))
      };
    }
    return null;
  }

  render() {
    const {
      bookList,
      toggleSidebar,
      toggleFilterBar,
      toggleBookListTableView,
      showAsTable
    } = this.props;
    const { filteredList } = this.state;

    return (
      <div className='book__list-container'>
        <ShowSidebarButtons
          toggleSidebar={toggleSidebar}
          toggleFilterBar={toggleFilterBar}
          toggleBookListTableView={toggleBookListTableView}
          showAsTable={showAsTable}
        />
        <div className={showAsTable ? 'book__item-container show-table' : 'book__item-container'}>
          {bookList && showAsTable ? (
            <BookListBadge bookList={filteredList} />
          ) : (filteredList.map(item => (
              (<BookListItemCard key={item._id} item={item} />)
          )))}
        </div>
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

BookCategoryList.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  toggleFilterBar: PropTypes.func.isRequired,
  toggleBookListTableView: PropTypes.func.isRequired,
  bookList: PropTypes.arrayOf(bookInterface),
  showAsTable: PropTypes.bool.isRequired
};

export default BookCategoryList;
