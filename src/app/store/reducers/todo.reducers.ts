import { removeAll } from './../actions/todo.actions';
import { Todo } from '../../todos/models/todo.model';
import { Action, createReducer, on } from '@ngrx/store';
import {
  create,
  toggle,
  edit,
  deleted,
  toggleAll,
} from '../actions/todo.actions';
import { state } from '@angular/animations';
export const initialState: Todo[] = [
  new Todo('new todo title'),
  new Todo('new todo title 2'),
  new Todo('new todo title 3'),
];
const _todoReducer = createReducer(
  initialState,
  on(create, (state, { text }) => [...state, new Todo(text)]),
  on(toggle, (state, { id, done }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          done: done,
        };
      } else {
        return todo;
      }
    });
  }),
  on(edit, (state, { id, text }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          text: text,
        };
      } else {
        return todo;
      }
    });
  }),
  on(deleted, (state, { id }) => {
    return state.filter((todo) => todo.id != id);
  }),
  on(toggleAll, (state, { done }) => {
    return state.map((todo) => {
      return {
        ...todo,
        done: done,
      };
    });
  }),
  on(removeAll, state => state.filter((todo) => !todo.done))
  )

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
