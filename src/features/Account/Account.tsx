import React from 'react'
import { AccountLinks, Footer, MainNav } from '../../components'
import { AccountData } from "./AccountData";
import ProfileImg from '../../assets/svg/Profile.png'


interface IAccountType {
   ImageUrl: string,
   name: string,
   id: number
}


// w-[80%] m-auto sm:w-[60%] md:w-[40%] xl:w-[30%]
const Account = () => {
  return (
    <div className='min-h-[100vh] flex flex-col'>
      <div className='w-[90%] mx-auto'>
        <MainNav />
        <div className='flex items-center justify-center gap-[5rem] my-10'>
          <h1 className='text-4xl sm:text-5xl font-bold text-center text-[#FF4545]'>Ifeanyi Ojji</h1>
          <img src={ProfileImg} alt="" />
        </div>
        <div className='flex flex-col gap-10 items-start mt-10'>
          {AccountData.map((item : IAccountType) => {
            return (
              <AccountLinks 
                ImageUrl={item.ImageUrl}
                name={item.name} 
                key={item.id}
              />
            )
          })}
          <p className='text-center ml-2'>V1.100.10001</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Account