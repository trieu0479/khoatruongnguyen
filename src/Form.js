import React from 'react'

function Form() {
  const [form, setForm] = React.useState({});
  const [errorLastName, setErrorLastName] = React.useState('');

  function handleSubmit() {
    console.log('submit: ', {  form })
  }

  function handleForm(event)   {
    const { value, name } = event.target;
    
    if(name === 'lastName') {
      if(value === 'truong') {
        setErrorLastName('LastName is required')
      } else {
        setErrorLastName('');
      }
    } 
    
    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  return (
    <div>
      <h2>Form</h2>
      {errorLastName !== '' && <p>{errorLastName}</p>}
      <br />
      FirstName: <input type="text" value={form.firstName} name="firstName" onChange={handleForm} /> <br />
      LastName: <input type="text" value={form.lastName} name="lastName" onChange={handleForm} /> <br />
      Gender: 
      <select value={form.gender} name="gender" onChange={handleForm}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <button  type="button" onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Form