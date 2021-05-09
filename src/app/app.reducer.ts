import { Filter } from './store/actions/filter.actions';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './store/reducers/todo.reducers';
import { Todo } from './todos/models/todo.model';
import { filterReducer } from './store/reducers/filter.reducers';

export class AppState {
  todos = [] as Todo[];
  filter: Filter = 'All';
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer,
};
