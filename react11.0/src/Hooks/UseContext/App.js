import React, { useContext } from 'react'
import ChildA from './Hooks/UseContext/ChildA'
const data1=useContext()
const data2=useContext()
const App = () => {
    const name='Rushikesh'
    const age=23
  return (
    <div>
      <data1.provider value={name}>
        <data2.prvider value={age}>

        </data2.prvider>
        </data1.provider>
    </div>
  )
}
export{data1,data2}
export default App
