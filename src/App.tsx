import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
