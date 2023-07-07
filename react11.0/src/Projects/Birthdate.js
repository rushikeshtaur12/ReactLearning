import React, { useState } from 'react'
// import './Data'
import './Birthdate.css'
import Data from './Data'


const Birthdate = () => {

    const [data,setData]=useState(Data)


  return (

    <div>
      <div className='App'>
      <center><h1>Birthday Reminder is {data.length}</h1></center>
      {/* <center><button onClick={()=>setData([])}>Clear</button></center> */}
      <section>
        <table>
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Image</th>
              <th>Age</th>
              <th>Name</th>
            </tr>
          </thead>
          {data.map((item)=>{
            return(
              <tbody>
                <tr>
                  <td>{item.id}</td>
                  <td><img src={item.Image} height='100px' width={'100px'} alt=''></img></td>
                  <td>{item.age}</td>
                  <td>{item.name}</td>
                </tr>
              </tbody>
              
            )
          })}
          <tfooter>
                  <center>
                    <button onClick={()=>setData([])}>Clear</button>
                    </center>

          </tfooter>
            
        </table>
        
      </section>
      
      </div>

    </div>
    
  )
}

export default Birthdate
