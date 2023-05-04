import React from 'react'
import { createPortal } from 'react-dom';
import Button from './components/Button';

function Portal() {
  const [isOpenModal, setIsOpenModal] = React.useState(false);

  return (
    <div>
      <h2>Portal React</h2>
      <Button 
        text="Open Modal"
        onClick={() => setIsOpenModal(true)}
      />
      {isOpenModal && (
        <React.Fragment>
          {createPortal(
            <p>This child is placed in the document body.</p>,
            document.body
          )}
        </React.Fragment>
      )}
   
    </div>
  )
}

export default Portal