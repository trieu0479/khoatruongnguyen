import React from 'react'

function LifeCycle() {
  const [time, setTime] = React.useState(Date.now());



  React.useEffect(() => {
    console.log('useEffect 2');

    // clean up useEffect function
    return () => {
      console.log('clean up useEffect function');
    }
  })
  

  React.useEffect(() => {
    console.log('useEffect 1');

    // clean up useEffect function
    return () => {
      console.log('clean up useEffect function');
    }
  })


  React.useLayoutEffect(() => {
    console.log('useLayoutEffect');

     // clean up useLayoutEffect function
    return () => {
      console.log('clean up useLayoutEffect function');
    }
  })



  console.log('render');


  // render
  return (
    <div>
      LifeCycle
        {time}
      <button type="button" onClick={() => setTime(Date.now())}>test lifycle</button>
    </div>
  )
}

export default LifeCycle