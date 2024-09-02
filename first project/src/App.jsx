import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './componants/Nav'
import Main from './componants/Main'
import Footer from './componants/Footer'


export default function App() {
  return (
    <>
    <Nav></Nav>
    <Main></Main>
    <Footer></Footer>
    </>
  )
}