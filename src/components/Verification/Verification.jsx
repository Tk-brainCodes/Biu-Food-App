import React, { useState } from 'react'
import HeadBtn from '../HeadBtn/HeadBtn'
import { useHistory } from 'react-router'

const Verification = () => {
  const [input, setInput] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: ''
  })

  const handleChange = (e) => {
    setInput({...input, [e.target.name] : [e.target.value]})
  }

  const history = useHistory()

  return (
    <div className='max-w-[100%] m-auto flex items-center flex-col mt-10'>
        <HeadBtn title='Verification'/>
        <div>
          <p className='max-w-[80%] m-auto text-center mt-[3rem] text-lg'>
            Check your SMS for your Verification Code as it expires in 10-15mins
          </p>
        </div>
        <div className='max-w-[70%] m-auto'>
          <h1 className='text-center mt-[2rem] mb-[1rem] text-lg font-bold'>Enter verification Code</h1>
          <div className='grid grid-cols-6 gap-[1.5rem]'>
            <input
            type="text" 
            value={input.input1}
            name='input1'
            onChange={handleChange}
            maxLength='1'
            className='outline-none text-center w-[2.5rem] h-[2.5rem] rounded-lg'
            />
            <input type="text" 
              value={input.input2}
              name='input2'
              onChange={handleChange}
              maxLength='1'
              className='outline-none text-center w-[2.5rem] h-[2.5rem] rounded-lg'
            />
            <input type="text" 
              value={input.input3}
              name='input3'
              onChange={handleChange}
              maxLength='1'
              className='outline-none text-center w-[2.5rem] h-[2.5rem] rounded-lg'
            />
            <input type="text" 
              value={input.input4}
              name='input4'
              onChange={handleChange}
              maxLength='1'
              className='outline-none text-center w-[2.5rem] h-[2.5rem] rounded-lg'
            />
            <input type="text" 
              value={input.input5}
              name='input5'
              onChange={handleChange}
              maxLength='1'
              className='outline-none text-center w-[2.5rem] h-[2.5rem] rounded-lg'
            />
            <input type="text" 
              value={input.input6}
              name='input6'
              onChange={handleChange}
              maxLength='1'
              className='outline-none text-center w-[2.5rem] h-[2.5rem] rounded-lg'
            />
          </div>
          <div className='flex items-center justify-center mt-[10rem]'>
            <button 
              className='bg-[#FF4545] px-[3rem] py-[0.7rem] rounded-lg cursor-pointer font-bold'
              onClick={(e) => {
                e.preventDefault();
                history.push("/auth");
              }}
            >
              Proceed
            </button>
          </div>
        </div>
    </div>
  )
}

export default Verification