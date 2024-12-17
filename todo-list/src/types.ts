export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  status: TodoStatus;
  userId?: number;
  metadata?: string | object;
}

export type PartialTodo = {
  [K in keyof Todo]?: Todo[K];
};

export enum TodoStatus {
  Pending = 'Pending',
  InProgress = 'InProgress',
  Completed = 'Completed'
}

export interface User {
  id: number;
  name: string;
  email?: string;
  readonly todos: ReadonlyArray<Todo>;
}

export interface Project {
  id: number;
  name: string;
  users: User[];
  todos: Todo[];
}
