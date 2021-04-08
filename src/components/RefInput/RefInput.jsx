import React, { Component } from 'react';

export class RefInput extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  componentDidMount() {
    console.log(this.myRef.current.value)
  }

    render() {
      return (
          <input type='text' ref={this.myRef} value='bekzat' />
      )
    }
  }