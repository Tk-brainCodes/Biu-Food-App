import React from "react";
import { GoogleIcon } from "../../assets/svg";
import { useForm, SubmitHandler } from "react-hook-form";
import { useHistory } from "react-router";
import "./login.modules.scss";

type FormValues = {
  email: string;
  matNumber: string;
  password: string;
};

const Login = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='login'>
      <div className='login_imagecontainer' />
      <input
        id='input'
        type='name'
        className='login_input'
        placeholder='Mat Number'
        {...register("matNumber")}
        required
      />
      <input
        id='input'
        type='email'
        className='login_input'
        placeholder='useremail@gmail.com'
        {...register("email")}
        required
      />
      <input
        type='password'
        placeholder='password'
        className='login_input'
        {...register("password")}
        required
      />
      <p
        className='login_forgot cursor-pointer'
        onClick={(e) => {
          e.preventDefault();
          history.push("/NewPassword");
        }}
      >
        Forgot Password?
      </p>
      <input
        onClick={(e) => {
          e.preventDefault();
          history.push("/MainHome");
        }}
        className='login_submit'
        type='submit'
        value='Log in'
      />
      <p className='login_connect'>Or connect using</p>
      <p className='login_google'>
        <GoogleIcon /> Google
      </p>
    </form>
  );
};

export default Login;
