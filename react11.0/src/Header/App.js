import React from 'react'
import Header from './Header/Header'
import Ex from './Header/Ex.js'
import Pagination from './Header/Pagination'
import Footer from './Header/Footer'

const App = () => {
  return (
    <div>
      <Header CompanyName='Eat Safe'/>
      <Ex/>
      <Pagination/>
      <Footer/>
      
    </div>
  )
}

export default App
