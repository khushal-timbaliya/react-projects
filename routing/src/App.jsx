import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Componants/Home'
import Create from './Componants/Create'
import Delete from './Componants/Delete'
import Update from './Componants/Update'


export default function App() {
  const [data, setData] = useState(
    [
      { id: 1, name: "khushal", subject: "React" },
      { id: 2, name: "timbaliya", subject: "nodejs" },
    ]
  )
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home data={data} />}></Route>
          <Route path='/create' element={<Create data={data} setData={setData}/>}></Route>
          <Route path='/delete' element={<Delete data={data} setData={setData}/>}></Route>
          <Route path='/update' element={<Update data={data} setData={setData} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}