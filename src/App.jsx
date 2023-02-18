import React, { Component } from 'react'
import ProfileComponent from './ProfileComponent'
import profilepic from './assets/profilepicture.jpg'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      person:{fullName:'user',
            bio:'bio',
            imgSrc:profilepic,
            profession:'profession'
            },
      shows : false,
      counter:0
  }}
  
  updateState=(value)=>{
    this.setState({counter:value+1})
  }

  

  render() {
    return (
      <div style={{marginLeft:'40vw', marginRight:'40vw', border: '3px solid green' , display:'flex', flexDirection:'column', alignItems:'center'}}>
        {this.state.counter}
        <button onClick={()=>this.setState({shows:!this.state.shows})} style={{border:'1px solid black'}} >Show/Hide</button>
        {this.state.shows? (<ProfileComponent data={this.state.person} updateState={this.updateState} counter={this.state.counter} ><img style={{height:'100px', width:'100px', borderRadius:'50px'}} src={this.state.person.imgSrc} /></ProfileComponent>):null}
      </div>
    )
  }
}
