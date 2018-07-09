// @flow

import { FILTER_BY_DATE, FILTER_BY_RATE } from '../actions/types';

const defaultState = {
  byDateFilter: false,
  byRateFilter: false
};

const filterReducer = (state: Object = defaultState, action: { type: string }) => {
  switch (action.type) {
    case FILTER_BY_DATE:
      return {
        byRateFilter: !state.byDateFilter ? false : state.byRateFilter,
        byDateFilter: !state.byDateFilter
      };
    case FILTER_BY_RATE:
      return {
        byDateFilter: !state.byRateFilter ? false : state.byDateFilter,
        byRateFilter: !state.byRateFilter
      };
    default:
      return state;
  }
};

export default filterReducer;
