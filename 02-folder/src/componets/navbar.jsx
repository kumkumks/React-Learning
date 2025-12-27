import React, { useState } from 'react'

function Cards({ product }) {
  const { title, price, product: productName } = product;
  const [currentTitle, setTitle] = useState(title);

  return (
    <div  className='card flex justify-center gap-4 text-white'>
      <p onClick={() => setTitle("Chanel")} className='cursor-pointer hover:text-yellow-400'>
        Title: {currentTitle}
      </p>
      <p>Price: ${price}</p>
      <p>Product: {productName}</p>
    </div>
  )
}

export default Cards