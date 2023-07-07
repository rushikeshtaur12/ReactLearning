import React, { useState } from 'react'

const App = () => {
  const[currenValue,setValue]=useState(0)
  const[currentColor,setColor]=useState('')
  return (
    <div>
      <center>
          <h1 style={{color:`${currentColor}`,color:`${currentColor}`}}>Count:{currenValue}</h1>
          <button type="button" onClick={()=>setValue(currenValue+1)}>+</button>        
          <button type="button" onClick={()=>setValue(currenValue-1)}>-</button>
          <button type="button" onClick={()=>setValue(0)}>set Zero</button>
          <br></br>
          <br></br>
          <button type="button" onClick={()=>setColor('yellow')}>Yellow</button>
          <button type="button" onClick={()=>setColor('green')}>Green</button>
        </center>
    </div>
  )
}

export default App