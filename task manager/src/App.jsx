import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store'
import TaskManager from './redux/taskmanager'


export default function App() {
  return (
    <div>
      <Provider store={store}>
        <TaskManager/>
      </Provider>
    </div>
  )
}