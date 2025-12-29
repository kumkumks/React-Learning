import React from 'react'

function SideButton() {
  return (
    <div className=' p-4 text-white'>
        <button className='me-2 border-1 border-white px-3 py-1 rounded-full hover:bg-white hover:text-sky-500'>Search</button>
        <button className='ms-2 border-1 border-white px-3 py-1 rounded-full hover:bg-white hover:text-sky-500'>For More info</button>
    </div>
  )
}

export default SideButton