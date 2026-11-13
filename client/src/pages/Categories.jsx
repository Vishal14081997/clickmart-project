import React from 'react'
import {Link } from 'react-router-dom'
const Categories = () => {
  return (
    <>
      <div className='flex justify-between mt-6'>
        <div>
          <h1 className='font-bold text-xl'>Categories</h1>
          <p className='text-gray-400'>Manage products categories for your store</p>
        </div>
        <div className='bg-orange-400 text-white font-semibold flex justify-center items-center gap-1 rounded-2xl px-2'>
          <span className='text-[24px]'>+</span>
        <Link to={"/add-category"}>
          Add Category
        </Link>
        </div>
      </div>
    </>
  )
}

export default Categories