import React from 'react';
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';

import './sidebar.scss';

import fakeCategories from '../../fakeData/fakeCategories';

import SidebarItem from '../SidebarItem/SidebarItem';

const SideBar = () => (
  <div className='sidebar__container'>
    <ul className='sidenav sidenav__custom'>
      {fakeCategories.map(category => (
        <SidebarItem
          key={uniqid()}
          path={category.categoryPathName}
          name={category.categoryName}
          img={category.categoryImg}
        />
      ))}
    </ul>
  </div>
);

export default SideBar;
