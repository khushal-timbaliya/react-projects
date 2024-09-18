import React, { useState } from 'react'

export default function Controll() {
    const [name, setName] = useState('');
    const handlechange = (e) => {
        console.log(e.target.value);
    }

    return (
        <div>
            <h1>CantrolledComponent</h1>
            <input type="text" placeholder='Enter Name' onChange={(e) => handlechange(e)} />
        </div>
    )
}

