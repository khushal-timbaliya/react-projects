import React, { useRef } from 'react'

export default function Uncontroll() {
    const inputRef = useRef();
    const handleclick = () => {
        let value = inputRef.current.value
        alert(`input value is ${ value }`)
    }

    return (
        <div>
            <h1>UncantrolledComponent</h1>
            <input type="text" ref={inputRef} placeholder='Enter Value' /><br />
            <button onClick={handleclick}> <span>Click</span></button>
        </div>
    )

}
