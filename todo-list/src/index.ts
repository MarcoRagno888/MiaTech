import { PartialTodo, Project, Todo, TodoStatus } from './types';
import { User } from './types';
import { User, User } from './User';

/*let users: User[] = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' }
];*/

function addTodo(title: string, metadata?: string | object): Todo {
  const id = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;

  const newTodo: Todo = {
    id,
    title,
    completed: false,
    status: TodoStatus.Pending, 
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

function getTodoSummary(todo: Todo): [string, boolean] {
  return [todo.title, todo.completed];
}

function createProject(id: number, name: string, users: User[], todos: Todo[]): Project {
  return {
    id,
    name,
    users,
    todos
  };
}

let todos: Todo[] = [
  { id: 1, title: 'Imparare TypeScript', completed: false, status: TodoStatus.Pending },
  { id: 2, title: 'Costruire una Todo list', completed: true, status: TodoStatus.Completed }
];

function updateTodoStatus(todoId: number, status: TodoStatus): Todo | undefined {
  const todo = todos.find(t => t.id === todoId);

  if (todo) {
    todo.status = status;  
    return todo;
  }

  return undefined; 
}

console.log(todos);

//-------------

const user1 = new User(1, 'John Doe');
const user2 = new User(2, 'Jane Smith', 'jane.smith@example.com');


const todo1: Todo = {
  id: 1,
  title: 'Imparare TypeScript',
  completed: false,
  status: TodoStatus.Pending
};

const todo2: Todo = {
  id: 2,
  title: 'Costruire una Todo list',
  completed: false,
  status: TodoStatus.Pending
};

const todo3: Todo = {
  id: 3,
  title: 'Imparare TypeScript Avanzato',
  completed: false,
  status: TodoStatus.Pending
};

user1.addTodo(todo1);
user1.addTodo(todo2);
user2.addTodo(todo3);

console.log('Todo di John Doe:', user1.todos);
console.log('Todo di Jane Smith:', user2.todos);

//--------

function updatePartialTodo(todoId: number, partialTodo: PartialTodo): Todo | undefined {
  const todo = todos.find(t => t.id === todoId);

  if (todo) {
    Object.assign(todo, partialTodo);
    return todo;
  }

  return undefined;
}
