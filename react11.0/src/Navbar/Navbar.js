import React from 'react'
import './Navbar.css'
import { FaFacebook } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";





const Navbar = () => {
  return (
    <div>
         <nav className='main-nav'>
    {/* 1st div for Logo */}
            <div className='Logo'>
             <h1>Help You</h1>
            </div>
    {/* 2nd div for main menu */}
    <div className='main-menu'>
        <ul>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="">About</a>
            </li>
            <li>
                <a href="">Services</a>
            </li>
            <li>
                <a href="">Contact</a>
            </li>
        </ul>
    </div>
    {/* 3rd div for social icons */}

    <div className='social-icons'>
        <ul>
            <li>
                <a href="https://facebook.com">
                    <FaFacebook className='facebook'/>
                </a>
            </li>
            <li>
                <a href="https:/instagram.com">
                    <AiOutlineInstagram className='instagram'/>
                </a>
            </li>
            <li>
                <a href="https:/youtube.com">
                    <AiOutlineYoutube className='youtube'/>
                </a>
            </li>
        </ul>
    </div>


         </nav>


    </div>
  )
}

export default Navbar
