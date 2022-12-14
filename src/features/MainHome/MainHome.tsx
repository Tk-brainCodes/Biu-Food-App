import React from "react";
import { useHistory } from "react-router";
import { MainNav, TopPicks, Footer } from "../../components";

import HomeFoodPic from "../../assets/images/HomeFoodPic.png";
import TopPick1 from "../../assets/images/TopPick1.png";
import TopPick2 from "../../assets/images/TopPick2.png";
import TopPick3 from "../../assets/images/TopPick3.png";
import AnimatedPage from "../../components/AnimatedPage";

const MainHome = () => {
  const history = useHistory();

  return (
    <AnimatedPage>
    <div className='min-h-[100vh] flex flex-col'>
      <div className='w-[90%] mx-auto'>
        <MainNav />
        <div className='flex items-center justify-center flex-col'>
          <div className='flex gap-5 mt-[2rem]'>
            <button className='py-[5px] px-[2rem] rounded-full bg-[#FF4545]'>
              Top picks
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                history.push("/Favorite");
              }}
              className='py-[5px] px-[2rem] rounded-full bg-[#D9D9D9] text-black'
            >
              Favorite
            </button>
          </div>
          <div className='mt-[2rem]'>
            <img src={HomeFoodPic} alt='' className='w-[500px]' />
          </div>
          <div className='flex items-start justify-start flex-col mb-3'>
            <h1 className='my-3 text-2xl font-bold text-[#FF4545] px-5'>
              Top Picks
            </h1>
            <TopPicks image={TopPick1} />
            <TopPicks image={TopPick2} />
            <TopPicks image={TopPick3} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </AnimatedPage>
  );
};

export default MainHome;
