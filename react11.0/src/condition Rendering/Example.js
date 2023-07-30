import React, { useState } from 'react'

const App = () => {
  const [score]=useState(37)
  if(score>35){
    return(
      <div>
        <h1>I am Passed</h1>
      </div>
    )
  }
  else{
    return(
      <div>
        <h1>I am failed</h1>
      </div>
    )
  }

}

export default App
