import React, { useState } from "react";
import { GoogleIcon } from "../../assets/svg";
import "./login.modules.scss";

const Login = () => {
  const [email, setEmail] = useState<string>("");

  const getValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
  };

  return (
    <div className='login'>
      <div className='login_imagecontainer' />
      <input
        type='password'
        name='password'
        placeholder='password'
        className='login_input'
        value={email}
        onChange={getValue}
      />
      <p className='login_forgot'>Forgot Password?</p>
      <button>LOG IN</button>
      <p className='login_connect'>Or connect using</p>
      <p className='login_google'>
        <GoogleIcon /> Google
      </p>
    </div>
  );
};

export default Login;
