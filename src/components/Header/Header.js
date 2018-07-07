// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { userDataInterface } from '../../models/reactPropTypes';
import type { userInterfaceFlow } from '../../models/flowTypes';

import './header.scss';

const Header = (props: {
  logoutUser: Function,
  user: {
    authenticated: boolean,
    userData: userInterfaceFlow
}}) => (
  <div className='header__container'>
    <nav className='navbar-fixed light-blue lighten-2'>
      <div className='nav-wrapper'>
        <Link to='/' className='brand-logo'>
          <div className='brand-logo-container'>
            <div>
              <img className='logo-img' src='./images/logo.png' alt='logo' />
            </div>
            <p className='logo-text'>GKB</p>
          </div>
        </Link>
        <ul className='right'>
          {props.user.userData && props.user.authenticated ? (
            <li>
              <div className='header-btn'>
                <i className='material-icons left header__user-logo'>
                  account_circle
                </i>
                <span className='header__user-name'>
                  {props.user.userData.firstName}
                </span>
                <span
                  className='logout-btn'
                  onClick={() => props.logoutUser()}
                >
                  Logout
                </span>
              </div>
            </li>
          ) : (
            <li>
              <Link to='/login'>
                <i className='material-icons left'>
                  account_circle
                </i>
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  </div>
);

Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  user: PropTypes.shape({
    authenticated: PropTypes.bool,
    userData: PropTypes.shape(userDataInterface)
  })
};

export default Header;
