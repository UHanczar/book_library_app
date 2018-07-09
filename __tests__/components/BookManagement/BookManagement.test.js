import React from 'react';

import BookManagement from '../../../src/components/BookManagement/BookManagement';

describe('BookDescription tests', () => {
  let wrapper;
  let userList;
  let assigning;
  let isAvailable;
  let currentReader;
  let id;
  let assignItem;
  let unassignItem;
  beforeAll(() => {
    userList = [{ firstName: 'John', lastName: 'Dow', _id: '1' }];
    assigning = false;
    isAvailable = true;
    currentReader = null;
    id = '2';
    assignItem = jest.fn();
    unassignItem = jest.fn();
    wrapper = (
      available = isAvailable,
      reader = currentReader,
      list = userList,
      assign = assigning,
      i = id,
      assignBook = assignItem,
      unassignBook = unassignItem
    ) => mount(
      <BookManagement
        userList={list}
        assigning={assign}
        isAvailable={available}
        currentReader={reader}
        id={i}
        assignItem={assignBook}
        unassignItem={unassignBook}
      />
    );
  });

  describe('render tests', () => {
    it('should exist', () => {
      expect(wrapper()).toBeDefined();
    });

    it('should call assignItem on assign button click', () => {
      wrapper().find('.btn__group-assign').simulate('click');
      expect(wrapper().props().assignItem).toBeCalled();
    });
  });

  describe('conditional render tests', () => {
    it('should call unassignItem on unassign button click', () => {
      const conditionalWrapper = wrapper(false, { _id: '1' })
      conditionalWrapper.find('.btn__group-unassign').simulate('click');
      expect(wrapper().props().unassignItem).toBeCalled();
    });
  });
});
