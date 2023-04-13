import React from 'react';
import Button from './components/Button';

function Refs() {
  const [, setSession] = React.useState(false);
  let sessionRef = React.useRef(false);
  const inputRef = React.useRef(null);
  const buttonRef = React.useRef(null);
  const [forceRender, setfForceRender] = React.useState(Date.now());

  React.useEffect(() => {
    inputRef.current.focus();
    buttonRef.current.style.backgroundColor = '#f00'
  },[])

  const functionTest = (numb) => () => {
    console.log('functionTest: ', numb)
  }

  console.log('render refs: ')
  
  return (
    <div key={forceRender}>
      <h2>Refs</h2> <br />
      <input ref={inputRef} type="text" />
      <button 
        type="button"
        onClick={() => {
          setSession(true);
          sessionRef.current = true;
          inputRef.current.focus();
          setfForceRender(Date.now())
        }}
      >
        Update Session
      </button>
      {sessionRef.current ? 'yes' : 'none'}

      <h3>Forward Ref</h3>
      <Button 
        ref={buttonRef}
        text="Forward Ref"
        onClick={functionTest(10)}
        // onClick={() => {
        //   functionTest(10)
        // }}
      />
    </div>
  )
}

export default Refs