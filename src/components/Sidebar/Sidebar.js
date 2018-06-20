import React from 'react';
import { Link } from 'react-router-dom';

import './sidebar.scss';

import SidebarItem from '../SidebarItem/SidebarItem';

const fakeCategories = [
  {
    categoryName: 'JavaScript',
    categoryImg: 'account_circle'
  },
  {
    categoryName: 'CSS',
    categoryImg: 'account_circle'
  },
  {
    categoryName: 'HTML',
    categoryImg: 'account_circle'
  },
  {
    categoryName: 'Front-end',
    categoryImg: 'account_circle'
  },
  {
    categoryName: 'Single Page Applications',
    categoryImg: 'account_circle'
  },
  {
    categoryName: 'Angular',
    categoryImg: 'account_circle'
  },
  {
    categoryName: 'React',
    categoryImg: 'account_circle'
  }
];

const SideBar = () => (
  <div className='sidebar__container'>
    <ul className='sidenav sidenav__custom'>
      {fakeCategories.map(category => (
        <SidebarItem
          key={category.categoryName}
          name={category.categoryName}
          img={category.categoryImg}
        />
      ))}
    </ul>
  </div>
);

export default SideBar;
