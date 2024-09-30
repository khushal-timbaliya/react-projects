import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Task_manager from './Componants/task_manager'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Task_manager/>
    </>
  )
}

export default App
