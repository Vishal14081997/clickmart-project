import React from 'react'
import {Search ,CircleUserRound} from "lucide-react"

const Topbar = () => {
    return (
        <div>
            <div className='flex justify-between py-2 items-center gap-8'>
                <div className='border-1 w-full rounded-2xl px-4 py-2'>
                    <div className='flex gap-2 '>
                        <Search className='text-gray-500'/>
                        <input type="text" placeholder='Global Search...' className='outline-none' />
                    </div>
                </div>
                <div>
                    <CircleUserRound /> 
                </div>
            </div>
        </div>
    )
}

export default Topbar