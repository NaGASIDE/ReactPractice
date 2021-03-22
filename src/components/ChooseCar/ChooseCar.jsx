import React, { Component } from 'react';

export class ChooseCar extends Component {
  constructor(props) {
    super(props)

    this.state = {value: 'mercedes'};
    this.chooseChange = this.chooseChange.bind(this)
    this.chooseSumit = this.chooseSumit.bind(this)
  }

  chooseChange(event) {
    this.setState({value: event.target.value})
  }

  chooseSumit(event) {
    alert(`Вы купили ` + this.state.value)
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.chooseSumit}>
        <label>
          Выберите вашу любимую машину:
          <select value={this.state.value} onChange={this.chooseChange}>
            <option value="mercedes">Мерседес</option>
            <option value="volkswagen">Фольксваген</option>
            <option value="bmw">БМВ</option>
            <option value="audi">Ауди</option>
          </select>
        </label>
        <input type="submit" value="Купить" />
      </form>
    )
  }
}