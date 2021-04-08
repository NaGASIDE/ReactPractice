import React, { Component } from 'react';

export class CustomInput extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }
  
  focusInput() {
    this.myRef.current.focus()
  }
  render() {
    return (
      <input type='text' ref={this.myRef} />
    )
  }
}
