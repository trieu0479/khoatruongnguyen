import React from 'react'
import Button from './components/Button';

function StatelfulComponents({ onHandle }) {
  // boolean, string, array, object, number, function, Symbol ES6, null, underfined
  const [todos, setTodos]  = React.useState([]); // local state of StatefulComponent

  console.log('statelfulComponents: ', {todos})

  function onAddTodo() {
    setTodos([...todos, 'todo']);
    onHandle();
  }

  return (
    <div>
      StatelfulComponents <br/> 
      Show todo list: {todos}

      <Button text="Add Todo" onClick={onAddTodo} /> <br/>

    </div>
  )
}

export default StatelfulComponents