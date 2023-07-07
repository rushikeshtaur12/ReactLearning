import React, { useState } from 'react'

const App = () => {
  const[currentName,setName]=useState('')
  const[currentCity,setCity]=useState('')
  const[currentContact,setContact]=useState('')
  const [gender, setGender] = useState('');


  const handleName=(e)=>{
    setName(e.target.value);
  }
  const handelCity=(event)=>{
    setCity(event.target.value)
  }
  const handelContact=(event)=>{
    setContact(event.target.value)
  }

  return (
    <div>
      <center>
        <br/>
        <br/>
        <input type="text" placeholder='Enter Name'onChange={handleName}/>
        <br/>
        <br/>
        <input type='text' placeholder='Enter City Name' onChange={handelCity}/>
        <br/>
        <br/>
        <input type='text' placeholder='Enter Contact Number' onChange={handelContact}/>
        <br/>
        <br/>

          <p>Please select your Gender:</p>
          <input type="radio" checked={gender === 'Male'} value="Male" onClick={() => setGender('Male')}/>
          <label for="male">Male</label>
          <input type="radio" label="Female" checked={gender === 'Female'} value="Female" onClick={() => setGender('Female')}/>
          <label for="female">Female</label>
        <br/>
        <br/>
        <button type="button" >Add</button>
        <br/>
        <br/>
        <h3>Name   is:{currentName} </h3>
        <h3>City   is: {currentCity}</h3>
        <h3>Number is: {currentContact}</h3>
        <h3>Gender is : {gender}</h3>
       
      </center>
    </div>
  )
}

export default App