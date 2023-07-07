import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super()
    this.state=({msg:'Succesfully',color:'red',bgcolor:'black',count:0})
  }
  clicked(){
    this.setState({msg:'Done'})
  }
  color(){
    this.setState({color:'blue'})
  }
  Bgcolor(){
    this.setState({bgcolor:'silver'})
  }
  count(){
    this.setState({count:this.state.count+1})
  }
  count2(){
    this.setState({count:this.state.count-1})
  }
  render() {
    return (
      <div>
          <h1>{this.state.msg}</h1>
          <h1>Count: </h1>
        <button type="button" onClick={()=>this.clicked()}>click</button>
        <button type="button" onClick={()=>this.count()}>+</button>
        <button type="button" onClick={()=>this.count2}></button>
        <h1 style={{color:`${this.state.color}`,background:`${this.state.bgcolor}`}}>{this.state.msg}</h1>
        <button type="button" onClick={()=>this.clicked()}>click</button>
        <button type="button" onClick={()=>this.color()}>color</button>
        <button type="button" onlick={()=>this.Bgcolor()}>bgcolor</button>




        
      </div>
    )
  }
}
