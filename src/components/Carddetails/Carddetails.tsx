import React from 'react'
import AnimatedPage from '../AnimatedPage'

const Carddetails = () => {
  return (
    <AnimatedPage>
    <div className='flex flex-col gap-5 my-5'>
        <input type="text" placeholder='Card Number' className='outline-none bg-transparent'/>
        <input type="text" placeholder='Name on Card' className='outline-none bg-transparent'/>
        <input type="text" placeholder='CVV' className='outline-none bg-transparent'/>
        <input type="text" placeholder='Expiry Date' className='outline-none bg-transparent'/>
    </div>
    </AnimatedPage>
  )
}

export default Carddetails