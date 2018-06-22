import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import bookListReducer from './bookListReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  bookList: bookListReducer,
  bookListFilter: filterReducer,
  form: formReducer
});

export default rootReducer;
