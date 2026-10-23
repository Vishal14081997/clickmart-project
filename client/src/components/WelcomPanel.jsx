import React from 'react'
import logo from "../assets/logo.png"

const WelcomPanel = () => {
    return (
        <div className='flex flex-col gap-4 justify-center items-center h-screen '>
            <div className=''>
                <h1 className='text-4xl font-semibold'>Welcome <span className='text-amber-600'>Click</span>Mart</h1>
                <p className='text-gray-500 font-medium'>Smart shopping, Better living.</p>
                <div className='flex justify-center'>
                    <img src={logo} alt="" height={200} width={200} />
                </div>
            </div>
        </div>
    )
}

export default WelcomPanel