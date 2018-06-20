import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SidebarItem = ({ name, img }) => (
  <li className='sidenav__custom-item'>
    <Link to='/'>
      <i className='material-icons left'>
        {img}
      </i>
      <span>{name}</span>
    </Link>
  </li>
);

SidebarItem.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

export default SidebarItem;
