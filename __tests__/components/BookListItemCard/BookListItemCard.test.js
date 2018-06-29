import React from 'react';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';

import BookListItemCard from '../../../src/components/BookListItemCard/BookListItemCard';

describe('Footer tests', () => {
  let wrapper;
  let item;

  beforeEach(() => {
    item = {
      pathName: 'pathName',
      name: 'name',
      authors: ['author'],
      rating: '3',
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

  // it('should call removeMessage on close button click', () => {
  //   wrapper.find('.flash__message-item-close').simulate('click');
  //   expect(removeMessage.mock.calls.length).toBe(1);
  // });
});
