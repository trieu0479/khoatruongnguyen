import React from 'react'

function LifeCycle() {
  const [time, setTime] = React.useState(Date.now());

  React.useLayoutEffect(() => {
    console.log('useLayoutEffect');

     // clean up useLayoutEffect function
    return () => {
      console.log('clean up useLayoutEffect function');
    }
  })

  React.useEffect(() => {
    console.log('useEffect');

    // clean up useEffect function
    return () => {
      console.log('clean up useEffect function');
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