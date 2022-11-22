import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";

import { HiAdjustmentsVertical } from "react-icons/hi2"

const MainNav = () => {
  const [search, setSearch] = useState("")

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  return (
    <div className='flex items-center justify-between h-6 w-full gap-[4rem] mt-5'>
        <div className='burger'>
            <AiOutlineMenu className='text-2xl cursor-pointer'/>
        </div>
        <div className='location'>
            <input 
                className='p-[0.5rem] px-[3rem] rounded-full outline-none w-[100%] border border-black'
                type="search" 
                name="search"
                value={search}
                onChange={handleSearch} 
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