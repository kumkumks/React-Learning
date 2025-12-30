import React, { useState } from 'react'

function Input({sendData}) {
    const[name,setName]=useState('')
    const[price,setPrice]=useState('')

    const handleAdd = () => {
        if(name.trim() && price.trim()) {
            sendData({user: name,price:price});
            setName('');
            setPrice('');
        }else{
            alert("do not leave fields empty");
        }
    }

    return (
        <div className='flex justify-center me-7.9 p-2 w-52'>
            <div className='flex flex-col w-full'>
                <input className='text-black bg-white p-2 m-2 w-full'
                    placeholder='Enter Topic'
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
                <input className='text-black bg-white p-2 m-2 w-full'
                    placeholder='Enter Topic'
                    value={price}
                    onChange={(e)=>setPrice(e.target.value)}
                />
                <button onClick={handleAdd} className='bg-cyan-700 text-white p-2 m-2 w-full'>Add</button>
            </div>
        </div>
    )
}

export default Input