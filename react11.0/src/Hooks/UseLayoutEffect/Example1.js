import React, { useLayoutEffect, useState } from 'react'

const App = () => {
  const[name,setName]=useState('')
  useLayoutEffect(()=>{
    document.title=`${name}`
  },[name]
  )
  return (
    <div>
      <input type='text' onChange={(e)=>setName(e.target.value)}/>
      <h1>My name is :{name}</h1>
    </div>
  )
}

export default App