import { createAction, props } from '@ngrx/store';
export const create = createAction(
  '[TODO] Create TODO',
  props<{ text: string }>()
);
export const toggle = createAction(
  '[TODO] Toggle TODO',
  props<{ id?: number; done: boolean }>()
);

export const edit = createAction(
  '[TODO] Edit TODO',
  props<{ id?: number; text: string }>()
);

export const deleted = createAction(
  '[TODO] Delete TODO',
  props<{ id?: number }>()
);

export const toggleAll = createAction(
  '[TODO] Toggle Toggle All',
  props<{ done: boolean }>()
);

export const removeAll = createAction(
  '[TODO] Remove TODO',
)
