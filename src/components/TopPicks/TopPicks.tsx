import React from "react";
import Fav from "../../assets/svg/Fav.svg";
import Star from "../../assets/svg/Star.svg";
import House from "../../assets/svg/House.svg";
import Time from "../../assets/svg/Time.svg";
import Location from "../../assets/svg/Location.svg";

const TopPicks = ({ image }: { image: string }) => {
  return (
    <div className='w-[100%]'>
      <div className='bg-[#FFE9E9] flex items-center justify-center gap-[1rem] p-5 my-2'>
        <div>
          <img src={image} alt='' />
        </div>

        <div className='text-black'>
          <h1 className='font-bold text-[14px]'>Mc Donalds Rice</h1>
          <p className='flex items-center gap-1 text-[12px]'>
            <img src={House} alt='' /> Jamie's Place
          </p>
          <div className='mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2'>
            <p className='flex items-center gap-1 text-[10px]'>
              <img src={Location} alt='' /> Lagos Nigeria
            </p>
            <p className='flex items-center gap-1 text-[10px]'>
              <img src={Time} alt='' /> 25-30 mins
            </p>
          </div>
          <p className='text-[10px] flex items-center gap-1 my-1'>
            <img src={Star} alt='' /> 4.5
          </p>
          <p className='text-[10px] text-[#FF4545]'>Delivery charge $8.00</p>
        </div>

        <div className='flex items-baseline justify-end self-baseline'>
          <img src={Fav} alt='' />
        </div>
      </div>
    </div>
  );
};

export default TopPicks;
