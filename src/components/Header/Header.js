import React from 'react';
import { Link } from 'react-router-dom'

import './header.scss';

const Header = () => (
  <div className='header__container'>
    <nav>
      <div className='nav-wrapper'>
        <Link to='/' className='brand-logo'>
          GKB
        </Link>
        <ul className='right'>
          <li>
            <Link to='/login'>
              <i className='material-icons left'>
                account_circle
              </i>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

  export default Header;
