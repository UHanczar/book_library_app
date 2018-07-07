// @flow

import React from 'react';
import PropTypes from 'prop-types';

import { userInterface } from '../../models/reactPropTypes';
import type { userInterfaceFlow } from '../../models/flowTypes';

import './book-management.scss';

const BookManagement = (props: {
  userList: Array<userInterfaceFlow>,
  assigning: boolean,
  isAvailable: boolean,
  currentReader: userInterfaceFlow,
  id: string,
  assignItem: Function,
  unassignItem: Function
}) => (
  <div className='book__management-container'>
    <div className='collection user__collection'>
      {props.userList && props.userList.map(user => (
        <a
          key={user._id}
          className='collection-item user__collection-item'
        >
          <p className='user-name'>{`${user.firstName} ${user.lastName}`}</p>
          <div className='btn__group'>
            <button
              disabled={props.assigning || !props.isAvailable}
              className={props.assigning || !props.isAvailable ? 'badge btn__group-assign btn__group-assign-disabled' : 'badge light-blue darken-2 btn__group-assign'}
              onClick={() => props.assignItem(props.id, user._id)}
            >
              Assign
            </button>
            <button
              disabled={props.assigning || props.isAvailable || !props.isAvailable && props.currentReader && user._id !== props.currentReader._id}
              className={props.assigning || props.isAvailable || !props.isAvailable && props.currentReader && user._id !== props.currentReader._id ? 'badge btn__group-unassign btn__group-unassign-disabled' : 'badge  deep-orange darken-3 btn__group-unassign'}
              onClick={() => props.unassignItem(props.id)}
            >
              Unassign
            </button>
          </div>
        </a>
      ))}
    </div>
  </div>
);

BookManagement.propTypes = {
  userList: PropTypes.arrayOf(userInterface.userData),
  assignItem: PropTypes.func.isRequired,
  unassignItem: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  isAvailable: PropTypes.bool.isRequired,
  assigning: PropTypes.bool.isRequired
};

export default BookManagement;
