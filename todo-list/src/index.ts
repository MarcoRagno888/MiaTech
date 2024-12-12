import { Todo } from './types';

const myTodo: Todo = {
  id: 1,
  title: 'Imparare TypeScript',
  completed: false
};

console.log(myTodo);

let todos: Todo[] = [];

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