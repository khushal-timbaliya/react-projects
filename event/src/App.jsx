import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)
  const [sub, setSub] = useState("")
  const [isvisible, setIsVisible] = useState(false)

  const handleSubmit = (e)=>{
    event.preventDefault()
    console.log("form submited");
    let obj = {
      name:sub,
      submit:sub
    }
    console.log(obj);
    
    
  }

  return (
    <>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input className='border border-black' type="text" onChange={(e) => setSub(e.target.value)} />
        <button type='submit' className='border border-black bg-slate-400 rounded-2xl py-1 px-5'
          onClick={()=>setIsVisible(!isvisible)}
          >Submit</button>
        <p>{sub}</p>
      </form>
      {
        isvisible ? <h1>hiiiii</h1> : <h1>byeee</h1>
      }

    </>
  )
}
