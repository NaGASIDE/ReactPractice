import React, { Component } from 'react';
import { CustomInput } from './CustomInput/CustomInput'

export class RefWithcustomInput extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.focusInput = this.focusInput.bind(this)
  }

  focusInput() {
    this.myRef.current.focusInput()
  }

  render() {
    return (
      <div>
        <CustomInput ref={this.myRef} />
        <input type='button' value='Focus' onClick={this.focusInput} />
      </div>
    )
  }
}