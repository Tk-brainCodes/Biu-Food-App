import React,{ useState } from 'react'
import AnimatedPage from '../AnimatedPage';

const Cart = () => {
    const [ amount, setAmount ] = useState(1)

    const increment = (id) => {
      if (amount >= 20) return;
      setAmount(amount + 1)
    }
  
    const decrement = () => {
      if (amount <= 1) return;
      setAmount(amount - 1)
    }
  return (
    <AnimatedPage>
    <div>
        <div className='flex flex-col gap-5 items-center justify-center mt-10'>
            <div className='flex items-center justify-center gap-5'>
                <h1 className='text-[0.8rem]'>Family-sized portions</h1>
                <div className='flex items-center justify-center gap-6'>
                <button onClick={increment} className='cursor-pointer text-center text-2xl font-bold bg-black px-[8px] border border-black rounded-full'> + </button>
                <div> {amount} </div>
                <button onClick={decrement} className='cursor-pointer text-center text-2xl font-bold bg-black px-[8px] border border-black rounded-full'> - </button>
                </div>
                <div><h1>$30.00</h1></div>
            </div>
            <div className='flex items-center justify-center gap-5'>
                <h1 className='text-[0.8rem]'>Family-sized portions</h1>
                <div className='flex items-center justify-center gap-6'>
                <button onClick={increment} className='cursor-pointer text-center text-2xl font-bold bg-black px-[8px] border border-black rounded-full'> + </button>
                <div> {amount} </div>
                <button onClick={decrement} className='cursor-pointer text-center text-2xl font-bold bg-black px-[8px] border border-black rounded-full'> - </button>
                </div>
                <div><h1>$26.00</h1></div>
            </div>
            <div className='flex items-center justify-center gap-5'>
                <h1 className='text-[0.8rem]'>Family-sized portions</h1>
                <div className='flex items-center justify-center gap-6'>
                <button onClick={increment} className='cursor-pointer text-center text-2xl font-bold bg-black px-[8px] border border-black rounded-full'> + </button>
                <div> {amount} </div>
                <button onClick={decrement} className='cursor-pointer text-center text-2xl font-bold bg-black px-[8px] border border-black rounded-full'> - </button>
                </div>
                <div><h1>$17.00</h1></div>
            </div>
            </div>
            <div className=' mt-10'>
            <input type="text" placeholder='Add a note (extra napkins, extra sauce)' className='bg-transparent outline-none w-[300px]'/>
            </div>
            <hr className='mt-5'/>
            <div className='flex gap-5 flex-col my-5'>
            <div className='flex items-center justify-between gap-10'>
                <h1 className='text-[0.8rem]'>Additional Costs</h1>
                <h1 className='text-[0.8rem]'>$100.00</h1>
            </div>
            <div className='flex items-center justify-between gap-10'>
                <h1 className='text-[0.8rem]'>Sub Total</h1>
                <h1 className='text-[0.8rem]'>$30.00</h1>
            </div>
            <div className='flex items-center justify-between gap-10'>
                <h1 className='text-[0.8rem]'>Delivery Fee</h1>
                <h1 className='text-[0.8rem]'>$10.00</h1>
            </div>
            </div>

            <hr />

            <div className='my-5 text-center'>
            <h1>Add promo code</h1>
            </div>

            <hr />

            <div className='flex justify-between my-5'>
            <h1>Total</h1>
            <h1>$200.00</h1>
        </div>
    </div>
    </AnimatedPage>
  )
}

export default Cart