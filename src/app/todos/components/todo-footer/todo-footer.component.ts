import { setFilter } from './../../../store/actions/filter.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducer';
import * as actions from 'src/app/store/actions/filter.actions';
import { removeAll } from 'src/app/store/actions/todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss'],
})
export class TodoFooterComponent implements OnInit {
  filterCurrent = 'All' as actions.Filter;
  filters = ['All', 'Completed', 'Pending'] as actions.Filter[];
  pendings: number = 0;
  constructor(private store: Store<AppState>) {

    this.store.subscribe((state) => {
      this.filterCurrent = state.filter;
      this.pendings = state.todos.filter((todo) => !todo.done).length;
    });
  }
  changeFilter(filter: any) {
    this.store.dispatch(setFilter({ filter }));
  }
  removeAll(){
    this.store.dispatch(removeAll())
  }

  ngOnInit(): void {}
}
