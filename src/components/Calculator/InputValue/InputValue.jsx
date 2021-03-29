import React, { Component } from 'react';

const scaleNames = {
  c: 'Цельсия',
  f: 'Фаренгейта'
};

export class InputValue extends Component {
  constructor(props) {
    super(props)
    this.inputChange = this.inputChange.bind(this) 
  }

  inputChange(e) {
    this.props.onInputChange(e.target.value)
  }
  render() {
    const temp = this.props.temp
    const scale = this.props.scale
    return (
      <fieldset>
        <legend>Введите температуру в градусах {scaleNames[scale]}:</legend>
        <input value={temp}
               onChange={this.inputChange} />
      </fieldset>
    )
  }
}