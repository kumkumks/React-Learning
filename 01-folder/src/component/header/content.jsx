import React from 'react'

function Content() {
  return (
    <div className='flex justify-center w-full p-12'>
      <div className='text-center w-full p-12 m-3'>
        <p className='text-white text-xl mb-2'>NOW LIVE</p>
        <h1 className='text-white text-8xl mb-1'>INTRODUCING NEW CHARACTER</h1>
        <p className='text-white'>Shrouded in mystery, a shadow emerges from the past.With eyes that 
        hold untold stories and a presence that commands attention,they bring a power 
        unlike any seen before.</p>
        <div className='mt-7'>
          <button className='me-2 border-1 border-black px-3 py-1 rounded-full hover:bg-black hover:text-white'>Description</button>
          <button className='ms-2 border-1 border-white px-3 py-1 text-white rounded-full hover:bg-white hover:text-sky-500'>Next for detail</button>
        </div>
      </div>
    </div>
  )
}

export default Content