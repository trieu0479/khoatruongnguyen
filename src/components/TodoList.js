import React from 'react'
import TodoItem from './TodoItem';

function TodoList(props) {
  const { todos, handleUpdateStatus } = props;

  return (
    <div>
      {todos.length > 0 ? (
        <>
          {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} handleUpdateStatus={handleUpdateStatus} />
          ))}
        </>
      ) : (
        <>no todo</>
      )}
    </div>
  )
}

export default TodoList