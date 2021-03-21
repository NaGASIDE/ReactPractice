import React from 'react';

export function Mainbox(props) {
  const unreadMessages = props.unreadMessages
  return (
    <div>
      <h3>Здравствуйте!</h3>
      {unreadMessages.length > 0 &&
      <h4>
       У вас {unreadMessages.length} не прочитанных сообщений.
      </h4>
      }
    </div>
  )
}
