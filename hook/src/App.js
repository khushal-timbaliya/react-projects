  import logo from './logo.svg';
  import './App.css';
  import { useState } from 'react';

  export default function App() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("khushal")
    const [arr, setArr] = useState([`1 , 2 ,3 ,kt ,5`]);
    const [Obj, setObj] = useState({ name: "khushal", surname: "timbaliya" })
    const [arrObj, setarrObj] = useState([{ name: "khushal", surname: "timbaliya" }, { name: "khushal", surname: "timbaliya" }])

    const increase = () => {
      setCount(count + 1)
    }
    const decrease = () => {
      setCount(count - 1)
    }
    return (
      <div>
        <h1>{count}</h1>
        <button className='border-2 border-black bg-slate-300 ms-4 px-2 rounded-xl' onClick={increase}>increase</button>
        <button className='border-2 border-black bg-slate-300 ms-4 px-2 rounded-xl' onClick={decrease}>decrease</button>
        <h1>{name}</h1>
        {
          arr.map((e, i) => {
            return <h1 key={i}>{e}</h1>
          })
        }
        <h1>{Obj.name}</h1>
        <h1>{Obj.surname}</h1>
        {
          arrObj.map((e, i) => {
            return <div key={i}>
              <p>{e.name}</p>
              <p>{e.surname}</p>
            </div>
          })
        }

      </div>
    )
  }
