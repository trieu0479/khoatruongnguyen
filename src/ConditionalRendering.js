import React from 'react'

import ButtonLogin from './components/ButtonLogin';
import ButtonLogout from './components/ButtonLogout';

// context
import { useAppContext } from './context/AppContext';

function ConditionalRendering() {
  const todos = [];
  const [isAuth, setIsAuth] = React.useState(false);
  const { products } = useAppContext();

  console.log('ConditionalRendering render: ', { products })

  let renderButton = null;
  if(isAuth) {
    renderButton = <ButtonLogout />
  } else {
    renderButton = <ButtonLogin />
  }

  function handleLogin() {
    setIsAuth(prevState => !prevState)
  }

  return (
    <div>
      <h2>ConditionalRendering</h2>
      {todos.length > 0 && <div>todo</div>}

      {todos.length > 0 ? <div>has data</div> : <div>no data</div>}

      {todos.length > 1 ? "truong" 
        : todos.length > 3 ? "trieu" 
        : todos.length > 5 ? "minh" 
        : "ngoc"
      }
      
      <button type="button" onClick={handleLogin}>Login</button>
      {renderButton}
    </div>
  )
}

export default React.memo(ConditionalRendering);