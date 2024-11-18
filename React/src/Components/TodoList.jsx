import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useTodos } from "../Components/Context/TodoContext";
import { Link } from "react-router-dom";  // Importa Link per la navigazione

const TodoList = () => {
    const { todos, setTodos } = useTodos();  // Usa il contesto
    const [selector, setSelector] = useState("");
    const inputRef = useRef(null);

    // Filtro i to-do in base alla ricerca
    const filtered = useMemo(() => {
        if (!todos) return [];

        const selectorMin = selector.toLowerCase();
        return todos.filter(todo =>
            todo.title && todo.title.toLowerCase().includes(selectorMin)
        );
    }, [todos, selector]);

    const handleInputChange = useCallback((e) => {
        setSelector(e.target.value);
    }, []);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    // Effettua il fetching dei to-do se non sono già stati caricati
    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/todos");
                const data = await response.json();
                setTodos(data);  // Imposta i to-do nel contesto
            } catch (error) {
                console.error("Error fetching todos:", error);
            }
        };

        if (todos.length === 0) {  // Fetch solo se i to-do non sono già nel contesto
            fetchTodos();
        }
    }, [todos.length, setTodos]);

    return (
        <div className="p-2">
            <h1>To Do List</h1>
            <div>
                <input
                    type="text"
                    className="border border-black"
                    placeholder="Cerca to do..."
                    value={selector}
                    onChange={handleInputChange}
                    ref={inputRef}
                />
            </div>
            <div>
                <ul>
                    {filtered.length > 0 ? (
                        filtered.map(todo => (
                            <li key={todo.id}>
                                <Link to={`/todos/${todo.id}`}>{todo.title}</Link> {/* Link ai dettagli */}
                            </li>
                        ))
                    ) : (
                        <li>Nessun to-do trovato</li>
                    )}
                </ul>
            </div>
            <ul>
                {todos && todos.map((todo) => (
                    <li key={todo.id}>
                        <Link to={`/todos/${todo.id}`}>{todo.title}</Link> {/* Link ai dettagli */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
