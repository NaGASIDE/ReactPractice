import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Clock } from './components/Clock/Clock'
import { Click } from './components/Click/Click'
import { Top } from './components/Top/Top'
import { CheckLogin } from './components/CheckLogin/CheckLogin'
const root = document.getElementById('root')

ReactDOM.render(
  <div>
    <Clock />
    <Click />
    <Top />
    <CheckLogin />
  </div>
,
  root
);
