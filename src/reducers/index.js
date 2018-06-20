import { combineReducers } from 'redux';

import bookListReducer from './bookListReducer';

const rootReducer = combineReducers({
  bookList: bookListReducer
});

export default rootReducer;
