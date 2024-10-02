import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function About() {
    const navigate = useNavigate();
    const handleBtn=()=>{
        navigate("/")
    }
  return (
    <div>
        <h1>About</h1>

        <button onClick={handleBtn}>Go to Home</button>
        <Link to={"/"}>Home</Link>
        <Link to={"/Contact"}>Contact</Link>
    </div>
  )
}