import React, { useState, useEffect } from "react";
import "./home.modules.scss";
import { SplashLogo, ThemeLogo } from "../../../assets/svg";
import { useHistory } from "react-router";

const SplashScreen = () => {
  return (
    <div className='homepage_splashscreen'>
      <SplashLogo className='homepage_splashscreen_animate' />
    </div>
  );
};

const HomepageScreen = () => {
  const [loadingScreen, setLoadingScreen] = useState<Boolean>(true);
  const history = useHistory();


  useEffect(() => {
    setTimeout(() => {
      setLoadingScreen(false);
    }, 2000);
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
            <button
              className='homepage_container_text_btn'
              onClick={(e) => {
                e.preventDefault();
                history.push("/auth");
              }}
            >
              GET STARTED
            </button>
            <p>
              {/* <span
                onClick={(e) => {
                  e.preventDefault();
                  history.push("/auth");
                }}
              > 
                Sign Up
              </span> */}
              Get started with Food Vendors
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomepageScreen;
