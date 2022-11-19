import React from 'react'

const FoodSearch = ({imageUrl, name}) => {
  return (
    <div className='min-w[10rem] relative'>
      <div className="image">
        <img 
          src={ require(`../../assets/images/${imageUrl}.png`) } 
          alt={name} 
          className='opacity-70'
        />
      </div>
        <p className='absolute bottom-1 text-center w-[100%]'>{name}</p> 
    </div>
  )
}

export default FoodSearch;