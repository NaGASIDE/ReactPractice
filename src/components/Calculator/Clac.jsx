import React, { Component } from "react";
import { WaterBoil } from "./WaterBoil/WaterBoil";
import { InputValue } from "./InputValue/InputValue";

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
function tryConvert(temp, convert) {
  const input = parseFloat(temp);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

const AreContextTrue = React.createContext()

export class Calc extends Component {
  constructor(props) {
    super(props);
    this.CelsiusChange = this.CelsiusChange.bind(this);
    this.FahrenheitChange = this.FahrenheitChange.bind(this);
    this.state = { temp: ``, scale: `c` };
  }

  CelsiusChange(temp) {
    this.setState({ scale: `c`, temp });
  }

  FahrenheitChange(temp) {
    this.setState({ scale: `f`, temp });
  }

  render() {
    const scale = this.state.scale;
    const temp = this.state.temp;
    const celsius = scale === "f" ? tryConvert(temp, toCelsius) : temp;
    const fahrenheit = scale === "c" ? tryConvert(temp, toFahrenheit) : temp;
    return (
      <AreContextTrue.Provider value="Boiiil" >
        <div> 
          <InputValue
            scale="c"
            temp={celsius}
            onInputChange={this.CelsiusChange}
          />
          <InputValue
            scale="f"
            temp={fahrenheit}
            onInputChange={this.FahrenheitChange}
          />
          <WaterBoil celsius={parseFloat(celsius)} />
        </div>
        </ AreContextTrue.Provider >
    );
  }
}
