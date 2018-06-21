import React from 'react';

import './footer.scss';

const Footer = () => (
  <div className='footer__container'>
    <footer className='page-footer teal accent-3'>
      <div className='footer-copyright'>
        <div className='container'>
        © 2018 Copyright Text
        <a className='grey-text text-lighten-4 right' href='#!'>More Links</a>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
