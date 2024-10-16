import React from 'react'
import { Provider } from 'react-redux'
import RdxCrud from './RdxCrud'
import { store } from './App/Store'

export default function App() {
  return (
    <div>

   <Provider store={store}>
    <RdxCrud/>
   </Provider>

    </div>
  )
}
