import { createAction, props } from '@ngrx/store';

export type Filter = 'All' | 'Completed' | 'Pending';

export const setFilter = createAction(
  '[FILTER] Set FILTER',
  props<{ filter: Filter }>()
);
