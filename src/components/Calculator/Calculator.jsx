import React, { Component }  from 'react'; 
import { WaterBoil } from './WatetBoil/WaterBoil'

export class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {temperature: ``}

    this.inputChange = this.inputChange.bind(this)
  }

  inputChange(event) {
    this.setState({temperature: event.target.value})
  }
  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Введите температуру в градусах Цельсия:</legend>
        <input
          value={temperature}
          onChange={this.inputChange} />
        <WaterBoil
          celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}