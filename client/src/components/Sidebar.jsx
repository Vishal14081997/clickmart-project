import React from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
      <div className='bg-gray-50 px-15'>
        <div className=''>
          <img src={logo} alt="" className='w-45' />
        </div>
        <div className='flex flex-col gap-4'>

          <Link to={"dashboard"}>
            <div className='border-1 font-semibold rounded-2xl px-10 py-2 hover:bg-amber-500 hover:text-white'>Dashboard</div>
          </Link>
          <Link to={"categories"}>
            <div className='border-1 font-semibold rounded-2xl px-10 py-2 hover:bg-amber-500 hover:text-white'>Categories</div>
          </Link>
          <Link to={"products"}>
            <div className='border-1 font-semibold rounded-2xl px-10 py-2 hover:bg-amber-500 hover:text-white'>Produts</div>
          </Link>
          <Link to={"agency-list"}>
            <div className='border-1 font-semibold rounded-2xl px-10 py-2 hover:bg-amber-500 hover:text-white'>Agency List</div>
          </Link>
          <Link to={"customer-list"}>
            <div className='border-1 font-semibold rounded-2xl px-10 py-2 hover:bg-amber-500 hover:text-white'>Customer List</div>
          </Link>

        </div>
      </div>
    </>
  )
}

export default Sidebar