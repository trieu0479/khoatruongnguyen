import React from 'react'

import myStyles from './button.module.css';

function Button(props) {
  const isAuth = true;
  return (
    <>
      <button 
        type="button" 
        // className={myStyles.button} 
        className={`buttonABC ${isAuth ? 'isAuth' :''} ${myStyles.button}`}  
        onClick={props.onClick}
      >
        {props.text}
      </button>
    </>
  )
}

export default Button