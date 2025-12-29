import React from 'react'
import Navbar from './navbar'
import SideButton from './button'
import Content from './content'
function Header() {
  return (
    <div className='header w-screen h-screen'>
        <div className="heading flex justify-between w-screen px-8">
          <Navbar />
          <SideButton />
        </div>
        <div className=''>
           <Content />
        </div>
    </div>
  )
}

export default Header