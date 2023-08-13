import { useState } from 'react'
import Header from './components/Header'
import * as ReactDOM from "react-dom/client";
import {router,AuthGuard,AppRoutes } from './router/index.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";




function App() {


  return (
    <div>
      <Header></Header>
      <RouterProvider router={router}>
       <AuthGuard>
         <AppRoutes />
       </AuthGuard>
     </RouterProvider>
    </div>
    
  )
}

export default App
