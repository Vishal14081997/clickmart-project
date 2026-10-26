import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from './pages/Login'
import Signup from './pages/Signup'
import { Toaster } from "react-hot-toast"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "*",
    element: <div className='flex justify-center items-center h-screen bg-amber-400 text-[24px]'>Page not found</div>
  }
])

const App = () => {
  return (
    <>
      <Toaster position='top-center' />
      <RouterProvider router={router} />
    </>
  )
}

export default App