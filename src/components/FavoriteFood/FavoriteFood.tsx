import React from "react";

import FavImg from "../../assets/svg/Fav.svg";
import StarImg from "../../assets/svg/Star.svg";
import HouseImg from "../../assets/svg/House.svg";
import TimeImg from "../../assets/svg/Time.svg";
import LocationImg from "../../assets/svg/Location.svg";

interface ICardTypes {
  imageUrl: string;
  name: string; 
  shopName: string;
  location: string;
  time: string;
  rating: string;
  charge: string;
}

const FavoriteFood = ({
  imageUrl,
  name,
  shopName,
  location,
  time,
  rating,
  charge,
}: ICardTypes) => {
  return (
    <div className='rounded-xl'>
      <div className='flex items-center justify-between gap-[1rem] p-5 my-2 bg-[#FFE9E9]'>
        <div className=''>
          <img
            src={require(`../../assets/images/${imageUrl}.png`)}
            alt={name}
          />
        </div>

        <div className='text-black'>
          <h1 className='font-bold text-[14px]'>{name}</h1>
          <p className='flex items-center gap-1 text-[10px]'>
            <img src={HouseImg} alt='' /> {shopName}
          </p>
          <div className='mt-5 grid sm:grid-cols-2 gap-3'>
            <p className='flex items-center gap-1 text-[10px]'>
              <img src={LocationImg} alt='' /> {location}
            </p>
            <p className='flex items-center gap-1 text-[10px]'>
              <img src={TimeImg} alt='' /> {time}
            </p>
          </div>
          <p className='text-[10px] flex items-center gap-1 my-1'>
            <img src={StarImg} alt='' /> {rating}
          </p>
          <p className='text-[10px] text-[#FF4545]'>{charge}</p>
        </div>
        <div className='flex items-baseline justify-end self-baseline'>
          <img src={FavImg} alt='' />
        </div>
      </div>
    </div>
  );
};

export default FavoriteFood;
