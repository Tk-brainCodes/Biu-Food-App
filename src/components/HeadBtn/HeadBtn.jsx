import React from 'react'

const HeadBtn = ({ title }) => {
  return (
    <div className='mb-5 bg-[#F0EFEF] px-[6rem] rounded-full cursor-pointer '>
      <h1 className='text-[20px] text-center py-4 px-7 bg-[#FF4545] rounded-full font-bold'>{title}</h1>
    </div>
  )
}

export default HeadBtn