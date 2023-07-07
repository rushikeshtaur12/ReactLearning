import React from 'react'
import './Footer.css'
import { GrFacebook } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";

AiFillHeart


const Footer = () => {
  return (
    <div className='footermaindiv'>
     <div className='headingone'>
        <ul>
        <li className='lione'><h1>JOIN OUR EAT WELL,BE WELL
            CULTURE.</h1>
        </li>
        <li className='litwo'>stay up to-date with our new opening,
            upcoming events,sesonal specials and promotions
        </li>
        </ul>
       
     </div>


     {/* Logo */}
     <div className='footerlogo'>
        <ul className='socialmedialogo'>
           <li><GrFacebook id='facebbok'/></li> 
           <li><BsInstagram id='instagram'/></li>
           <li><BsTwitter id='twiter'/></li>
        </ul>

        <ul className='footermenus'>
            <li>Home</li>
            <li>Menu</li>
            <li>Story</li>
            <li>Detox</li>
            <li>Location</li>
        </ul>

        <ul className='footerbars'>
            <li>Contact  | </li>
            <li>Blog  | </li>
            <li>Delivery | </li>

        </ul>
        </div>

        <div className='mainfooter'>
            <h4>HEALTHY FAST CASUAL FOOD ,CRAFTED WITH <AiFillHeart id='love'/> IN EAT SAFE</h4>
            
        </div>
        
    




    </div>
  )
}

export default Footer