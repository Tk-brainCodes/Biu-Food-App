import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";

import { HiAdjustmentsVertical } from "react-icons/hi2"

const MainNav = () => {
  return (
    <div className='flex items-center justify-center h-6 w-full gap-[4rem] mt-5 px-4'>
        <div className='burger'>
            <AiOutlineMenu className='text-2xl cursor-pointer'/>
        </div>
        <div className='location'>
            <input 
                className='p-[0.5rem] px-[3rem] rounded-full outline-none w-[100%] border border-black'
                type="search" 
                name="search" 
                placeholder='521 Avenue Street'
            />
        </div>
        <div className='filter'>
            <HiAdjustmentsVertical className='text-2xl cursor-pointer'/>
        </div>
    </div>
  )
}

export default MainNav