import React, { useState } from 'react'
import Ap from './CSS/Ap.css'
const App = () => {

  const api ={
    key: "b5c0e3eef416df60d3312256c57bd976",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  const [weather,setWeather]=useState({})
  const [city,setCity]=useState('')

  function search() {
    fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
    .then(res=>res.json())
    .then(data=>setWeather(data))
  }

  return (
    <div className='sec'>
      <section className='sec2'>        
        <center>
        <input type='text' placeholder='Enter your city' onChange={(a)=>setCity(a.target.value)}></input><br></br>
        <button onClick={search}>Search</button>
        </center>
        <img src='' alt=''></img>
        <center>
        {(typeof weather.main!=="undefined")?(<div className='cards'>
         <p>Cityname:<b>{weather.name}</b></p>
         <p>Temp:<b>{weather.main.temp}</b></p>
         <p>Clouds/Rain:<b>{weather.weather[0].main}</b></p>
         <p>Description:<b>{weather.weather[0].description}</b></p>
         <p>Country:<b>{weather.sys.country}</b></p>
        </div>):("Not found")}
        </center>
      </section>
    </div>
  )
}

export default App