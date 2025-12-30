import React, { useState } from 'react'
import Card from './componets/card'
import Input from './componets/input'

function App() {
  const [user, setUser] = useState([]);
  function add(userdata) {
    setUser([...user, userdata]);
  }
  return (
    <div className='flex w-screen justify-around'>
      <Input sendData={add} />
        {user.map((item, index)=>(
        <Card  key={index} name={item}/>
        ))}
    </div>
  );
}

export default App