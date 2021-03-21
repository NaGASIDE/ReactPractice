import React, { Component } from 'react';
import { Greeting } from '../Greeting/Greeting'

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Войти
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Выйти
    </button>
  );
}

 export class CheckLogin extends Component {
  constructor(props) {
    super()
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.state = {isLogined: false}
  }

  login() {
    this.setState({isLogined: true});
  }

  logout() {
    this.setState({isLogined: false});
  }

  render() {
    const isLogined = this.state.isLogined;
    let button;
    if (isLogined) {
      button = <LogoutButton onClick={this.logout} />
    } else {
      button = <LoginButton onClick={this.login} />
    }
      return (
        <div>
          < Greeting isLoggedIn={isLogined} />
          {button}
        </div>
      );
    }
  }