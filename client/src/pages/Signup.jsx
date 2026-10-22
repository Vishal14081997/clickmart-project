import React from 'react'
import logo from "../assets/logo.png"

const Signup = () => {
    return (
        <>
            <div className='flex justify-between    '>
                <div className='text-center'>
                    <h1>Welcome <span>Click</span>Mart</h1>
                    <p>Smart shopping, Better living.</p>
                    <img src={logo} alt="" height={100} width={100} />
                </div>
                <div>login</div>
            </div>

        </>
    )
}

export default Signup