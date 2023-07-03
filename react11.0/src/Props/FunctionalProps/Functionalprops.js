

import React from 'react'

const Functionalprops = (props) => {
    function clickbtn(){
            document.body.style.background=props.color
    }
  return (
    <div>
      <h1>my name is {props.name} and age is {props.age}</h1>
      <button type="button" onClick={clickbtn}>click me</button>
    </div>
  )
}

export default Functionalprops
