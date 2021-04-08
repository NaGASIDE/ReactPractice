import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Clock } from './components/Clock/Clock'
import { Click } from './components/Click/Click'
import { Top } from './components/Top/Top'
import { CheckLogin } from './components/CheckLogin/CheckLogin'
import { Mainbox } from './components/Mainbox/Mainbox'
import { IsOnline } from './components/IsOnline/IsOnline'
import { NumbersList } from './components/NumberList/NumbersList'
import { NameForm } from './components/NameForm/NameForm'
import { EssayForm } from './components/EssayForm/EssayForm'
import { ChooseCar } from './components/ChooseCar/ChooseCar'
import { InputControl } from './components/InputControl/InputControl'
import { Calc } from './components/Calculator/Clac'
import { Foot } from './components/Foot/Foot'
import { ContextTraining } from './components/ContextTraining/ContextTraining'
import { InputFocus } from './components/InputFocus/InputFocus'
import { RefInput } from './components/RefInput/RefInput'
import { RefWithcustomInput } from './components/RefWithcustomInput/RefWithcustomInput'

const root = document.getElementById('root')

ReactDOM.render(
  <div>
    <Clock />
    <br/>
    <Click />
    <br/>
    <Top />
    <br/>
    <CheckLogin />
    <br/>
    <Mainbox unreadMessages={[`Liza`, `Gerbi4`]} />
    <br/>
    <IsOnline isLoggedIn={`bekzatashken`}  />
    <br/>
    <NumbersList numbers={[1, 2, 3, 4, 5]} /> 
    <br />
    <NameForm />
    <br />
    <EssayForm />
    <br />
    <ChooseCar />
    <br />
    <InputControl />
    <br />
    <Calc />
    <br />
    <Foot />
    <br />
    <InputFocus />
    <br />
    <RefInput/>
    <br />
    <RefWithcustomInput />
  </div>
,
  root
);
