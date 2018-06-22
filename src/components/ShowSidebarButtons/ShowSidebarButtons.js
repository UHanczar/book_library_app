// @flow

import React from 'react';
import PropTypes from 'prop-types';

import './showSidebarButtons.scss';

const ShowSidebarButtons = (props: {
  toggleSidebar: Function,
  toggleFilterBar: Function
}) => (
  <div className='main__route-container-header'>
    <div
      className='btn-flat btn-small sidebar-toggle'
      onClick={() => props.toggleSidebar()}
    >
      <i className='material-icons'>menu</i>
    </div>
    <a
      className='btn-flat filterbar-toggle'
      onClick={() => props.toggleFilterBar()}
    >
      Show Filter Bar
    </a>
  </div>
);

ShowSidebarButtons.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  toggleFilterBar: PropTypes.func.isRequired
};

export default ShowSidebarButtons;
