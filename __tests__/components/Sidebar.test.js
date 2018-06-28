import React from 'react';

import Sidebar from '../../src/components/Sidebar/Sidebar';

jest.doMock('../../src/components/SidebarItem/SidebarItem', () => {
  const SidebarItemMock = () => <div />;
  return SidebarItemMock;
});

describe('Sidebar tests', () => {
  let wrapper;
  let bookCategories;
  let fetchBookCategories;

  beforeEach(() => {
    bookCategories = [
      {
        categoryName: 'JavaScript',
        categoryPathName: 'javascript'
      },
      {
        categoryName: 'CSS',
        categoryPathName: 'css'
      }
    ];
    fetchBookCategories = jest.fn();

    wrapper = shallow(
      <Sidebar
        bookCategories={bookCategories}
        fetchBookCategories={fetchBookCategories}
      />);
  });

  it('should component to exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should pass props correctly', () => {
    expect(wrapper.props().children.props.children.length).toBe(2);
  });
});
