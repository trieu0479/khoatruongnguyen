import React from 'react'
import StatelfulComponents from './StatelfulComponents'

function PageA() {

  function onPageA() {
    console.log("onPageA")
  }

  return (
    <div>
      
      PageA

      <StatelfulComponents 
        onHandle={onPageA}
      />



    </div>
  )
}

export default PageA