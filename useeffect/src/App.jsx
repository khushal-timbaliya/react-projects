import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log("use effect running");

  }, [count])
  const increase = (() => {
    setCount(count + 1)
  })
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>click</button>
    </div>
  )
}
