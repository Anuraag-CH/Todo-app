
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
import { useState, useEffect } from 'react'
function App() {

  const [todos, setTodos] = useState([])
  
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'
  
  const refreshTodos = () => {
    fetch(`${API_URL}/todos`)
      .then(response => response.json())
      .then(data => setTodos(data))
      .catch(error => console.error('Error fetching todos:', error))
  }

  useEffect(() => {
    refreshTodos()
  }, [])

  return (
    <div className="app-container">
      <h1 className="app-title">Todo App</h1>
      <CreateTodo onTodoCreated={refreshTodos} />
      <Todos todos={todos} onTodoUpdated={refreshTodos} onTodoDeleted={refreshTodos} />
    </div>
  );
}

export default App;

