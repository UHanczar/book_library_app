// @flow

import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

const Header = (props: {
  logoutUser: Function,
  user: {
    authenticated: boolean,
    userData: Object
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
                <span onClick={() => props.logoutUser()}>Logout</span>
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

export default Header;
