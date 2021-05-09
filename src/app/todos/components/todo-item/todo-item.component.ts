import { Store } from '@ngrx/store';
import { FormControl, Validators } from '@angular/forms';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { AppState } from 'src/app/app.reducer';
import { deleted, edit, toggle } from 'src/app/store/actions/todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo?: Todo;
  doneTodo: FormControl = new FormControl();
  textForm: FormControl = new FormControl();
  editing: boolean = false;
  @ViewChild('input') textInput!: ElementRef;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.doneTodo = new FormControl(this.todo?.done);
    this.textForm = new FormControl(this.todo?.text, Validators.required);
    this.doneTodo.valueChanges.subscribe((value) => {
      this.store.dispatch(toggle({ id: this.todo?.id, done: value }));
    });
  }

  edit() {
    this.editing = true;
    setTimeout(() => {
      this.textInput.nativeElement.select();
    }, 1);
  }
  finishEdit() {
    this.editing = false;
    if (this.textForm.value == this.todo?.text) {
      return;
    }
    if (this.textForm.invalid) {
      return;
    }
    this.store.dispatch(
      edit({ id: this.todo?.id, text: this.textForm?.value! })
    );
    console.log(this.todo?.text!);
  }
  delete() {
    this.store.dispatch(deleted({ id: this.todo?.id }));
  }
}
