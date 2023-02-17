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
      counter : 0,
  }}

  componentDidMount(){
    this.timer=setInterval(()=>this.setState({counter:this.state.counter+1}), 1000)
  }


  componentWillUnmount(){
    clearInterval(this.timer)
  }

  render() {
    return (
      <div style={{marginLeft:'40vw', marginRight:'40vw', border: '3px solid green' , display:'flex', flexDirection:'column', alignItems:'center'}}>
        <h1>{this.state.counter}</h1>
        <button onClick={()=>this.setState({shows:!this.state.shows})} style={{border:'1px solid black'}} >Show/Hide</button>
        {this.state.shows? (<ProfileComponent data={this.state.person} ><img style={{height:'100px', width:'100px', borderRadius:'50px'}} src={this.state.person.imgSrc} /></ProfileComponent>):null}
      </div>
    )
  }
}
