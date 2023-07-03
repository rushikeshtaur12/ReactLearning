import React from 'react'
import './Navbar.css'
import { CiMenuBurger } from "react-icons/ci";
import { BsYoutube } from "react-icons/bs";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";




const Navbar = () => {
  return (
    <div className='main-div'>
        <nav className='main-nav'>
{/* 1st div for left part of nav bar */}
          <div className='left-div'>
            <ul className='left-ul'>
              <li>
                <CiMenuBurger className='menu-bar-icon'/>
              </li>
              <li>
                <BsYoutube className='youtube-logo'/>
              </li>
            </ul>
          </div>
{/* 2nd div for middle part   */}
      <div className='middle-div'>
        <input type="text" placeholder='Search' className='input-bar'></input>
        {/* <p>micephone</p>   */}
      </div>
{/* 3rd div for right part   */}
      <div className='right-div'>
        <ul className='right-ul'>
          <li>
            <RiVideoAddLine/>
          </li>
          <li>
            <IoMdNotificationsOutline/>
          </li>
          <li>
            <CgProfile/>
          </li>
        </ul>
        
      </div>
        </nav>
    </div>
  )
  }
export default Navbar
