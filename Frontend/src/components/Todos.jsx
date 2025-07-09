export function Todos({todos, onTodoUpdated, onTodoDeleted}) {
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

    const onDelete = (todoId) => {
        fetch(`${API_URL}/todos/${todoId}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                onTodoDeleted()
            }
        })
        .catch(error => console.error('Error deleting todo:', error))
    }
    const onUpdate = (todoId, title, description) => {
        fetch(`${API_URL}/todos/${todoId}`, {
            method: 'PUT',
            body: JSON.stringify({title: title, description: description, completed: true}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                onTodoUpdated()
            }
        })
        .catch(error => console.error('Error updating todo:', error))
    }
    return (
        <div className="todos-container">
            <h2 className="todos-title">Your Todos</h2>
            {todos.length === 0 ? (
                <div className="empty-state">No todos yet. Create your first todo above!</div>
            ) : (
                todos.map((todo) => (
                    <div key={todo.todo_id} className="todo-item">
                        <div className="todo-content">
                            <div className="todo-title">{todo.title}</div>
                            <div className="todo-description">{todo.description}</div>
                            <span className={`todo-status ${todo.completed ? 'completed' : 'pending'}`}>
                                {todo.completed ? 'Completed' : 'Pending'}
                            </span>
                        </div>
                        <div className="todo-actions">
                            <button 
                                onClick={() => onUpdate(todo.todo_id, todo.title, todo.description)}
                                className={`complete-button ${todo.completed ? 'completed' : ''}`}
                            >
                                {todo.completed ? "Completed" : "Mark Complete"}
                            </button>
                            <button 
                                onClick={() => onDelete(todo.todo_id)}
                                className="delete-button"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}