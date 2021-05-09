import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { TodosComponent } from './todos.component';
import { TodoFooterComponent } from './components/todo-footer/todo-footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    TodoAddComponent,
    TodoFooterComponent,
    TodoItemComponent,
    TodoListComponent,
    TodosComponent,
    FilterPipe,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TodosComponent],
})
export class TodosModule {}
