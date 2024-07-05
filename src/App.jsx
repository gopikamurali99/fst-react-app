import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1);

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount((count) => count * 5)}>
          count 
        </button>
       
      </div>
      
    </>
  )
}

export default App
