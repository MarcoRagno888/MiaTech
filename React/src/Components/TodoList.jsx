import { useFetch } from "../hooks/useFetch";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

const TodoList = () => {
    const { data, loading, error } = useFetch(API_URL);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>

    return (
        <>
            <div className="p-2">
                <h1>To Do List</h1>
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