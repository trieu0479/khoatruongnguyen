import React from 'react'

function HandleEvent() {
  // render jsx with function
  // function renderForm() {
  //   // something
  //   return (
  //     <form>
  //       FirstName: <input type="text" /> <br />
  //       LastName: <input type="text" /> <br />
  //       <button type="button" onClick={handleAddTodo}>Submit</button>
  //     </form>
  //   )
  // }

  function handleAddTodo(e, todoItem) {
    e.preventDefault();
    console.log("handleAddTodo", e, todoItem)
  } // memory A

  // traditional function
  function sum(a, b) {
    return function(c) {
      return function (d) {
        return a + b + c + d
      }
    }
  }

  // arrow function
  // const sum = (a, b) => c => d => a + b + c + d
  const res = sum(1, 3)(2)(4); // => 10

  console.log('sum: ', res)

  // sum(1, 2) => 3

  // render jsx with variable
  const renderForm = (
    <form onSubmit={(e) => handleAddTodo(e, "truong")}>
      FirstName: <input type="text" /> <br />
      LastName: <input type="text" /> <br />
      <button type="submit">Search</button>
    </form>
  )

  return (
    <div>
      <h2>HandleEvent</h2>

      {renderForm}


    </div>
  )
}

export default HandleEvent
