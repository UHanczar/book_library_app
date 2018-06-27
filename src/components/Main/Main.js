import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Link } from 'react-router-dom';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import uniqid from 'uniqid';
import debounce from 'debounce';

import './main.scss';

import SideBar from '../Sidebar/SidebarContainer';
import Login from '../Login/LoginContainer';
import DateFilter from '../DateFilter/DateFilter';
import RateFilter from '../RateFilter/RateFilter';
import BookList from '../BookList/BookList';
import BookItem from '../BookItem/BookItemContainer';
import BookCategoryList from '../BookCategoryList/BookCategoryListContainer';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categorySidebarOpened: false,
      filterSidebarOpened: false,
      showAsTable: false
    };

    this.updateDimensions = this.updateDimensions.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.toggleFilterBar = this.toggleFilterBar.bind(this);
    this.toggleBookListTableView = this.toggleBookListTableView.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', debounce(this.updateDimensions));
    this.props.fetchBookList();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', debounce(this.updateDimensions, 200));
  }

  updateDimensions() {
    if (window.innerWidth > 767) {
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

  hideSidebars() {
    if (this.state.categorySidebarOpened) {
      this.setState({
        categorySidebarOpened: false
      });
    }

    if (this.state.filterSidebarOpened) {
      this.setState({
        filterSidebarOpened: false
      });
    }
  }

  toggleBookListTableView() {
    this.setState({
      showAsTable: !this.state.showAsTable
    });
  }

  render() {
    const {
      bookCategories,
      bookList,
      filterByDate,
      filterByRate
    } = this.props;
    const {
      categorySidebarOpened,
      filterSidebarOpened,
      showAsTable
    } = this.state;

    return (
      <div className='main__container'>
        <SideBar />
        <div
          className={categorySidebarOpened ? 'sidenav__container sidebar__opened' : 'sidenav__container sidebar__closed'}
          style={{ background: '#2c3e50', color: '#ffffff' }}
        >
          <SideNav
            highlightColor='#E91E63'
            highlightBgColor='#00bcd4'
            hoverColor='#ffffff'
          >
            <h5 className='sidebar-title'>
              Categories
            </h5>
            {bookCategories && bookCategories.map(category => (
              <Link
                to={`/category/${category.categoryPathName}`}
                onClick={this.toggleSidebar}
                className='category-link'
                key={uniqid()}
              >
                <Nav id={category.categoryPathName}>
                  <NavIcon>
                    <img className='item__container-img' src={`images/category/${category.categoryPathName}.svg`} alt='category-item' />
                  </NavIcon>
                  <NavText>{category.categoryName}</NavText>
                </Nav>
              </Link>
            ))}
          </SideNav>
        </div>
        <div
          className='main__route-container'
          onClick={() => this.hideSidebars()}
        >
          <Switch>
            <Route
              exact
              path='/category/:name'
              component={props => (
                <BookCategoryList
                  bookList={bookList.list}
                  toggleSidebar={this.toggleSidebar}
                  toggleFilterBar={this.toggleFilterBar}
                  toggleBookListTableView={this.toggleBookListTableView}
                  showAsTable={showAsTable}
                  {...props}
                />
            )}
            />
            <Route exact path='/book/:id' component={props => <BookItem {...props} />} />
            <Route exact path='/login' component={Login} />
            <Route
              exact
              path='/'
              component={() => (
                <BookList
                  bookList={bookList.list}
                  toggleSidebar={this.toggleSidebar}
                  toggleFilterBar={this.toggleFilterBar}
                  toggleBookListTableView={this.toggleBookListTableView}
                  showAsTable={showAsTable}
                />)}
            />
          </Switch>
        </div>
        <div
          className={filterSidebarOpened ? 'filterbar__container filterbar__opened' : 'filterbar__container filterbar__closed'}
          style={{ background: '#eceff1', color: '#464342' }}
        >
          <SideNav
            highlightColor='#464342'
            highlightBgColor='#cfd2d6'
            hoverColor='#464342'
          >
            <h5 className='filters-title'>
              Filters
            </h5>
            <DateFilter
              filterName='Filter by date'
              identifier='dateFilter'
              filterByDate={filterByDate}
            />
            <RateFilter
              filterName='Filter by rating'
              identifier='popularityFilter'
              filterByRate={filterByRate}
            />
          </SideNav>
        </div>
      </div>
    );
  }
}

const categoryInterface = PropTypes.shape({
  categoryName: PropTypes.string,
  categoryPathName: PropTypes.string
});

const bookInterface = PropTypes.shape({
  authors: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  pathName: PropTypes.string,
  publisher: PropTypes.string,
  year: PropTypes.string,
  pages: PropTypes.string,
  description: PropTypes.string
});

Main.propTypes = {
  filterByDate: PropTypes.func.isRequired,
  filterByRate: PropTypes.func.isRequired,
  fetchBookList: PropTypes.func.isRequired,
  bookCategories: PropTypes.arrayOf(categoryInterface),
  bookList: PropTypes.shape({
    loading: PropTypes.bool,
    list: PropTypes.arrayOf(bookInterface)
  })
};

export default Main;
