import React, { Component } from 'react';

export class EssayForm extends Component {
  constructor(props) {
    super(props)
    this.state = {value: ''};
    
    this.changeForm = this.changeForm.bind(this)
    this.subitForm = this.subitForm.bind(this)
  }

  changeForm(event) {
    this.setState({value: event.target.value})
  }

  subitForm(event) {
    alert(`Ты ввёл это ` + this.state.value)
    event.preventDefault()
  }
  
  render() {
    return (
      <form onSubmit={this.subitForm}>
        <label>
          Сочинение:
          <textarea value={this.state.value} onChange={this.changeForm} />
        </label>
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}