import { toggleAll } from '../store/actions/todo.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AppState } from '../app.reducer';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosComponent implements OnInit {
  completed: boolean = false;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}
  toggleAll() {
    this.completed = !this.completed;
    this.store.dispatch(toggleAll({ done: this.completed }));
  }
}
