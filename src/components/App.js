import React from 'react';

import './app.scss';

import Header from './Header/HeaderContainer';
import FlashMessagesList from './FlashMessagesList/FlashMessagesListContainer';
import Main from './Main/MainContainer';
import Footer from './Footer/Footer';

const App = () => (
  <div className='app__container'>
    <Header />
    <FlashMessagesList />
    <Main />
    <Footer />
  </div>
);

export default App;
