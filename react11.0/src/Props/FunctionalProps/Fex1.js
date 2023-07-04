// Functional Componant

import React from 'react'

const Fex1 = (props) => {
    function clickhere(){
        document.body.style.background=props.color;
    }
  return (
    <div>
      <h2>my name is {props.name} age is {props.age}</h2>
      <button type="button" onClick={clickhere}>click</button>
    </div>
  )
}

export default Fex1
