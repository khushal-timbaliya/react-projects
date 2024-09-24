import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Crud from './Components/crud'
import Local from './Components/local'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Crud/>
      {/* <Local/> */}
    </>
  )
}

export default App
