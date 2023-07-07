import React, {useLayoutEffect, useState } from 'react'
import './Ex.css'
import './Header'
import './Footer'
const Ex = (props) => {
    const[quality,setQuality]=useState(0)
    const[price,setPrice]=useState(0)
    const[discount,setDiscount]=useState(0)
    

    useLayoutEffect(()=>{
        let a=document.getElementById('btn1')
        a.addEventListener('click',()=>{
            let body=document.body
            let main=document.createElement('main')
            main.innerHTML += `<h1 id='head'>Thank You for visiting have Fun</h1>`
            body.appendChild(main)
        })
    })
    // const
  return (
    <div>
        <center>
        <img className='im' src="https://media.istockphoto.com/id/576730586/photo/red-bucket-of-fried-chicken-on-white-background-2.jpg?s=612x612&w=0&k=20&c=dlsGzoEkP0EUtB4KkEBc3Q9hF5_KwDX_279hMSJN8l4=" alt="Not found"/>
        <section>
        <h5>KFC BUCKET</h5>
{/* Quality  */}
        <div className='Quality'>
            <button type="" onClick={()=>setQuality(quality+1)}>+</button>
            <h6>Quality: {quality}</h6>
            <button type="" onClick={()=>setQuality(quality-1)}>-</button>
            {/* <button type="" onClick={()=>setQuality(0)}>set Zero</button> */}
        </div>
{/* price */}
        <div className='price'>
            <h6>Price:{price} </h6>
            <button type="" id='QualityPrice' onClick={()=>setPrice(quality*100)}>price</button>
        </div>
{/* Discount  */}
        <div className='Discount'>
            <h6>Discount 2%=={discount} </h6>
            <button type="" onClick={()=>setDiscount(price-(price*0.02))}>Discount</button>
        </div>

{/* Card Button   */}
        <div>
            <button type="" id='btn1'>Add</button>
        </div>
        </section>
        
        </center>
<h1>{props.CompanyName}</h1>

    </div>
  )
}

export default Ex