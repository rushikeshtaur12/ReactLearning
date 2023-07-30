import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {

  const [data,setData]=useState([])

  useEffect (()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>setData(data))
  })

  

  return (
    <div className='container'>
      {data && data.map((items)=>{
        return (
          <div className='cards'>
           <img src={items.image} alt='' height={'200px'} width={'200px'}></img>
           <h3>Id:{items.id}</h3>
           <h3>Name:{items.title}</h3>
           <h3>Price:{items.price}</h3>
           <h3>Category:{items.category}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default App