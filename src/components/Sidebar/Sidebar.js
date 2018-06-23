// @flow

import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

import './sidebar.scss';

import SidebarItem from '../SidebarItem/SidebarItem';

const SideBar = (props: {
  bookCategories: Array<{
    categoryName: string,
    categoryPathName: string
  }>
}) => (
  <div className='sidebar__container'>
    <ul className='sidenav sidenav__custom'>
      {props.bookCategories && props.bookCategories.map(category => (
        <SidebarItem
          key={uniqid()}
          path={category.categoryPathName}
          name={category.categoryName}
          img={`images/category/${category.categoryPathName}.svg`}
        />
      ))}
    </ul>
  </div>
);

const categoryInterface = PropTypes.shape({
  categoryName: PropTypes.string,
  categoryPathName: PropTypes.string
});

SideBar.propTypes = {
  bookCategories: PropTypes.arrayOf(categoryInterface)
};

export default SideBar;
