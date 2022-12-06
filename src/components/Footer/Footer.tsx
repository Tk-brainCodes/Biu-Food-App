import React from "react";

import {
  IconHome2,
  IconSearch,
  IconHeart,
  IconShoppingCart,
  IconUser,
} from "@tabler/icons";

import { useHistory, useLocation } from "react-router";

const Footer = () => {
  const history = useHistory();
  const location = useLocation();

  return (
    <div className='flex items-center justify-center mt-auto gap-10 p-4 sticky bottom-0 left-0 bg-black'>
      <div
        className='cursor-pointer'
        onClick={(e) => {
          e.preventDefault();
          history.push("/MainHome");
        }}
      >
        <IconHome2
          color={`${location.pathname === "/MainHome" ? "#FF4545" : "#fff"}`}
          size={35}
        />
        <p
          style={{
            color: `${location.pathname === "/MainHome" ? "#FF4545" : "#fff"}`,
          }}
          className='text-xs text-center'
        >
          Home
        </p>
      </div>
      <div
        className='cursor-pointer'
        onClick={(e) => {
          e.preventDefault();
          history.push("/Search");
        }}
      >
        <IconSearch
          color={`${location.pathname === "/Search" ? "#FF4545" : "#fff"}`}
          size={35}
        />
        <p
          style={{
            color: `${location.pathname === "/Search" ? "#FF4545" : "#fff"}`,
          }}
          className='text-xs text-center'
        >
          Search
        </p>
      </div>
      <div
        className='cursor-pointer'
        onClick={(e) => {
          e.preventDefault();
          history.push("/Favorite");
        }}
      >
        <IconHeart
          color={`${location.pathname === "/Favorite" ? "#FF4545" : "#fff"}`}
          size={35}
        />
        <p
          style={{
            color: `${location.pathname === "/Favorite" ? "#FF4545" : "#fff"}`,
          }}
          className='text-xs text-center'
        >
          Favorites
        </p>
      </div>
      <div 
        className='cursor-pointer'
        onClick={(e) => {
          e.preventDefault();
          history.push("/Checkout");
        }}
      >
        <IconShoppingCart
          color={`${location.pathname === "/Cart" ? "#FF4545" : "#fff"}`}
          size={35}
        />
        <p
          className='text-xs text-center'
          style={{
            color: `${location.pathname === "/Cart" ? "#FF4545" : "#fff"}`,
          }}
        >
          Cart
        </p>
      </div>
      <div
        className='cursor-pointer'
        onClick={(e) => {
          e.preventDefault();
          history.push("/Account");
        }}
      >
        <IconUser
          color={`${location.pathname === "/Account" ? "#FF4545" : "#fff"}`}
          size={35}
        />
        <p
          style={{
            color: `${location.pathname === "/Account" ? "#FF4545" : "#fff"}`,
          }}
          className='text-xs text-center'
        >
          Account
        </p>
      </div>
    </div>
  );
};

export default Footer;
