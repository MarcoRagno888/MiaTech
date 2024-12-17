import { Todo, TodoRecord } from './types';

export function filterTodos<T>(todos: Todo[], filterFn: (todo: Todo) => boolean): Todo[] {
  return todos.filter(filterFn);
}

export function convertArrayToRecord(todos: Todo[]): TodoRecord {
  return todos.reduce((record, todo) => {
    record[todo.id] = todo;
    return record;
  }, {} as TodoRecord);
}