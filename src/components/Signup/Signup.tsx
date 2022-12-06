import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useHistory } from "react-router";
import { selectUserData } from "../../redux/reducers/appSelector";
import { signupUser } from "../../redux/reducers/users/userAction";
import { useSelector, useDispatch } from "react-redux";
import "./signup.modules.scss";
import AnimatedPage from "../AnimatedPage";

type FormValues = {
  name: string;
  email: string;
  matNumber: string;
  password: string;
  confimPassword: string;
};

const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { register, handleSubmit } = useForm<FormValues>();
  const { loading, error, success } = useSelector(selectUserData);
  console.log({ loading: loading, error: error, success: success });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (data.password !== data.confimPassword) {
      alert("Password mismatch");
      return; 
    }
    data.email = data.email.toLowerCase();
    data.name = data.name.toLowerCase();
    data.matNumber = data.matNumber.toLowerCase(); 
    // dispatch(signupUser(data))
  };

  return (
    <AnimatedPage>
    <div className='signup'>
      <form onSubmit={handleSubmit(onSubmit)} className='signup_input'>
        <input
          type='name'
          placeholder='Name'
          className='signup_input_customfirst'
          {...register("name")}
          required
        />
        <input
          type='email'
          placeholder='Email'
          className='signup_input_custom'
          {...register("email")}
          required
        />
        <input
          type='name'
          placeholder='Mat Number'
          className='signup_input_custom'
          {...register("matNumber")}
          required
        />
        <input
          type='password'
          placeholder='Password'
          className='signup_input_custom'
          {...register("password")}
          required
        />
        <input
          type='password'
          placeholder='Confirm password'
          className='signup_input_custom'
          {...register("confimPassword")}
          required
        />
        <input
          onClick={(e) => {
            e.preventDefault();
            history.push("/verification");
          }}
          type='submit'
          value='Create Account'
          className='signup_input_account'
        />
      </form>
    </div>
    </AnimatedPage>
  );
};

export default Signup;
