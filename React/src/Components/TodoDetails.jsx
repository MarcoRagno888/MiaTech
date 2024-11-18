import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";  // Importa useParams
import { useTodos } from "../Components/Context/TodoContext";  // Importa il contesto

const TodoDetail = () => {
    const { id } = useParams();  // Ottieni l'ID dalla URL
    const { todos } = useTodos();  // Ottieni i to-do dal contesto
    const [todo, setTodo] = useState(null);

    // Trova il to-do corrispondente all'ID
    useEffect(() => {
        if (todos.length > 0) {
            const todoDetail = todos.find(todo => todo.id === parseInt(id));  // Trova il to-do in base all'ID
            setTodo(todoDetail);
        }
    }, [id, todos]);

    if (!todo) return <p>Loading...</p>;  // Mostra un caricamento finché il to-do non è trovato

    return (
        <div className="todo-detail">
            <h1>Dettagli del To-Do</h1>
            <h2>{todo.title}</h2>
            <p><strong>ID:</strong> {todo.id}</p>
            <p><strong>Completato:</strong> {todo.completed ? "✅" : "❌"}</p>
            <p>{todo.description || "Nessuna descrizione disponibile."}</p>
        </div>
    );
};

export default TodoDetail;
