import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='header'>
      <div className='header_left'>
        <a href=""  className='menu'><i class="fa-solid fa-bars"></i></a>      {/* menu */}
        <a href="" className='logo'><i class="fa-brands fa-youtube"></i></a>   {/* Logo */}  
      </div>

      <div className='header_middle'>
        <input type="text" className='seachinput' placeholder='Search'></input>
        <a href="" className='search'><i class="fa-solid fa-magnifying-glass"></i></a> {/* Search */}
        <a href="" className='microphone'><i class="fa-solid fa-microphone"></i></a>   {/* Microphone */}
      </div>

      <div className='header_right'>
        <a href="" className='right'><i class="fa-light fa-video-plus"></i></a> {/* video */}
        <a href="" className='right'><i class="fa-regular fa-bell"></i></a>    {/* notification */}
        <a href="" className='right'><i class="fa-solid fa-user"></i></a>    {/*  Profile*/} 
      </div>


    </div>
 )
}

export default Navbar
