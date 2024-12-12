export interface Todo {
    id: number;
    title: string;
    completed: boolean;
  }

  export interface User {
    id: number;
    name: string;
    email?: string; // email è opzionale
  }