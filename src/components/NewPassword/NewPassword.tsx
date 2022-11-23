import React, { useState } from "react";
import HeadBtn from "../HeadBtn/HeadBtn";
import NewPassImg from "../../assets/images/NewPassImg.png";

import { useHistory } from "react-router";
import AnimatedPage from "../AnimatedPage";

const NewPassword = () => {
  const [password, setPassword] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword({ ...password, [e.target.name]: [e.target.value] });
  };

  const history = useHistory()

  return (
    <AnimatedPage>
    <div className='m-auto flex items-center flex-col mt-10'>
      <HeadBtn title='New Password' />
      <div className=''>
        <img src={NewPassImg} alt='FoodImage' className='w-[100%] mt-2' />
        <h1 className='font-bold capitalize uppercase text-center text-[30px] mt-5'>
          CREATE NEW PASSWORD
        </h1>
      </div>
      <div className='grid grid-cols-1 gap-5 w-[300px] mt-3'>
        <input
          type='password'
          name='newPassword'
          value={password.newPassword}
          onChange={handlePasswordChange}
          placeholder='New Password'
          className='py-4 px-4 rounded-lg  outline-none'
        />
        <input
          type='password'
          name='confirmPassword'
          value={password.confirmPassword}
          onChange={handlePasswordChange}
          className='py-4 px-4 rounded-lg  outline-none'
          placeholder='Confirm Password'
        />
        <p className='text-[#FF4545] text-center'>
          Your new password must be different from previous used password
        </p>
        <button
          className='bg-[#FF4545] px-[3rem] py-[0.7rem] mb-10 rounded-lg cursor-pointer font-bold'
          onClick={(e) => {
            e.preventDefault();
            history.push("/auth");
          }}
        >
          Create Password
        </button>
      </div>
    </div>
    </AnimatedPage>
  );
};

export default NewPassword;
