import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { setTodos, toggleTodo, removeTodo } from '../redux/todosSlice'; 

const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.todos); 
    const [selector, setSelector] = useState('');
    const inputRef = useRef(null);

    const filtered = useMemo(() => {
        const selectorMin = selector.toLowerCase();
        return todos.filter((todo) => todo.title && todo.title.toLowerCase().includes(selectorMin));
    }, [todos, selector]);

    const handleInputChange = useCallback((e) => {
        setSelector(e.target.value);
    }, []);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos');
                const data = await response.json();
                dispatch(setTodos(data)); 
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        };

        if (todos.length === 0) { 
            fetchTodos();
        }
    }, [dispatch, todos]);

    const handleToggle = (id) => {
        dispatch(toggleTodo(id)); 
    };

    const handleRemove = (id) => {
        dispatch(removeTodo(id)); 
    };

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
                        filtered.map((todo) => (
                            <li key={todo.id}>
                                <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
                                <button onClick={() => handleToggle(todo.id)}>
                                    {todo.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
                                </button>
                                <button onClick={() => handleRemove(todo.id)}>Remove</button>
                            </li>
                        ))
                    ) : (
                        <li>Nessun to-do trovato</li>
                    )}
                </ul>
            </div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
                        <button onClick={() => handleToggle(todo.id)}>
                            {todo.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
                        </button>
                        <button onClick={() => handleRemove(todo.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
