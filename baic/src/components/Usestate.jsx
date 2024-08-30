import React, { useState } from 'react'

export default function Usestate() {
    const [count, setcount] = useState(0);
    const add = () => {
        setcount(count + 1)
    }
    return (
        <div className='border-2 border-black w-100 m-4 flex flex-col items-center pb-3'>
            <h1 className='font-bold my-2'>Function Component</h1>
            <p className='pb-2'>{count}</p>
            <button onClick={add} className='h-[30px] w-[70px] border-2 border-black bg-slate-100'>click</button>
        </div>
    )
}
