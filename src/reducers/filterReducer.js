import { FILTER_BY_DATE, FILTER_BY_RATE } from '../actions/types';

const defaultState = {
  filterByDate: false,
  filterByRate: false
};

const filterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FILTER_BY_DATE:
      return {
        ...state,
        filterByDate: !state.filterByDate
      };
    case FILTER_BY_RATE:
      return {
        ...state,
        filterByRate: !state.filterByRate
      };
    default:
      return state;
  }
};

export default filterReducer;
