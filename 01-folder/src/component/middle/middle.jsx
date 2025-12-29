import React from 'react'
import Design from './design'
import Cards from './card'

let data=[
    {   
        id:1,
        name:'Lyra Fransic',
        src:'https://i.pinimg.com/1200x/ec/e4/52/ece4524e8186cbded792c5d91aec7cde.jpg',
        description:'as wind fighter'
    },
    {
        id:2,
        name:'Samurai Lisa',
        src:'https://i.pinimg.com/736x/e7/2c/18/e72c187da17e8806fb200eaf4aaaf75d.jpg',
        description:'as Sword ninja'
    },
    {
        id:3,
        name:'Sanemi Shinazugawa',
        src:'https://i.pinimg.com/736x/4f/00/8f/4f008fd8d11b8fac1a44caded7eff4f9.jpg',
        description:'as wind Hasira'
    },
    {
        id:4,
        name:'Giyu Tomioka',
        src:'https://i.pinimg.com/736x/3c/85/38/3c85381e63c1a9c0624725073f597b05.jpg',
        description:'as water Hasira'
    },
    {
        id:5,
        name:'Tokito Muichiro',
        src:'https://i.pinimg.com/736x/05/44/10/054410f77db40e5a17451f8db0f61772.jpg',
        description:'as mist Hasira'
    }
]

function Middle() {
  return (
    <div className='middle-section bg-black h-screen w-screen'>
        <Design />
        <div className='flex justify-center m-2 p-5'>
            <h1 className='text-white text-3xl mb-1 p-2'>Character  to  play</h1>
        </div>
        <div className="flex">
        {data.map((ele)=>(
                <Cards key={ele.id} name={ele.name} description={ele.description} src={ele.src}/> 
        ))}
        </div>
        <Design />
    </div>
  )
}

export default Middle