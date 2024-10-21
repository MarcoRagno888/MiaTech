import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useFilteredTodos } from "../hooks/useFilteredTodos";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

const TodoList = () => {
    const { data, loading, error } = useFetch(API_URL);

    const [selector, setSelector] = useState("");
    const filtered = useFilteredTodos(data, selector);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>

    return (
        <>
            <div className="p-2">
                <h1>To Do List</h1>
                <div>
                    <input
                        type="text"
                        className="border border-black"
                        placeholder="Cerca to do..."
                        value={selector}
                        onChange={(e) => setSelector(e.target.value)}
                    />
                </div>
                <div>
                    <ul>
                        {filtered.length > 0 ? (
                            filtered.map(todo => (
                                <li key={todo.id}>{todo.title}</li>
                            ))
                        ) : (
                            <li>Nessun to-do trovato</li>
                        )}
                    </ul>
                </div>
                <ul>
                    {
                        data && data.map((todo) => (
                            <li key={todo.id}>{todo.title} {todo.completed ? "✅" : "❌"}</li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default TodoList;