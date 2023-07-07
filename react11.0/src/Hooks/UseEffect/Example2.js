import React, { useEffect } from 'react'

const App = () => {
  useEffect(()=>{
    let a=document.getElementById('btn1')
    a.addEventListener('click',()=>{
      document.body.style.background='red'
    })
  })
  return (
    <div>
      <button type="" id='btn1'>click</button>
    </div>
  )
}

export default App