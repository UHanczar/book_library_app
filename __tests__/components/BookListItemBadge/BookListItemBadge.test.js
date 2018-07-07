import React from 'react';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';

import BookListBadge from '../../../src/components/BookListBadge/BookListBadge';

describe('BookListItemBadge tests', () => {
  let wrapper;
  let bookList;

  beforeEach(() => {
    bookList = [{
      pathName: 'pathName',
      name: 'name',
      authors: ['author'],
      ratingData: [{ rating: '2' }, { rating: '3' }],
      _id: '1'
    }];
    const options = new ReactRouterEnzymeContext();
    wrapper = (bl = bookList) => mount(
      <BookListBadge
        bookList={bl}
      />,
      options.get()
    );
  });

  it('should exist', () => {
    expect(wrapper()).toBeDefined();
  });

  it('should render proper amount of badge bomponents', () => {
    expect(wrapper().find('Link').length).toBe(1);
  });
});
