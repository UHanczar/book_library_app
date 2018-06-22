import { combineReducers } from 'redux';

import bookListReducer from './bookListReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  bookList: bookListReducer,
  bookListFilter: filterReducer
});

export default rootReducer;
