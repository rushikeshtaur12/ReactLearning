import React, { useState } from 'react'

const App = () => {
  const score=useState(60)
  return(
    <div>
      {(score>=25)?(<h1> Yes I am Passed</h1>):(<h1>No I am failed</h1>)}
    </div>
  )

 
}

export default App
