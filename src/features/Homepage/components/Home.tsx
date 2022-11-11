import React, { useState, useEffect } from "react";
import "./home.modules.scss";
import { SplashLogo, ThemeLogo } from "../../../assets/svg";

const SplashScreen = () => {
  return (
    <div className='homepage_splashscreen'>
      <SplashLogo className='homepage_splashscreen_animate' />
    </div>
  );
};

const HomepageScreen = () => {
  const [loadingScreen, setLoadingScreen] = useState(true);
  const [value, setValue] = useState("");

  const getValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);
    console.log(value);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoadingScreen(false);
    }, 4000);
  }, []);

  return (
    <div className='homepage'>
      {loadingScreen ? (
        <SplashScreen />
      ) : (
        <div className='homepage_container'>
          <div className='homepage_container_wrapper'>
            <ThemeLogo />
          </div>
          <div className='homepage_container_text'>
            {value.length > 11 ? (
              <p className='homepage_container_text_error'>
                Incorrect phone number
              </p>
            ) : (
              ""
            )}

            <input
              id='input'
              value={value}
              onChange={getValue}
              type='tel'
              className='homepage_container_text_phoneinput'
              placeholder='NGN |+234'
            />
            <button className='homepage_container_text_btn'>GET STARTED</button>
            <p>
              <span>Sign Up</span> get started with Food Vendors
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomepageScreen;
