import React from 'react'
import Sec1 from './Components/Sec1'
import Sec2 from './Components/Sec2'

export default function App() {
  return (
    <>
    {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Sec1/>}></Route>
          <Route path='/project' element={<Projects/>}></Route>
        </Routes>
    </BrowserRouter> */}
    <div>
    <Sec1/>
    <Sec2/>
  </div>
  </>
  )
}
