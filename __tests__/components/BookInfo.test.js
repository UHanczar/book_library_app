import React from 'react';

import BookInfo from '../../src/components/BookInfo/BookInfo';

describe('BookInfo tests', () => {
  let wrapper;
  let authors;
  let publisher;
  let year;
  beforeEach(() => {
    authors = ['John', 'Nick'];
    publisher = 'publicher';
    year = '1997';
    wrapper = mount(
      <BookInfo
        authors={authors}
        publisher={publisher}
        year={year}
      />
    );
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should get props properly', () => {
    expect(wrapper.props().authors.length).toBe(2);
    expect(wrapper.props().publisher).toBe(publisher);
    expect(wrapper.props().year).toBe(year);
  });
});
