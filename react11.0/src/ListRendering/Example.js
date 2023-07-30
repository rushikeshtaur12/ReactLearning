import React from 'react'

const App = () => {
  const name=['Rushikesh','sagar','vinay']
  return (
    <div>
      {name.map((item)=><h1>{item}</h1>)}
    </div>
  )
}

export default App
