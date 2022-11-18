import React, { useState } from "react";
import { GoogleIcon } from "../../assets/svg";
import "./login.modules.scss";

import { useHistory } from "react-router";

const Login = () => {
  const [email, setEmail] = useState<string>("");

  const getValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
  };
 
  const history = useHistory()

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
      <p 
        className='login_forgot cursor-pointer'
        onClick={(e) => {
          e.preventDefault();
          history.push("/NewPassword");
        }}
      >Forgot Password?</p>
      <button
      onClick={(e) => {
        e.preventDefault();
        history.push("/MainHome");
      }}
      >
        LOG IN
      </button>
      <p className='login_connect'>Or connect using</p>
      <p className='login_google'>
        <GoogleIcon /> Google
      </p>
    </div>
  );
};

export default Login;
