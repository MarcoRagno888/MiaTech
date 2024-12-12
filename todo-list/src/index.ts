import { Todo } from './types';
import { User } from './types';

const myTodo: Todo = {
  id: 1,
  title: 'Imparare TypeScript',
  completed: false
};

console.log(myTodo);

//let todos: Todo[] = [];

function addTodo(title: string): Todo {
    const id = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
  
    const newTodo: Todo = {
      id,
      title,
      completed: false
    };
  
    todos.push(newTodo);
  
    return newTodo;
  }
  
  addTodo('Imparare TypeScript');
  addTodo('Costruire una Todo list');
  
  console.log(todos);

  //---------


const user1: User = {
  id: 1,
  name: 'John Doe'
};

const user2: User = {
  id: 2,
  name: 'Jane Smith',
  email: 'jane.smith@example.com'
};

console.log(user1);
console.log(user2);

//---------

let todos: Todo[] = [
    { id: 1, title: 'Imparare TypeScript', completed: false },
    { id: 2, title: 'Costruire una Todo list', completed: false }
  ];
  
  let users: User[] = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' }
  ];


function assignTodoToUser(todoId: number, userId: number): Todo | undefined {
    const todo = todos.find(t => t.id === todoId);
  
    if (todo) {
      todo.userId = userId;
      return todo;
    }
  
    return undefined;
  }
  
 
  assignTodoToUser(1, 2);
  
  console.log(todos);

function getUserTodos(userId: number): Todo[] {
    return todos.filter(todo => todo.userId === userId);
  }

  const user1Todos = getUserTodos(1); 
  const user2Todos = getUserTodos(2); 
  
  console.log('Todo di John Doe:', user1Todos);
  console.log('Todo di Jane Smith:', user2Todos);