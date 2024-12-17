import { Todo } from './types';
import { User } from './types';

let todos: Todo[] = [
  { id: 1, title: 'Imparare TypeScript', completed: false },
  { id: 2, title: 'Costruire una Todo list', completed: false }
];

let users: User[] = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' }
];

function addTodo(title: string, metadata?: string | object): Todo {
  const id = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;

  const newTodo: Todo = {
    id,
    title,
    completed: false,
    metadata  
  };

  todos.push(newTodo);

  return newTodo;
}

function updateTodo(id: number, updatedFields: Partial<Todo>): Todo | undefined {
  const todo = todos.find(t => t.id === id);

  if (todo) {
    Object.assign(todo, updatedFields);
    return todo;
  }

  return undefined;
}

const updatedTodo1 = updateTodo(1, { title: 'Imparare TypeScript - Avanzato' });
console.log(updatedTodo1);

const updatedTodo2 = updateTodo(2, { completed: true, metadata: { priority: 'high' } });
console.log(updatedTodo2);

function assignTodoToUser(todoId: number, userId: number): Todo | undefined {
  const todo = todos.find(t => t.id === todoId);

  if (todo) {
    todo.userId = userId;
    return todo;
  }

  return undefined;
}

function getUserTodos(userId: number): Todo[] {
  return todos.filter(todo => todo.userId === userId);
}

const user1Todos = getUserTodos(1); 
const user2Todos = getUserTodos(2); 

console.log('Todo di John Doe:', user1Todos);
console.log('Todo di Jane Smith:', user2Todos);

function error(message: string): never {
  throw new Error(message);
}

try {
  error('Si è verificato un errore!');
} catch (e) {
  console.log(e);
}

console.log(todos);
