import ToDoItem from './ToDoItem'

function ToDoList({ todos, onDelete, onToggleComplete, onToggleEdit, onUpdateTodo }) {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <p>No tasks yet. Add a new task to get started!</p>
      </div>
    )
  }

  return (
    <div className="todo-list">
      {todos.map(todo => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
          onToggleEdit={onToggleEdit}
          onUpdateTodo={onUpdateTodo}
        />
      ))}
    </div>
  )
}

export default ToDoList