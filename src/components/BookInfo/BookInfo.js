// @flow

import React from 'react';
import PropTypes from 'prop-types';
import uniqId from 'uniqid';

import './book-info.scss';

const BookInfo = (props: {
  authors: Array<String>,
  publisher: String,
  year: String
}) => (
  <div className='book__info-container'>
    <div className='book__info-container-authors'>
      <div className='book__info-container-authors-pic'>
        <i className='material-icons'>perm_identity</i>
      </div>
      <div className='book__info-container-authors-data'>
        <div className='book__info-container-authors-data-title'>Authors</div>
        <div className='book__info-container-authors-data-text'>
          {props.authors.map((author, i) => (
            <span key={uniqId()}>{
              props.authors.length > 1 && props.authors.length !== 0 && i < props.authors.length - 1 ?
                `${author}, `: author}</span>
              ))}
        </div>
      </div>
    </div>
    <div className='book__info-container-publisher'>
      <div className='book__info-container-publisher-pic'>
        <i className='material-icons'>portrait</i>
      </div>
      <div className='book__info-container-publisher-data'>
        <div className='book__info-container-publisher-data-title'>Publisher</div>
        <div className='book__info-container-publisher-data-text'>{props.publisher}</div>
      </div>
    </div>
    <div className='book__info-container-year'>
      <div className='book__info-container-publisher-pic'>
        <i className='material-icons'>access_time</i>
      </div>
      <div className='book__info-container-year-data'>
        <div className='book__info-container-year-data-title'>Year</div>
        <div className='book__info-container-year-data-text'><span>{props.year}</span></div>
      </div>
    </div>
    <div className='book__info-container-pages'>
      <div className='book__info-container-publisher-pic'>
        <i className='material-icons'>library_books</i>
      </div>
      <div className='book__info-container-pages-data'>
        <div className='book__info-container-pages-data-title'>Pages</div>
        <div className='book__info-container-pages-data-text'><span>{props.pages}</span></div>
      </div>
    </div>
  </div>
);

BookInfo.propTypes = {
  authors: PropTypes.arrayOf(PropTypes.string).isRequired,
  publisher: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired
};

export default BookInfo;
