import React, {Component} from 'react';

export class Click extends React.Component {
  handleClick() {
    console.log('значение this:');
  }

  render() {
    // Такой синтаксис гарантирует, что `this` привязан к handleClick.
    return (
      <button onClick={() => this.handleClick()}>
        Нажми на меня
      </button>
    );
  }
}