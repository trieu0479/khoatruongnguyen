import React from 'react'

function TodoItem({ todo, handleUpdateStatus }) {
  return (
    <div className={`${todo.completed ? 'text-line-through' : ''}`}>
      Title: {todo.title}

      <input type="checkbox" onChange={event => handleUpdateStatus(event, todo.id)}/> 
    </div>
  )
}

export default TodoItem