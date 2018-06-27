// @flow

import React from 'react';
import PropTypes from 'prop-types';

import './show-sidebar-buttons.scss';

const ShowSidebarButtons = (props: {
  toggleSidebar: Function,
  toggleFilterBar: Function,
  toggleBookListTableView: Function,
  showAsTable: Boolean
}) => (
  <div className='main__route-container-header'>
    <div
      className='btn-flat btn-small sidebar-toggle'
      onClick={() => props.toggleSidebar()}
    >
      <i className='material-icons'>menu</i>
    </div>
    <a
      className='btn-flat filterbar-toggle btn-small'
      onClick={props.toggleBookListTableView}
    >
      Show as {props.showAsTable ? 'Cards' : 'List'}
    </a>
    <a
      className='btn-flat filterbar-toggle btn-small'
      onClick={() => props.toggleFilterBar()}
    >
      Show Filter Bar
    </a>
  </div>
);

ShowSidebarButtons.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  toggleFilterBar: PropTypes.func.isRequired,
  toggleBookListTableView: PropTypes.func.isRequired,
  showAsTable: PropTypes.bool.isRequired
};

export default ShowSidebarButtons;
