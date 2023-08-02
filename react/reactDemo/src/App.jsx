import { useState } from 'react'
import Home from './views/Home.jsx'
import router from './router/index.jsx'
import './App.css'
import { Route, RouterProvider } from 'react-router-dom'

function App() {
  return (
    <div className="w-lg bg-pink-100">
      {/* <RouterProvider router={router}>
      <Home></Home>
      </RouterProvider> */}
      <Home></Home>
    </div>
  )
}

export default App
