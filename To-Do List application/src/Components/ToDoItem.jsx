import { useState } from 'react'

function ToDoItem({ todo, onDelete, onToggleComplete, onToggleEdit, onUpdateTodo }) {
  const [editText, setEditText] = useState(todo.text)

  const handleSave = () => {
    if (editText.trim() !== '') {
      onUpdateTodo(todo.id, editText)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSave()
    }
  }

  const handleCancel = () => {
    setEditText(todo.text)
    onToggleEdit(todo.id)
  }

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {todo.isEditing ? (
        <div className="edit-mode">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyPress={handleKeyPress}
            className="edit-input"
            autoFocus
          />
          <button onClick={handleSave} className="save-btn">Save</button>
          <button onClick={handleCancel} className="cancel-btn">Cancel</button>
        </div>
      ) : (
        <div className="view-mode">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggleComplete(todo.id)}
            className="checkbox"
          />
          <span className="todo-text">{todo.text}</span>
          <div className="actions">
            <button 
              onClick={() => onToggleEdit(todo.id)} 
              className="edit-btn"
              disabled={todo.completed}
            >
              Edit
            </button>
            <button 
              onClick={() => onDelete(todo.id)} 
              className="delete-btn"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ToDoItem