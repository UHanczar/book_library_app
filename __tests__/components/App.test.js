import React from 'react';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';

import App from '../../src/components/App';

describe('App tests', () => {
  let wrapper;

  beforeEach(() => {
    const options = new ReactRouterEnzymeContext();
    wrapper = shallow(<App destination='/' />, options.get());
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render properly', () => {
    expect(wrapper.find('.app__container').length).toBe(1);
  });
});
