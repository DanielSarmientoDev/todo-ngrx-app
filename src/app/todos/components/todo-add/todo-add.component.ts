import { create } from '../../../store/actions/todo.actions';
import { AppState } from 'src/app/app.reducer';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss'],
})
export class TodoAddComponent implements OnInit {
  formInput: FormControl;
  constructor(private store: Store<AppState>) {
    this.formInput = new FormControl('', Validators.required);
  }

  ngOnInit(): void {}
  addTodo() {
    if (this.formInput.valid) {
      this.store.dispatch(create({ text: this.formInput.value }));
      this.formInput.reset();
    } else {
      return;
    }
  }
}
