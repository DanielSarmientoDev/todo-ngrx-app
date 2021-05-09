import { Filter } from './../store/actions/filter.actions';
import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filterTodo',
})
export class FilterPipe implements PipeTransform {
  transform(todos: Todo[], ...filter: any): Todo[] {
     filter = filter.toString();

    switch (filter) {
      case 'Completed':
        return todos.filter((todo) => todo.done);
      case 'Pending':
        return todos.filter((todo) => !todo.done);
      default:
        return todos;
    }
  }
}
