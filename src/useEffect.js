import React from 'react'

function UseEffect() {
  const [todos, setTodos] = React.useState([]);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    console.log('useEffect')
    if(page < 0) return;
    fetch(`https://jsonplaceholder.typicode.com/todos?_limit=10&_page=${page}`)
      .then(response => response.json())
      .then(json => setTodos(json))
    return () => {
      console.log('cleanup function')
    }
  }, [page])

  console.log('==============todos: ', { todos, page })

  return (
    <div>
      Use Effect todos
      {todos.map(todo => (
        <div key={todo.id}>
            Title: {todo.title} <br />
            Completed: {todo.completed ? 'Yes' : 'No'}
        </div>
      ))}

      <br />
      <button type="button" onClick={() => setPage(prevState => prevState - 1)}>Prev</button>
      Pagination:  {page} 
      <button type="button" onClick={() => setPage(prevState => prevState + 1)}>Next</button>
    </div>
  )
}

export default UseEffect