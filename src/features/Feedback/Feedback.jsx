import React from 'react'
import { Footer } from '../../components'
import AnimatedPage from '../../components/AnimatedPage'

const Feedback = () => {
  return (
    <AnimatedPage>
    <div className= 'min-h-[100vh] flex flex-col'>
      <div className='w-[90%] mx-auto'>
        <div className='text-center flex items-center gap-20 my-10'>
          <div className='text-2xl'> {'<'} </div>
          <h1>Feedback</h1>
        </div> 
        <hr />
        <div className='my-5'>
          <h1>Your Order has been Delivered</h1>
          <p className='font-bold'>DD1000256623</p>
        </div>
        <hr />
        <div className='my-3'>
          <h1>Rate Your Order</h1>
        </div>
        <hr />
        <div className='flex flex-col gap-4 my-5'>
          <div>
            <h1>Delivery Quality</h1>
          </div>
          <div>
            <h1>Waiting Time</h1>
          </div>
          <div>
            <h1>Cleanliness</h1>
          </div>
          <div>
            <h1>Courtesy</h1>
          </div>
        </div>
        <div>
          <textarea className='bg-transparent outline-none' placeholder='Comment' cols="80" rows="5"></textarea>
        </div>
        <hr />
        <div className='flex items-center justify-center my-9'>
            <button 
              className='py-[10px] px-[7rem] rounded-2xl font-bold bg-black'
            >
              Confirm
            </button>
          </div>
      </div> 
      <Footer />
    </div>
    </AnimatedPage>
  )
}

export default Feedback