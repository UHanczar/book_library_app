import React from 'react';

import './app.scss';

import Header from './Header/Header';
import Main from './Main/MainContainer';
import Footer from './Footer/Footer';

const App = () => (
  <div className='app__container'>
    <Header />
    <Main />
    <Footer />
  </div>
);

export default App;
