import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as flashReducer } from 'redux-flash';

import bookCategoriesReducer from './bookCategoriesReducer';
import bookListReducer from './bookListReducer';
import bookItemReducer from './bookItemReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  bookCategories: bookCategoriesReducer,
  bookList: bookListReducer,
  bookListFilter: filterReducer,
  bookItem: bookItemReducer,
  form: formReducer,
  flash: flashReducer
});

export default rootReducer;
