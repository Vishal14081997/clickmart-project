import React, { useState } from 'react'
import WelcomPanel from '../components/WelcomPanel'
import axios from 'axios'
import {toast} from "react-hot-toast"
import { Link } from 'react-router-dom'

const Login = () => {
  const [formData, setFormData] = useState({
    email: "", password: ""
  })

  const handleChange = (e) => {
    // console.log(e.target.name , e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/auth/login", formData);
      console.log(response);
      setFormData({email:"", password:""})
      toast.success(response.data.message)
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message)
    }
  }


  return (
    <div className="flex justify-between bg-amber-100">
      <div className="w-1/2 ">
        <WelcomPanel />
      </div>
      <div className="w-1/2 h-screen flex justify-center items-center">
        <div className="bg-white p-12 rounded-2xl">
          <h1 className="text-3xl font-semibold">Welcome Back</h1>
          <p className="text-gray-500 font-medium mb-2">
            Login to your <span className='text-amber-500'>ClickMart</span> account
          </p>
          <div>
            <form className="flex flex-col gap-4">
              <div>
                <label className='font-semibold ' >Email Address</label>
                <input
                  type="text"
                  onChange={handleChange}
                  name='email'
                  value={formData.email}
                  placeholder="Enter your email"
                  className="outline-none border-1 border-gray-400 rounded-2xl py-2 px-4 w-full focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div>
                <label className='font-semibold'>Password</label>
                <input
                  type="text"
                  onChange={handleChange}
                  name='password'
                  value={formData.password}
                  placeholder="Enter your password"
                  className="outline-none border-1 border-gray-400 rounded-2xl py-2 px-4 w-full focus:ring-2 focus:ring-amber-500"
                />

              </div>
              <button
                type='button'
                onClick={handleLogin}
                className="outline-none text-white font-semibold bg-amber-500 rounded-2xl py-2 px-4 w-full">
                Login
              </button>

            </form>
            <p className="text-gray-400 mt-2">Don't have a account ? <span className="text-amber-500">
              <Link to={"/signup"}>
              Sign Up
              </Link>
              </span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login