// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './sidebar-item.scss';

const SidebarItem = (props: {
  name: string,
  path: string,
  img: string
}) => (
  <li className='sidenav__custom-item'>
    <Link to={`/category/${props.path}`} className='item__container'>
      <img className='item__container-img' src={`./${props.img}`} alt='category-item' />
      <p className='item__container-text'>{props.name}</p>
    </Link>
  </li>
);

SidebarItem.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

export default SidebarItem;
