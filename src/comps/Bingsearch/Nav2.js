import React from 'react'
import { Link} from 'react-router-dom';
function Nav2({ setSearchType }) {
  
  function All() {
    const searchTypeB1 = document.getElementById("searchTypeB1");
    const searchTypeB2 = document.getElementById("searchTypeB2");
    const searchTypeB3 = document.getElementById("searchTypeB3");
    setSearchType("All");
    searchTypeB1.style.textDecoration = "underline";
    searchTypeB2.style.textDecoration = "none";
    searchTypeB3.style.textDecoration = "none";
  }
  function Videos() {
    const searchTypeB1 = document.getElementById("searchTypeB1");
    const searchTypeB2 = document.getElementById("searchTypeB2");
    const searchTypeB3 = document.getElementById("searchTypeB3");
    setSearchType("Videos");
    searchTypeB2.style.textDecoration = "underline";
    searchTypeB3.style.textDecoration = "none";
    searchTypeB1.style.textDecoration = "none";
  }
  function Images() {
    const searchTypeB1 = document.getElementById("searchTypeB1");
    const searchTypeB2 = document.getElementById("searchTypeB2");
    const searchTypeB3 = document.getElementById("searchTypeB3");
    setSearchType("Images");
    searchTypeB3.style.textDecoration = "underline";
    searchTypeB2.style.textDecoration = "none";
    searchTypeB1.style.textDecoration = "none";
  }
  
  
  return (
    <div className="w-screen h-10 flex justify-center">
      <div className="w-1/2 h-full flex justify-evenly items-center" id='nav2Foundation2'>
        <button className="border hover:cursor-pointer" id='searchTypeB1' onClick={All}>All</button>
        <button className="border hover:cursor-pointer" id='searchTypeB2' onClick={Videos}>Videos</button>
        <button className="border hover:cursor-pointer" id='searchTypeB3' onClick={Images}>Images</button>
      </div>
    </div>
  );
}

export default Nav2