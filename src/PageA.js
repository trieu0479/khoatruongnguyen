import React from 'react'
import StatelfulComponents from './StatelfulComponents'

// hooks
import { useResizeWindow } from './hooks/useResizeWindow';

function PageA() {
  const { isSmall } = useResizeWindow();

  function onPageA() {
    console.log("onPageA")
  }

  return (
    <div>
      
      PageA

      <h4>Screen Size: {isSmall ? 'small' : 'large'} </h4>

      <StatelfulComponents 
        onHandle={onPageA}
      />



    </div>
  )
}

export default PageA