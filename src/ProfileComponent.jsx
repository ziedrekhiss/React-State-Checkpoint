import React, { Component } from 'react'

export default class ProfileComponent extends Component {
    constructor(props) {
        super(props);
        this.state={}}

        componentDidMount(){
            this.timer=setInterval(()=>this.props.updateState(this.props.counter),1000)
        }
        
        
        componentWillUnmount(){
            clearInterval(this.timer)
            this.props.updateState(-1)
        }
        
    render() {
        return (
                <div 
                    style={{
                    border:'solid, 1px',
                    borderColor:'#BDBDBD',
                    borderRadius:'10px',
                    backgroundColor:'#1C1C1C',
                    width:'300px',
                    padding:'10px', 
                    display:'flex',flexDirection:'column', alignItems:'center'}}>   
                <div>
                    {this.props.children}
                </div>
                <div 
                style={{fontFamily:'arial'}}>
                    <h3 style={{fontSize:'18px', color:'#FFFFFF'}}>{this.props.data.fullName}</h3>
                    <h4 style={{fontSize:'14px' , color:'#F7BE81'}}>{this.props.data.bio}</h4>
                    <h4 style={{fontSize:'14px', color:'#F5ECCE'}}>{this.props.data.profession}</h4>
                </div>
            </div>
    )
}
}










