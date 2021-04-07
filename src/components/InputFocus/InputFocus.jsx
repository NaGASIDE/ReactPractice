import React, { Component } from 'react';

export class InputFocus extends Component {
  constructor(props) {
    super(props)

    this.textInput = React.createRef()
    this.focusInput = this.focusInput.bind(this)
  }

  focusInput() {
    this.textInput.current.focus()
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref={this.textInput} 
        />
        <input
          type="button"
          value="Фокус на текстовом поле"
          onClick={this.focusInput}
        />
      </div>
    );
  }
}