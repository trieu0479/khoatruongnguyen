import React from 'react'

import Button from './components/Button'

function StatelessComponent({ count, onClick}) {
  console.log("StatelessComponent: ", {count})
  return (
    <div>
      StatelessComponent {count}

      <Button 
        text="Button StatelessComponent"
        onClick={onClick}
       />
    </div>
  )
}

export default StatelessComponent