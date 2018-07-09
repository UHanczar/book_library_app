// @flow

import { FILTER_BY_DATE, FILTER_BY_RATE } from './types';
import type { Action } from '../models/flowTypes';

export const filterByDate = (): Action => ({
  type: FILTER_BY_DATE
});

export const filterByRate = (): Action => ({
  type: FILTER_BY_RATE
});
