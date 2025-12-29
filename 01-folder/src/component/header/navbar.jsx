import React from 'react'

function Navbar() {
  return (
    <div className='text-white p-4'>
      <ul className='cursor-pointer flex'>
        <li className='me-15 hover:underline hover:font-bold'>Home</li>
        <li className='me-15 hover:underline hover:font-bold'>Profile</li>
        <li className='me-15 hover:underline hover:font-bold'>Character</li>
        <li className='me-15 hover:underline hover:font-bold'>Game</li>
      </ul>
    </div>
  )
}

export default Navbar