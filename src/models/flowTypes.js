// @flow

import * as types from '../actions/types';

// data intervaces
export type RatingData = Array<{
  userId: string,
  rating: string
}>
export type BookInterfaceFlow = {
  _id: string,
  authors: [string],
  name: string,
  pathName: string,
  publisher: string,
  year: string,
  pages: string,
  rating: string,
  description?: string,
  isAvailable: boolean,
  ratingData: RatingData
};

export type UserInterfaceFlow = {
  _id: string,
  firstName: string,
  lastName: string,
  email: string,
  login: string,
  isAdmin: boolean,
  created: string
};

export type CategoryInterfaceFlow = {
  _id: string,
  categoryName: string,
  categoryPathName: string
};

/**
*
* REDUX INTERFACES
*/

// Actions interfaces

// filter actions interfaces
type filterByDateAction = { type: typeof types.FILTER_BY_DATE };
type filterByRateAction = { type: typeof types.FILTER_BY_RATE };

// bookCategories Actions
type fetchBookCategoriesActions = {
  type: typeof types.FETCH_BOOK_CATEGORIES,
  payload: Array<CategoryInterfaceFlow>
};

// bookItem actions interfaces
type fetchBookItem = { type: typeof types.FETCH_BOOK_ITEM };

type fetchBookItemSuccess = {
  type: typeof types.FETCH_BOOK_ITEM_SUCCESS,
  payload: Array<BookInterfaceFlow>
};

type fetchBookItemError = {
  type: typeof types.FETCH_BOOK_ITEM_ERROR
};

type removeBookItemError = {
  type: typeof types.REMOVE_ITEM
};

//
type rateItem = {
  type: typeof types.RATE_ITEM
};

type rateItemSuccess = {
  type: typeof types.RATE_ITEM_SUCCESS
};

type rateItemError = {
  type: typeof types.RATE_ITEM_ERROR
};

type assignBook = {
  type: typeof types.ASSIGN_BOOK
};

type assignBookSuccess = {
  type: typeof types.ASSIGN_BOOK_SUCCESS
};

type assignBookError = {
  type: typeof types.ASSIGN_BOOK_ERROR
};

type unassignBook = {
  type: typeof types.UNASSIGN_BOOK
};

type unassignBookSuccess = {
  type: typeof types.UNASSIGN_BOOK_SUCCESS
};

type unassignBookError = {
  type: typeof types.UNASSIGN_BOOK_ERROR
};

type fetchBookList = {
  type: typeof types.FETCH_BOOK_LIST
};

type fetchBookListSuccess = {
  type: typeof types.FETCH_BOOK_LIST_SUCCESS,
  payload: Array<BookInterfaceFlow>
};

type fetchBookListError = {
  type: typeof types.FETCH_BOOK_LIST_SUCCESS
};

type UpdateBookList = {
  type: typeof types.UPDATE_BOOK_LIST_RATE_DATA
};

type loginUser = {
  type: typeof types.LOGIN_USER
};

type loginUserSuccess = {
  type: typeof types.LOGIN_USER_SUCCESS,
  payload: UserInterfaceFlow
};

type loginUserError = {
  type: typeof types.LOGIN_USER_ERROR,
  payload: UserInterfaceFlow
};

export type Action =
  | filterByDateAction
  | filterByRateAction
  | fetchBookItemSuccess
  | fetchBookCategoriesActions
  | fetchBookItem
  | fetchBookItemError
  | removeBookItemError
  | rateItem
  | rateItemSuccess
  | rateItemError
  | assignBook
  | assignBookSuccess
  | assignBookError
  | unassignBook
  | unassignBookSuccess
  | unassignBookError
  | fetchBookList
  | fetchBookListSuccess
  | fetchBookListError
  | UpdateBookList
  | loginUser
  | loginUserSuccess
  | loginUserError;

export type GetState = () => Object;
type PromiseAction = Promise<Action>;
export type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any;

export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;