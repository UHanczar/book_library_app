import React from 'react';

import Loader from '../../../src/components/Loader/Loader';

describe('Loader tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Loader />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should get render itserf properly', () => {
    expect(wrapper.find('.loader-wrapper-container').length).toBe(1);
  });
});
