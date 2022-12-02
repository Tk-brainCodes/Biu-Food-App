import React from 'react'
import AnimatedPage from '../AnimatedPage'

const Address = () => {
  return (
    <AnimatedPage>
      <div className='flex flex-col gap-5 my-5'>
        <input type="text" placeholder='Address Number' className='outline-none bg-transparent'/>
        <input type="text" placeholder='Landmark' className='outline-none bg-transparent'/>
        <input type="text" placeholder='Additional information' className='outline-none bg-transparent'/>
        <input type="text" placeholder='Add a note (delays, bustops)' className='outline-none bg-transparent'/>
      </div>
    </AnimatedPage>
  )
}

export default Address