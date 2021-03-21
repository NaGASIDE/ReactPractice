import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Clock } from './components/Clock/Clock'
import { Click } from './components/Click/Click'
import { Top } from './components/Top/Top'
import { CheckLogin } from './components/CheckLogin/CheckLogin'
import { Mainbox } from './components/Mainbox/Mainbox'
import { IsOnline } from './components/IsOnline/IsOnline'
import { NumbersList} from './components/NumberList/NumbersList'
import { NameForm } from './components/NameForm/NameForm'
import { EssayForm } from './components/EssayForm/EssayForm'

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
  </div>
,
  root
);
