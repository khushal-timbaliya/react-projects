import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Controll from './Components/Controll'
import Uncontroll from './Components/Uncontroll'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Controll/>
      <Uncontroll/>
      
    </>
  )
}

export default App
