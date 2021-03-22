import React from 'react';

export function WaterBoil(props) {
  if (props.celsius >= 100) {return <div>Вода закипит!</div>} else {
    return <div>Вода не закипит!</div>
  }
}