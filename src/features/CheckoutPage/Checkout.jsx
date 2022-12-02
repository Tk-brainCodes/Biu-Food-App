import React,{ useState } from 'react'

import { Address, Carddetails, Cart, Footer, MainNav } from '../../components'

import Image from '../../assets/images/TopPick1.png'
import star from '../../assets/svg/Star.svg'
import time from '../../assets/svg/Time.svg'
import location from '../../assets/svg/Location.svg'
import house from '../../assets/svg/House.svg'

import { AiOutlineShoppingCart } from 'react-icons/ai'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BsCreditCard2Back } from 'react-icons/bs'
import AnimatedPage from '../../components/AnimatedPage'

import { useHistory } from "react-router";

const Checkout = () => {
  const history = useHistory();

  const [tab1, setTab1] = useState(true)
  const [tab2, setTab2] = useState(false)
  const [tab3, setTab3] = useState(false)

  const handleTab1 = () => {
    setTab1(true)
    setTab2(false)
    setTab3(false)
}

const handleTab2 = () => {
    setTab2(true)
    setTab3(false)
    setTab1(false)
}

const handleTab3 = () => {
    setTab3(true)
    setTab1(false)
    setTab2(false)
}

  return (
    <AnimatedPage>
    <div className='min-h-[100vh] flex flex-col'>
      <div className='w-[90%] mx-auto'>
        <MainNav />
        <div className='max-w-[500px] mx-auto'>
          <div className='flex items-center justify-center gap-10 mt-5'>
            <div>
              <img src={Image} alt="" />
            </div>
            <div className='flex flex-col items-start text-center gap-3'>
              <h1 className='text-[1rem] font-bold'>MC Donalds Rice</h1>
              <p className='flex items-center justify-center text-[0.8rem] gap-5'><img src={house} alt="" /> Jamie's Place</p>
              <p className='flex items-center justify-center text-[0.8rem] gap-5'><img src={location} alt="" /> Lagos Nigeria</p>
              <p className='flex items-center justify-center text-[0.8rem] gap-5'><img src={time} alt="" /> 20-30 mins</p>
              <p className='flex items-center justify-center text-[0.8rem] gap-5'><img src={star} alt="" /> 4.5</p>
            </div>
          </div>
          <div className='flex items-center justify-center gap-[5rem] mt-10'>
            <AiOutlineShoppingCart className='text-3xl cursor-pointer' onClick={handleTab1}/>
            <HiOutlineLocationMarker className='text-3xl cursor-pointer' onClick={handleTab2}/>
            <BsCreditCard2Back className='text-3xl cursor-pointer' onClick={handleTab3}/>
          </div>
          <hr className='mt-5'/>
          {tab1 ? <Cart /> : ''}
          {tab2 ? <Address /> : ''}
          {tab3 ? <Carddetails /> : ''}    
          <div className='flex items-center justify-center my-9'>
            <button 
              className='py-[10px] px-[7rem] rounded-2xl font-bold bg-black'
              onClick={(e) => {
                e.preventDefault();
                history.push("/Feedback");
              }}
            >
              Confirm
            </button>
          </div>

        </div>
      </div>
      <Footer />
    </div>
    </AnimatedPage>
  )
}

export default Checkout