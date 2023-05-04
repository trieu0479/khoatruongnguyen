
import React from 'react'

import StatelfulComponents from './StatelfulComponents'

// hooks
import { useResizeWindow } from './hooks/useResizeWindow';

function PageB() {
  const { isSmall } = useResizeWindow();

  function onPageB() {
    console.log("onPageB")
  }

  return (
    <div>
      
      PageB: {isSmall ? 'small' : 'large'}

      <StatelfulComponents onHandle={onPageB}  />


    </div>
  )
}

export default PageB