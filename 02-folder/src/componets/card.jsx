import React, { useState } from 'react';

function Card(props) {
    return(
  <div className='h-50 p-5 ms-9.5 bg-amber-300 w-52 text-center'>
      <p className='text-black'>{props.name.user}</p>
      <p className='text-black'>{props.name.price}</p>
  </div>
    )
}

export default Card;