import React from 'react';

export function IsOnline(props) {
  const isLoggedIn = props.isLoggedIn;
  return (
    <div>
      Пользователь {isLoggedIn} {isLoggedIn ? `сейчас `: `не`} на сайте.
    </div>
  )
}

