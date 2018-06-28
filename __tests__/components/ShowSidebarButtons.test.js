import React from 'react';

import ShowSidebarButtons from '../../src/components/ShowSidebarButtons/ShowSidebarButtons';

describe('ShowSidebarButtons tests', () => {
  let wrapper;
  let toggleSidebar;
  let toggleFilterBar;
  let toggleBookListTableView;
  let showAsTable;

  beforeEach(() => {
    toggleSidebar = jest.fn();
    toggleFilterBar = jest.fn();
    toggleBookListTableView = jest.fn();
  });

  describe('ShowSidebarButtons props tests', () => {
    beforeEach(() => {
      showAsTable = true;
      wrapper = mount(
        <ShowSidebarButtons
          toggleSidebar={toggleSidebar}
          toggleFilterBar={toggleFilterBar}
          toggleBookListTableView={toggleBookListTableView}
          showAsTable={showAsTable}
        />
      );
    });

    it('should exist', () => {
      expect(wrapper).toBeDefined();
    });

    it('should pass props properly', () => {
      expect(wrapper.props().toggleSidebar).toEqual(expect.any(Function));
      expect(wrapper.props().toggleFilterBar).toEqual(expect.any(Function));
      expect(wrapper.props().toggleBookListTableView).toEqual(expect.any(Function));
      expect(wrapper.props().showAsTable).toBeTruthy();
    });

    it('should call toggleSidebar on click event', () => {
      wrapper.find('.sidebar-toggle').simulate('click');

      expect(toggleSidebar.mock.calls.length).toBe(1);
    });

    it('should call toggleFilterBar on click event', () => {
      wrapper.find('.filterbar-toggle').simulate('click');

      expect(toggleFilterBar.mock.calls.length).toBe(1);
    });

    it('should call toggleBookListTableView on click event', () => {
      wrapper.find('.list-toggle').simulate('click');

      expect(toggleBookListTableView.mock.calls.length).toBe(1);
    });
  });

  describe('ShowSidebarButtons proper content render tests', () => {
    beforeEach(() => {
      toggleSidebar = jest.fn();
      toggleFilterBar = jest.fn();
      toggleBookListTableView = jest.fn();
    });

    it('should render button title properly as "Show as cards"', () => {
      showAsTable = false;
      wrapper = mount(
        <ShowSidebarButtons
          toggleSidebar={toggleSidebar}
          toggleFilterBar={toggleFilterBar}
          toggleBookListTableView={toggleBookListTableView}
          showAsTable={showAsTable}
        />
      );
      expect(wrapper.find('.list-toggle').text()).toBe('Show as List');
    });

    it('should render button title properly as "Show as list"', () => {
      showAsTable = true;
      wrapper = mount(
        <ShowSidebarButtons
          toggleSidebar={toggleSidebar}
          toggleFilterBar={toggleFilterBar}
          toggleBookListTableView={toggleBookListTableView}
          showAsTable={showAsTable}
        />
      );
      expect(wrapper.find('.list-toggle').text()).toBe('Show as Cards');
    });
  });
});
