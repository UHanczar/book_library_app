// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'materialize-css/dist/css/materialize.min.css';

import { fetchBookList } from './actions/bookListActions';

import store from './store';
import App from './components/App';

store.dispatch(fetchBookList());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('app'));
