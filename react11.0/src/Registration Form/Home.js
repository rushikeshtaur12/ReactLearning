import React, { useState } from 'react'

const Home = () => {
    const [input,setInput]=useState({firstname:'',lastname:'',email:'',contact:'',password:'',})
   function handelchange(e){
    setInput({...input,[e.target.name]:[e.target.value]})
   }
   function handelsubmit(e){
    e.preventDefault()
     console.log(input)
   }

  return (
    <div className='container'>
      <form onSubmit={handelsubmit}>
        <label htmlFor="">First Name: </label>
        <input type="text"  name='firstname' value={input.firstname} onChange={handelchange} />
        <br/>
        <label htmlFor="">Last Name: </label>
        <input type="text" name="lastname" value={input.lastname} onChange={handelchange}/>
        <br/>
        <label htmlFor="">Email: </label>
        <input type="email" name="email" value={input.email} onChange={handelchange}/>
        <br/>
        <label htmlFor="">contact: </label>
        <input type="text" name="contact" value={input.contact} onChange={handelchange}/>
        <br/>
        <label htmlFor="">Password: </label>
        <input type="password" name="password" value={input.password} onChange={handelchange}/>
        <br/>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Home
