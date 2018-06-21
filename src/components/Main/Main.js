import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import uniqid from 'uniqid';
import debounce from 'debounce';

import './main.scss';

import SideBar from '../Sidebar/Sidebar';
import Login from '../Login/Login';

import fakeCategories from '../../fakeData/fakeCategories';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categorySidebarOpened: false,
      filterSidebarOpened: false
    };

    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', debounce(this.updateDimensions));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', debounce(this.updateDimensions, 200));
  }

  updateDimensions() {
    if (window.innerWidth > 768) {
      this.setState({
        categorySidebarOpened: false
      });
    }
  }

  toggleSidebar() {
    if (this.state.filterSidebarOpened) {
      this.setState({
        filterSidebarOpened: false
      });
    }

    this.setState({
      categorySidebarOpened: !this.state.categorySidebarOpened
    });
  }

  toggleFilterBar() {
    if (this.state.categorySidebarOpened) {
      this.setState({
        categorySidebarOpened: false
      });
    }

    this.setState({
      filterSidebarOpened: !this.state.filterSidebarOpened
    });
  }

  render() {
    const { categorySidebarOpened, filterSidebarOpened } = this.state;

    return (
      <div className='main__container'>
        <SideBar />
        <div
          className={categorySidebarOpened ? 'sidenav__container sidebar__opened' : 'sidenav__container sidebar__closed'}
          style={{ background: '#2c3e50', color: '#FFF' }}
        >
          <SideNav
            highlightColor='#E91E63'
            highlightBgColor='#00bcd4'
            hoverColor='#ffffff'
          >
            <Nav id='dashboard'>
              <NavText>Categories</NavText>
            </Nav>
            {fakeCategories.map(category => (
              <Link
                to={`/category/${category.categoryPathName}`}
                className='category-link'
                key={uniqid()}
              >
                <Nav id={category.categoryPathName}>
                  <NavIcon>
                    <img className='item__container-img' src={`./${category.categoryImg}`} alt='category-item' />
                  </NavIcon>
                  <NavText>{category.categoryName}</NavText>
                </Nav>
              </Link>
            ))}
          </SideNav>
        </div>
        <div className='main__route-container' onClick={() => this.toggleFilterBar()}>
          <Switch>
            <Route exact path='/' component={() => (<div>Main</div>)} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </div>
        <div
          className={filterSidebarOpened ? 'filterbar__container filterbar__opened' : 'filterbar__container filterbar__closed'}
          style={{ background: '#2c3e50', color: '#FFF' }}
        >
          <SideNav
            highlightColor='#E91E63'
            highlightBgColor='#00bcd4'
            hoverColor='#ffffff'
          >
            <Nav id='dashboard'>
              <NavText>Categories</NavText>
            </Nav>
          </SideNav>
        </div>
      </div>
    );
  }
}

export default Main;
