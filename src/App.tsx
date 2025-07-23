import { useState } from 'react'
import Stars  from './Stars';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Stars count={5} />  
    </>
  )
}

export default App
