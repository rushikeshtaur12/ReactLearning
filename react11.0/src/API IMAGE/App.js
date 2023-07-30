import React, { useEffect, useState } from 'react'
import Ap from './CSS/Ap.css'
const App = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=32203192-efce0f01a2d536067e1bb0d0c&q=${search}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => setData(data.hits))
  }, [search])

  return (
    <section className='sec'>
      <div className='text'>
     <input className='input' placeholder='search images' onChange={(a) => setSearch(a.target.value)}></input>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
        {data && data.map((items) => {
          return (
            <div key={items.id}>
              <img src={items.webformatURL} alt='' height={items.webformatHeight} width={items.webformatWidth}></img>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default App