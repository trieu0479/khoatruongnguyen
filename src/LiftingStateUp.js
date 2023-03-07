import React from 'react'

import TodoList from './components/TodoList';

function LiftingStateUp() {
  const [todos, setTodos] = React.useState([
    {
      id: 1,
      title: 'todo 1',
      completed: false
    },
    {
      id: 2,
      title: 'todo 2',
      completed: false
    }
  ]); // memory A

  function handleUpdateStatus(event, todoId) {
    const clonedTodos = [...todos]; // memory B
    const todoIndex = todos.findIndex(todo => todo.id === todoId);
    clonedTodos[todoIndex].completed = event.target.checked; 
    console.log('handleUpdateStatus: ', clonedTodos)
    setTodos(clonedTodos); 
  }

  console.log('LiftingStateUp: ', todos)

  return (
    <div>
      <h3>LiftingStateUp</h3>

      <TodoList todos={todos} handleUpdateStatus={handleUpdateStatus} />

    </div>
  )
}

export default LiftingStateUp   