import React, { useEffect, useState } from 'react'

const App = () => {
  const[data,setdata]=useState([])
  const[search,setSearch]=useState('')

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setdata(data))
    console.log(data)
  })
  return (
    <div>
     <center> <input type="text" placeholder='Search' onChange={(e)=>setSearch(e.target.value)}/></center>
     <center>
      {data && data.filter((item)=>item.name.toLowerCase().includes(search)).map((item)=>{
        return(
          <div key={item.name}>
            <h1>{item.id}</h1>
        <p>{item.name}</p>
        
        </div>
        )
      })}
     </center>
    </div>
  )
}

export default App