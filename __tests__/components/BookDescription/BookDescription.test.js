import React from 'react';

import BookDescription from '../../../src/components/BookDescription/BookDescription';

describe('BookDescription tests', () => {
  let wrapper;
  let description;
  beforeEach(() => {
    description = 'Some description';
    wrapper = mount(<BookDescription description={description} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should get props properly', () => {
    expect(wrapper.props().description).toBe(description);
  });
});
