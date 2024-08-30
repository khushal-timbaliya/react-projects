import React from 'react'

export default function Propes(props) {
  return (
    <nav>
      <ul className='flex justify-around border-black border-2 p-4 m-4'>
        <li>Home</li>
        <li>About</li>
        <li>Product</li>
        <li>Blog</li>
        <li>{props.name}</li>
        {/* <li>{props.xyz}</li> */}
      </ul>
    </nav>
  )
}
