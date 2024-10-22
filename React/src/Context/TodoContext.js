import React, { createContext, useContext, useState } from "react";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const addTodo = (todo) => {
        setTodos((prevTodos) => [...prevTodos, todo]);
    }
    const removeTodo = ((index) => {
        setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
    })

    return (
        <>
            <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>
                {children}
            </TodoContext.Provider>
        </>
    )
}

const useTodos = () => { //hook per richiamare il contesto
    return useContext(TodoContext);
}

export default {TodoProvider, useTodos};