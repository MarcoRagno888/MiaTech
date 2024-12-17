import { Todo } from './types';

export function filterTodos<T>(todos: Todo[], filterFn: (todo: Todo) => boolean): Todo[] {
  return todos.filter(filterFn);
}