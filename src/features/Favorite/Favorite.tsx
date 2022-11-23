import React from 'react'
import { FavoriteFood, Footer, MainNav } from '../../components'

import { FoodData } from './FoodData'

interface IFavoriteType {
  id: number;
  name: string;
  imageUrl: string;
  shopName: string;
  location: string;
  time: string;
  rating: string;
  charge: string;
}

const Favorite = () => {
  return (
    <div className='flex flex-col min-h-[100vh]'>
      <div className='w-[90%] mx-auto '>
        <MainNav />
        <div className='mt-5 flex items-center justify-center flex-col'>
          <h1 className='text-2xl text-[#FF4545] font-bold'>Favorite</h1>
          {FoodData.map((item: IFavoriteType) => {
              return (
                <FavoriteFood
                  name={item.name}
                  imageUrl={item.imageUrl}
                  shopName={item.shopName}
                  location={item.location}
                  time ={item.time}
                  rating={item.rating}
                  charge={item.charge}
                  key={item.id}
                />
              )
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Favorite