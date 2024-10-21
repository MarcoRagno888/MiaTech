import { useEffect, useState } from "react";

export const useFilteredTodos = (todos, selector) => {
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => { 
        const selectorMin = selector.toLowerCase();
        const filtered = todos.filter(todo => 
            todo.title && todo.title.toLowerCase().includes(selectorMin)
    );
        
        setFilteredTodos(filtered);
    }, [todos, selector])

    return filteredTodos;
}