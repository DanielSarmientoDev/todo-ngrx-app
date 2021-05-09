import { setFilter, Filter } from './../actions/filter.actions';
import { createReducer, on } from '@ngrx/store';

export const initialState = 'All' as Filter;

const _filterReducer = createReducer(
  initialState,
  on(setFilter, (state, { filter }) => filter)
);

export function filterReducer(state: any, action: any) {
  return _filterReducer(state, action);
}
