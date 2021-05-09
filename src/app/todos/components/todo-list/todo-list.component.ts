import { Filter } from './../../../store/actions/filter.actions';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { Todo } from './../../models/todo.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  filterCurrent: any;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('todos').subscribe((todos) => {
      return (this.todos = todos);
    });
    this.store.subscribe(({todos, filter}) => {
      this.filterCurrent = filter;
      this.todos = todos
    });
  }
}
