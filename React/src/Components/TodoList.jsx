import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTodos, toggleTodo } from "../redux/todosSlice";  
import { Link } from "react-router-dom"; 
import { useSearchParams } from "react-router-dom"; 

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos); 
  const [searchParams, setSearchParams] = useSearchParams(); 
  const [selector, setSelector] = useState(searchParams.get("search") || "");  
  const filteredTodos = useMemo(() => {
    if (!todos) return [];

    const selectorMin = selector.toLowerCase();
    return todos.filter((todo) =>
      todo.title && todo.title.toLowerCase().includes(selectorMin)
    );
  }, [todos, selector]);

  const handleInputChange = (e) => {
    setSelector(e.target.value); 
  };

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await response.json();
        dispatch(setTodos(data));  
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    if (todos.length === 0) {
      fetchTodos(); 
    }
  }, [dispatch, todos.length]);

  useEffect(() => {
    if (selector) {
      setSearchParams({ search: selector });  
    } else {
      setSearchParams({});  
    }
  }, [selector, setSearchParams]);

  const handleToggle = (id) => {
    dispatch(toggleTodo(id)); 
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
        />
      </div>
      <div>
        <ul>
          {filteredTodos.length > 0 ? (
            filteredTodos.map((todo) => (
              <li key={todo.id}>
                <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
                <button
                  onClick={() => handleToggle(todo.id)}
                  style={{ color: todo.completed ? 'green' : 'red' }}
                >
                  {todo.completed ? 'Completato' : 'Non Completato'}
                </button>
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
            <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
            <button
              onClick={() => handleToggle(todo.id)}
              style={{ color: todo.completed ? 'green' : 'red' }}
            >
              {todo.completed ? 'Completato' : 'Non Completato'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
