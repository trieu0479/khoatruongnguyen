import React from 'react'

import Button from './components/Button';


function createCount() {
  return 0;
}

// initial state
const initialState = {
  count: createCount(),
  isLoading: false,
  isError: false
}

// reducer\
function reducer(state = initialState, { type, payload}) {
  switch(type) {
    case 'RESET_NUMBER':
      return {
        ...state,
        count: 0
      }
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + payload
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - payload
      }
    case 'SHOW_LOADING':
      return {
        ...state,
        isLoading: true
      }
    case 'HIDE_LOADING':
      return {
        ...state,
        isLoading: false
      }
    case 'SET_ERROR':
      return {
        ...state,
        isError: payload
      }
    default:
      return state;
  }
}

function UseState() {
  const [{ count, isLoading, isError}, dispatch] = React.useReducer(reducer, initialState);
  

  function handlePreviousState() {
    dispatch({
      type: 'SHOW_LOADING',
    })
  
    setTimeout(() => {
      dispatch({
        type: 'INCREMENT',
        payload: 10
      })
      dispatch({
        type: 'HIDE_LOADING',
      })
    }, 3000)

  }

  function handleUpdaterFunction() {
  }

  function handleResetNumber() {
    dispatch({
      type: 'RESET_NUMBER',
    })
  }

  if(isLoading) return <div>Loading...</div>

  if(isError) return <div>This is error</div>

  return (
    <div>
      <h2>
        UseState {count}

        <br />
        
        <Button 
          text="Test Previous State" 
          onClick={handlePreviousState} 
        />

        <Button 
          text="Test Updater Function" 
          onClick={handleUpdaterFunction} 
        />

        <Button 
          text="Reset Number" 
          onClick={handleResetNumber} 
        />
        
        

      </h2>
    </div>
  )
}

export default UseState