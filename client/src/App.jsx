import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from './pages/Login'
import Signup from './pages/Signup'
import { Toaster } from "react-hot-toast"
import DashboardLayout from './layouts/DashboardLayout'
import Dashboard from './pages/Dashboard'
import Categories from "./pages/Categories"
import Products from "./pages/Products"
import Agency from "./pages/Agency"
import Customer from "./pages/Customer"


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
    path: "/ds",
    element: <DashboardLayout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "categories", element: <Categories /> },
      { path: "products", element: <Products /> },
      { path: "agency-list", element: <Agency /> },
      { path: "customer-list", element: <Customer /> },
    ]
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