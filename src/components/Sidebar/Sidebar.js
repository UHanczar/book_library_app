// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

import './sidebar.scss';

import SidebarItem from '../SidebarItem/SidebarItem';

class SideBar extends Component {
  constructor(props: {
    bookCategories: Array<{
    categoryName: string,
    categoryPathName: string
  }>}) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBookCategories();
  }

  render() {
    const { bookCategories } = this.props;
    return (
      <div className='sidebar__container'>
        <ul className='sidenav sidenav__custom'>
          {bookCategories && bookCategories.map(category => (
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
  }
}

const categoryInterface = PropTypes.shape({
  categoryName: PropTypes.string,
  categoryPathName: PropTypes.string
});

SideBar.propTypes = {
  bookCategories: PropTypes.arrayOf(categoryInterface),
  fetchBookCategories: PropTypes.func.isRequired
};

export default SideBar;
