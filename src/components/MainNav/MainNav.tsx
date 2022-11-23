import React, { useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import { HiAdjustmentsVertical } from "react-icons/hi2";
import { TbMapPin } from "react-icons/tb";

import Logo from '../../assets/svg/Logo.svg'
import Profile from '../../assets/svg/Profile.svg'
import Notifs from '../../assets/svg/Notifs.svg'
import Payment from '../../assets/svg/Payment.svg'
import Promo from '../../assets/svg/Promo.svg'
import About from '../../assets/svg/About.svg'
import Address from '../../assets/svg/Address.svg'
import Gift from '../../assets/svg/Gift.svg'
import Wishlist from '../../assets/svg/Wishlist.svg'
import { Favorite } from "../../features/Favorite";

const MainNav = () => {
  const [search, setSearch] = useState("");

  const [nav, setNav] = useState(false)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className="w-[100%] ">
      <div className='flex items-center justify-between w-full gap-[1rem] mt-5'>
        <div className='burger z-20' onClick={handleNav}>
          <AiOutlineMenu className='text-2xl cursor-pointer' />
        </div>
        <div className='flex items-center justify-start gap-2 border border-white rounded-full px-2 w-[80%] sm:w-[60%] md:w-[40%]'>
          <TbMapPin />
          <input
            className='p-[0.5rem] outline-none bg-transparent'
            type='search'
            name='search'
            value={search}
            onChange={handleSearch}
            placeholder='521 Avenue Street'
          />
        </div>
        <div className='filter'>
          <HiAdjustmentsVertical className='text-2xl cursor-pointer' />
        </div>
      </div>
      
        {/* Nav Open */}
        <ul style={{height: window.innerHeight}} className={`z-10 flex fixed w-3/4 flex-col left-0 top-0 right-0 testing bottom-0
          bg-black h-[100vh] pt-[5rem] gap-5 transition-all  ${nav ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="w-full flex justify-center">
            <img src={Logo} alt="" className="w-[100px] sm:w-[200px] md:w-[250px]" />
          </div>
          <div className="w-full h-[2px] bg-[#D9D9D9]"></div>
          <li className='ml-[2rem] flex gap-2 items-center'><img src={Profile} alt="" /> Profile</li>
          <li className='ml-[2rem] flex gap-2 items-center'><img src={Address} alt="" /> Addresses</li>
          <li className='ml-[2rem] flex gap-2 items-center'><img src={Promo} alt="" /> Promo Codes</li>
          <li className='ml-[2rem] flex gap-2 items-center'><img src={Wishlist} alt="" /> Wishlist</li>
          <li className='ml-[2rem] flex gap-2 items-center'><img src={Profile} alt="" /> Favorites</li>
          <li className='ml-[2rem] flex gap-2 items-center'><img src={About} alt="" /> About Us</li>
          <li className='ml-[2rem] flex gap-2 items-center'><img src={Notifs} alt="" /> Notifications</li>
          <li className='ml-[2rem] flex gap-2 items-center'><img src={Payment} alt="" /> Payment</li>
          <li className='ml-[2rem] flex gap-2 items-center'><img src={Gift} alt="" /> Send Us A Gift</li>
        </ul>
      </div>
  );
};

export default MainNav;
