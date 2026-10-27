import React from 'react'
import Sidebar from "../components/Sidebar"
import Topbar from '../components/Topbar'
import { Outlet } from "react-router-dom"

const DashboardLayout = () => {
  return (
    <>
      <div className='flex bg-gray-100 h-screen '>
        <Sidebar />
        <div className='flex-1 px-5'>
          <Topbar />
          <div>
            <Outlet/>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardLayout