// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

import { categoryInterface } from '../../models/reactPropTypes';
import type { CategoryInterfaceFlow } from '../../models/flowTypes';

import SidebarItem from '../SidebarItem/SidebarItem';

import './sidebar.scss';

type Props = {
  bookCategories: Array<CategoryInterfaceFlow>,
  fetchBookCategories: Function
};

class SideBar extends Component<Props> {
  constructor(props: Props) {
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

SideBar.propTypes = {
  bookCategories: PropTypes.arrayOf(PropTypes.shape(categoryInterface)),
  fetchBookCategories: PropTypes.func.isRequired
};

export default SideBar;
