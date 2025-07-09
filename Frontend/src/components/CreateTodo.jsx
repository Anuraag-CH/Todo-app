import { useState } from 'react'

export  function CreateTodo({ onTodoCreated }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'
  
  const handleCreateTodo = () => {
    fetch(`${API_URL}/todos`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({title: title, description: description, completed: false}),
    })
    .then(response => {
      if (response.ok) {
        setTitle('')
        setDescription('')
        onTodoCreated()
      }
    })
    .catch(error => console.error('Error creating todo:', error))
  }
  return (
    <div className="create-todo-container">
      <h2 className="create-todo-title">Add New Todo</h2>
      <div className="input-group">
        <input 
          type="text" 
          placeholder="Enter todo title..." 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
          className="input-field"
        />
        <input 
          type="text" 
          placeholder="Enter description..." 
          value={description} 
          onChange={(e) => setDescription(e.target.value)}
          className="input-field"
        />
        <button onClick={handleCreateTodo} className="add-button">Add Todo</button>
      </div>
    </div>
  );
}