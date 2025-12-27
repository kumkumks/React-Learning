import React from 'react'
import Cards from './componets/navbar'
import Toggle from './componets/toggle'

function App() {
  return (
    <div>
      <Cards product={{
        title:"H&M",
        price:2000,
        product:"Handbag",
      }
      }/>
      <Toggle />
    </div>
  );
}

export default App