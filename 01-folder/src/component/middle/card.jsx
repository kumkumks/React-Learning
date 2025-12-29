import React from 'react'

function Cards(props) {
  return (
    <div className='card m-7'>
       <div className="card-content w-50 h-50 mx-auto mt-5 hover:translate-y-1 hover:scale-110">
        <img className='fit-content w-50 h-50 rounded-t-lg' src={props.src} alt='img' />
        <div className='img-text p-1 rounded-b-lg text-white text-center'>
          <p className='text-xl'>{props.name}</p>
          <p >{props.description}</p>
        </div>
       </div>
    </div>
  )
}

export default Cards