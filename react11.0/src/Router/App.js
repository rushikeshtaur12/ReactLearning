import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './Router/Home'
import About from './Router/About'
import Contact from './Router/Contact'
import Navbar from './Router/Navbar'

const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>

     <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='*' element={<h1>404 Error</h1>}/>



        </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
