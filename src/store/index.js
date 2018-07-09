// @flow

import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { middleware as flashMiddleware } from 'redux-flash';

import rootReducer from '../reducers/index';

const initialState = {};

let middleware = [thunk, flashMiddleware()];

/* istanbul ignore next */
if (process.env.NODE_ENV !== 'production') {
  middleware = [...middleware, logger];
}

/* istanbul ignore next */
const store: Object = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ?
      window.devToolsExtension() : f => f
  )
);

export default store;
