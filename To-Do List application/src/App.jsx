import { useState } from 'react'
import Header from './Components/Header'
import ToDoList from './Components/ToDoList'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

 // Add new todo
  const addTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
        isEditing: false
      }
      setTodos([...todos, newTodo])
      setInputValue('')
    }
  }

    // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

    // Toggle completed status
  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

    // Toggle edit mode
  const toggleEdit = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
    ))
  }

    // Update todo text
  const updateTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText, isEditing: false } : todo
    ))
  }
  // Handle input key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  return (
    <div className="app">
      <Header />
      <div className="container">
        <div className="input-section">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter a new task..."
            className="todo-input"
          />
          <button onClick={addTodo} className="add-btn">
            Add Task
          </button>
        </div>
        
        <ToDoList
          todos={todos}
          onDelete={deleteTodo}
          onToggleComplete={toggleComplete}
          onToggleEdit={toggleEdit}
          onUpdateTodo={updateTodo}
        />
        
        {todos.length > 0 && (
          <div className="stats">
            <p>Total tasks: {todos.length}</p>
            <p>Completed: {todos.filter(todo => todo.completed).length}</p>
            <p>Pending: {todos.filter(todo => !todo.completed).length}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App