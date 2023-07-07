import React, { useState } from 'react'

const exampleSix = () => {
    const[message,setMessage]=useState('Subscribe')
  return (
    <div>
        <button type="button" onClick={()=>setMessage('Subscribed')}>{message}</button>
    </div>
  )
}

export default exampleSix