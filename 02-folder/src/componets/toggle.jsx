import React, { useState } from 'react';

function Toggle() {
  const [task, setTask] = useState([]);
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  }
  const handleTask=() => {
    setTask([...task, input]);
    setInput("");
  }
  const handleClear=(index)=>{
   task.map(()=>{
    console.log(index);
   })
  
  }

  return (
    <>
      <input
        className='text-black text-xl bg-amber-50 rounded-2xl mt-2 p-2'
        value={input}
        placeholder='Enter a text'
        onChange={handleInput}
      />
      <button   
        className='text-white text-xl bg-black ml-2 rounded-2xl p-2'
        onClick={handleTask}
      >Add</button>
      {/* <button 
        className='text-white text-xl bg-red-600 ml-2 rounded-2xl p-2'
        onClick={handleClear}
      >Clear</button> */}
      {task.map((ele,index)=>
      <div key={index}>
        <p>{ele}</p>
        <button onClick={handleClear((e)=>{index})}>Delete</button>
      </div>
    )}
    </>
  );
}

export default Toggle;