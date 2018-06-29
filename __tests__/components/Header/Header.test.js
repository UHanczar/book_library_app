import React from 'react';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';

import Header from '../../../src/components/Header/Header';

describe('Header tests', () => {
  let wrapper;

  beforeEach(() => {
    const options = new ReactRouterEnzymeContext();
    wrapper = mount(<Header destination='/login' />, options.get());
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should get render itserf properly', () => {
    expect(wrapper.find('.header__container').length).toBe(1);
  });
});
