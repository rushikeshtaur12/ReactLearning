import React, { useState } from 'react'

const App = () => {
  const[input,setInput]=useState({name:'',email:''})
  function handelChange(e){
    setInput({...input,[e.target.name]:[e.target.value]})

  }
  function  handelsubmit(e){
    e.preventDefault()
    console.log(input)
  }
  return (
    <div>
      <form onSubmit={handelsubmit}>
        <label htmlFor="" >Name:</label>
        <input type="text" value={input.name} onChange={handelChange} name="name" placeholder='Enter Name'/>
        <br/>
        <label htmlFor="" >Email</label>
        <input type="email" name="email" value={input.email} onChange={handelChange} placeholder='Enter Email'/>
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
