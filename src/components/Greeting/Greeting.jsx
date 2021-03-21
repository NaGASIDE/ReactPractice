import React from 'react';

export function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <div>Добро пожаловать!</div>;
  }
  return <div>Пожалуйста войдите</div>;
}