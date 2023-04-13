import React from 'react'

import myStyles from './button.module.css';

const Button = React.forwardRef((props, ref) => {
  const isAuth = true;
  return (
    <>
      <button 
        ref={ref}
        type="button" 
        // className={myStyles.button} 
        className={`buttonABC ${isAuth ? 'isAuth' :''} ${myStyles.button}`}  
        onClick={props.onClick}
      >
        {props.text}
      </button>
    </>
  )
})


export default Button