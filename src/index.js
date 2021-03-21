import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Clock } from './components/Clock/Clock'
import { Click } from './components/Click/Click'
import { Top } from './components/Top/Top'
import { CheckLogin } from './components/CheckLogin/CheckLogin'
import { Mainbox } from './components/Mainbox/Mainbox'

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
  </div>
,
  root
);
