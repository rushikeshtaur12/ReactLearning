import React, { useState } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";

const App = () => {
const[count,setCount]=useState(0)
return (
  <div>
    <AiOutlineShoppingCart/>
      <h1>Count:{count}</h1>
      <button type="button" onClick={()=>setCount(count+1)}>+</button>
      <button type="button" onClick={()=>setCount(count-1)}>-</button>
      <button type="button" onClick={()=>setCount(0)}>Set Zero</button>
  </div>
)
}

export default App
