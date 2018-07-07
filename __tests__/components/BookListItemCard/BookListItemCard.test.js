import React from 'react';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';

import BookListItemCard from '../../../src/components/BookListItemCard/BookListItemCard';

describe('BookListItemCard tests', () => {
  let wrapper;
  let item;

  beforeEach(() => {
    item = {
      pathName: 'pathName',
      name: 'name',
      authors: ['author'],
      ratingData: [{ rating: '3' }, { rating: '2' }],
      _id: '1'
    };
    const options = new ReactRouterEnzymeContext();
    wrapper = mount(
      <BookListItemCard
        item={item}
      />,
      options.get()
    );
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render proper amount of stars', () => {
    expect(wrapper.find('StarRatings').children().props().children[1].length).toBe(5);
  });
});
