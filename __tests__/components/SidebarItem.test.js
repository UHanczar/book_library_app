import React from 'react';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';

import SidebarItem from '../../src/components/SidebarItem/SidebarItem';

describe('SidebarItem tests', () => {
  let wrapper;
  let name;
  let path;
  let img;
  const options = new ReactRouterEnzymeContext();
  beforeEach(() => {
    name = 'JavaScript';
    path = 'javascript';
    img = '/images/javascript.png';
    wrapper = mount(
      <SidebarItem
        destination={`/category/${path}`}
        name={name}
        path={path}
        img={img}
      />,
      options.get()
    );
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should get props properly', () => {
    expect(wrapper.props().name).toBe(name);
    expect(wrapper.props().path).toBe(path);
    expect(wrapper.props().img).toBe(img);
  });
});
