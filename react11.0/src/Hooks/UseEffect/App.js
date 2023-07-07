import React, { useEffect, useState } from 'react'

const App = () => {
  const[count,setCount]=useState(0)
useEffect(()=>{
  document.title=`${count}`

},
[count]

)
  return (
    <div>
      <center>
        <h1>Count:{count}</h1>
        <button type="" onClick={()=>setCount(count+1)}>+</button>
        </center>
    </div>
  )
}

export default App