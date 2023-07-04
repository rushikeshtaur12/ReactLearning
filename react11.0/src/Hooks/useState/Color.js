import React, { useState } from 'react'
const App = () => {
  const[count,setCount]=useState(0)
  const[color,setColor]=useState('Red')
  const[bgcolor,setbgColor]=useState('black')
  const[name,setName]=useState('')
  const[phoneNumber,setPhoneNumber]=useState('')
  return (
    <div>
      <center>
      <h1 style={{color:`${color}`,background:`${bgcolor}`}}>Count:{count}</h1>
        <button type="button" onClick={()=>setCount(count+1)}>+</button>
        <button type="button" onClick={()=>setCount(count-1)}>-</button>
        <button type="button" onClick={()=>setCount(0)}>Set Zero</button>
        <br></br>
        <button type="button" onClick={()=>setColor('Blue')}>color</button>
        <button type="button" onClick={()=>setbgColor('Darkorange')}>Bgcolor</button>
        <br></br>
        <input type="text" onChange={(e)=>setName(e.target.value)}></input>
        <h2>My name is {name}</h2>
        



        </center>
    </div>
  )
}

export default App
