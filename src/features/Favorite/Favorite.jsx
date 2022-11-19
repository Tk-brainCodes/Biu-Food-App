import React from 'react'
import { FavoriteFood, Footer, MainNav } from '../../components'

import { FoodData } from './FoodData'

const Favorite = () => {
  return (
    <div className='flex flex-col min-h-[100vh]'>
      <MainNav />
      <div className='mt-5 flex items-center justify-center flex-col'>
        <h1 className='text-2xl text-[#FF4545] font-bold'>Favorite</h1>
        {FoodData.map(item => {
            return (
              <FavoriteFood
                name={item.name}
                imageUrl={item.imageUrl}
                shopName={item.shopName}
                location={item.location}
                time ={item.time}
                rating={item.rating}
                charge={item.charge}
              />
            )
        })}
      </div>
      <Footer />
    </div>
  )
}

export default Favorite