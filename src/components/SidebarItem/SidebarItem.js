// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './sidebaritem.scss';

const SidebarItem = (props: { name: number, img: number }) => (
  <li className='sidenav__custom-item'>
    <Link to='/'>
      <i className='material-icons left'>
        {props.img}
      </i>
      <span>{props.name}</span>
    </Link>
  </li>
);

SidebarItem.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

export default SidebarItem;
