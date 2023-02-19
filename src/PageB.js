
import React from 'react'

import StatelfulComponents from './StatelfulComponents'

function PageB() {

  function onPageB() {
    console.log("onPageB")
  }

  return (
    <div>
      
      PageB

      <StatelfulComponents onHandle={onPageB}  />


    </div>
  )
}

export default PageB