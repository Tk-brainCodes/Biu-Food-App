import React from "react";
import "./signup.modules.scss";

import { useHistory } from "react-router"

const Signup = () => {
  const history = useHistory()
  return (
    <div className='signup'>
      <div className='signup_input'>
        <input
          type='name'
          placeholder='Name'
          className='signup_input_customfirst'
        />
        <input
          type='email'
          placeholder='Email'
          className='signup_input_custom'
        />
        <input
          type='text'
          placeholder='Mat Number'
          className='signup_input_custom'
        />
        <input
          type='password'
          placeholder='Password'
          className='signup_input_custom'
        />
        <input
          type='password'
          placeholder='Confirm password'
          className='signup_input_custom'
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            history.push("/verification");
          }}
        >
          Create Account
        </button>
 
      </div>
    </div>
  );
};

export default Signup;
