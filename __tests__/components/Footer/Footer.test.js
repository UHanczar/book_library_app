import React from 'react';

import Footer from '../../../src/components/Footer/Footer';

describe('Footer tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Footer />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should get render itserf properly', () => {
    expect(wrapper.find('.footer__container').length).toBe(1);
  });
});
