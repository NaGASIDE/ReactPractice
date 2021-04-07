import React, { Component } from 'react';

const ContextTest = React.createContext(`I love Tessa Violet `)

class ComponentTwo extends Component {
  render() {
    return(
      <ComponentThree/>
    )
  }
}


export class ContextTraining extends Component {
  render() {
   
    return (
      <ContextTest.Provider >
        <ComponentTwo/>
      </ContextTest.Provider >
        
    )
  }
}

class ComponentThree extends Component {
  static contextType = ContextTest;
  render() {
    return <p>{this.context}</p>
  }
}
