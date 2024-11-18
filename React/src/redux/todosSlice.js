import { createSlice } from '@reduxjs/toolkit';

// Crea lo slice dei to-do
const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    status: 'idle', 
    error: null, 
  },
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload; 
    },
    addTodo: (state, action) => {
      state.todos.push(action.payload); 
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload); 
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { setTodos, addTodo, removeTodo, toggleTodo } = todosSlice.actions;

export default todosSlice.reducer;
