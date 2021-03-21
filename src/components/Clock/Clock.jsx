import React, { Component } from 'react';
import './Clock.sass'

export class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.TimeID = setInterval(
     () => this.tick(),
     1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.TimeID)
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

 render() {
   return (
     <div>
       <p className='ClockText' >{this.state.date.toLocaleTimeString()}</p>
     </div>
  )
 }
}