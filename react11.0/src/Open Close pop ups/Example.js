import React, { useState } from 'react'

const App = () => {
    const[open,setOpen]=useState(false)
  return (
    <div>
        <button type="button" onClick={()=>setOpen(!open)}>Open</button>
        {open &&(
            <div>
                <p>Hello</p>
                <button type="button" onClick={()=>setOpen(!open)}>Close</button>
            </div>
        )}
    </div>
  )
}

export default App