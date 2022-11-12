import React from "react";
import "./signup.modules.scss";

const Signup = () => {
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
        <button>Create Account</button>
        <p className='signup_input_login'>
          Already have an account? <span>Login here</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;