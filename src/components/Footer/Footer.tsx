import React from 'react'

import HomeIcon from '../../assets/svg/HomeIcon.svg'
import SearchIcon from '../../assets/svg/SearchIcon.svg'
import FavIcon from '../../assets/svg/FavIcon.svg'
import CartIcon from '../../assets/svg/CartIcon.svg'
import AccountIcon from '../../assets/svg/AccountIcon.svg'

const Footer = () => {
  return (
    <div className='flex items-center justify-center m-auto gap-10 mt-[5rem] p-4 sticky bottom-0 left-0 bg-black'>
        <div className='cursor-pointer'>
            <img src={HomeIcon} alt="" />
        </div>
        <div className='cursor-pointer'>
            <img src={SearchIcon} alt="" />
        </div>
        <div className='cursor-pointer'>
            <img src={FavIcon} alt="" />
        </div>
        <div className='cursor-pointer'>
            <img src={CartIcon} alt="" />
        </div>
        <div className='cursor-pointer'>
            <img src={AccountIcon} alt="" />
        </div>
    </div>
  )
}

export default Footer