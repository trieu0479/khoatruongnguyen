import React from 'react'

function List() {
  const todoStyle = {
    color: '#f00',
    backgroundColor: '#000',
  }

  const [todos, setTodos] = React.useState([
    {
      id: 1,
      text: 'Learn React',
    },
    {
      id: 2,
      text: 'Learn Firebase',
    }
  ])
  

  return (
    <div>
      <h2>List</h2>
      {todos.length > 0 ? (
        <>  
          {todos.map(todo => (
            <div key={todo.id} style={todoStyle}>{todo.text}</div>
          ))}
        </>
      ) : (
        <div>no data</div>
      )}
    </div>
  )
}

export default List