import React from 'react'
import { AiOutlineShoppingCart} from "react-icons/ai";
import { BsPeople,BsSearch } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import {Link} from 'react-router-dom'
export default function Navbar() {
  const profileImage = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUlrCFvRpip5l0iAOToeYh4foeKHvs-854esNjY15KoCAniT8IHXqXMdqmRTzm9g2HMsY&usqp=CAU`;
  const SearchTab = document.getElementById("SearchTab");
  const HomeTab = document.getElementById("HomeTab");
  return (
    <div className="border-b-4 border-l-4 h-fit sticky top-0 bg-white z-10 ">
      <ul className="flex justify-between">
        <div className="flex justify-center items-center h-16 ml-3 hover:cursor-pointer">
          <img
            src={profileImage}
            alt="profileIMG"
            className="h-12 w-12 rounded-full"
          />
          <h1 className="ml-3 bold text-xl">Guest</h1>
        </div>
        <ul className="flex mt-5">
          <li className="flex ml-6 mr-6 hover:cursor-pointer" id="HomeTab">
            <Link
              to="/lvl5-Mission2"
            >
              <AiOutlineHome className="relative mt-1" />
            </Link>
            <Link
              to="/lvl5-Mission2"
              className="sm:hidden md:block hover:cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li
            className="flex ml-6 mr-6 hover:cursor-pointer hover:underline"
            id="SearchTab"
          >
            <Link to="/lvl5-Mission2/Bingsearch">
              <BsSearch className="relative mt-1" />
            </Link>
            <Link
              to="/lvl5-Mission2/Bingsearch"
              className="sm:hidden md:block hover:cursor-pointer"
            >
              Search
            </Link>
          </li>
          <li className="flex ml-6 mr-6 hover:cursor-pointer hover:underline">
            <BsPeople className="relative mt-1" />
            <label className="sm:hidden md:block hover:cursor-pointer">
              About Us
            </label>
          </li>
          <li className="flex ml-6 mr-6 hover:cursor-pointer hover:underline">
            <AiOutlineShoppingCart className="relative mt-1" />
            <label className="sm:hidden md:block hover:cursor-pointer">
              Shop
            </label>
          </li>
          <li className="flex mr-6 border pl-4 pr-4 h-7 hover:cursor-pointer hover:bg-gray-1 hover:border-black">
            Login
          </li>
        </ul>
      </ul>
    </div>
  );
}
