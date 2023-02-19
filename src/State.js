import React from 'react'
import Button from './components/Button';

function State() {
  const [firstName, setFirstName] = React.useState('John'); // 
  const [lastName, setLastName] = React.useState('Doe');
  const [fullName, setFullName] = React.useState('John Doe');
  const [user, setUser] = React.useState({
    user1: 'Trieu',
    user2: 'Hieu'
  }); // memory A

  const [messageObject, setMessageObject] = React.useState({
    message: {
      id: '',
      text: '',
    },
    author: {
      firstName: '',
      lastName: '',
      book: {
        title: '',
        price: '',
      }
    }
  }) // memory A

  function onChangeInformation() {
    setFirstName('tony');
    setLastName('nguyen');
    setFullName('tony nguyen');
  }

  function onChangeUser() {
    // const newObject  = {
    //   user1: 'Linh',
    //   user2: 'Tai'
    // } 

    const newObject = {...user};  // memory B
    setUser(newObject) 
  }

  function onChangeMessage(event) {
    const newMessageObject = {
      message: {
        ...messageObject.message, // copy prorerty message
        text: event.target.value,
      },
      author: {
        ...messageObject.author, // copy prorerty author
      }
    } // memory B (work)
    // messageObject.text = event.target.value; // don't work
    setMessageObject(newMessageObject) // don't work
  }


  console.log('Merge Object & Replace Object: ', messageObject)

  return (
    <div>
      <h2>State</h2>

      firstName: {firstName} <br/>
      lastName: {lastName} <br/>
      fullName: {fullName} <br/>

      <Button 
        text="Change information"
        onClick={onChangeInformation}
      />

      <Button 
        text="Change user"
        onClick={onChangeUser}
      />

      <h5> Replace Object & Merge Object</h5>
      Message Text: {messageObject.message.text} <br />
      <input type="text" value={messageObject.message.text} onChange={onChangeMessage} />
    </div>
  )
}

export default State