import React from 'react';
import Button from './components/Button';

function Refs() {
  const [, setSession] = React.useState(false);
  let sessionRef = React.useRef(false);
  const inputRef = React.useRef(null);
  const buttonRef = React.useRef(null);
  let keepRef = React.useRef(1); 
  let functionRef = React.useRef(() => { console.log('test')}) // can storage function or react component
  let abc = 1;

  React.useEffect(() => {
    buttonRef.current.style.backgroundColor = '#f00'
    inputRef.current.focus();
    keepRef.current = keepRef.current + 3;
  },[])
  
  return (
    <div>
      <h2>Refs</h2> <br />
      <input ref={inputRef} type="text" id="inputFile" />
      <button 
        type="button"
        onClick={() => {
          setSession(true);
          abc = abc + 1;
          keepRef.current = keepRef.current + 1;
          sessionRef.current = true;
          inputRef.current.focus();
        }}
      >
        Update Session
      </button>
      {sessionRef.current ? 'yes' : 'none'}

      <h3>Forward Ref</h3>
      <Button 
        ref={buttonRef}
        text="Forward Ref"
      />
    </div>
  )
}

export default Refs