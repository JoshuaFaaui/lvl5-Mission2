import React, { useEffect, useState } from 'react'
import Navbar from '../comps/Navbar';
import Searchit from '../comps/Bingsearch/Searchit'
import Displayit from '../comps/Bingsearch/Displayit'
import Nav2 from '../comps/Bingsearch/Nav2';
import BlingStyling from '../stylings/BlingStyling.css'
function Bingsearch() {
  const [searchimages, setSearchimages] = useState([]);
  const [searchvideos, setSearchvideos] = useState([]);

  const [searchall, setSearchall] = useState([]);

  const [searchType,setSearchType] = useState('All')
  useEffect(() => {
    
    const searchTypeB1 = document.getElementById("searchTypeB1");
    searchTypeB1.style.textDecoration = "underline";
    const SearchTab = document.getElementById("SearchTab");
    SearchTab.style.textDecoration = 'underline'
  },[])
  return (
    <div className="w-screen">
      <Navbar />
      <Nav2 setSearchType={setSearchType} />
      <div className="w-full flex flex-col justify-center items-center mt-10">
        <Searchit
            setSearchimages={setSearchimages}
            setSearchvideos={setSearchvideos}
            setSearchall={setSearchall}
          />
          <Displayit
            searchimages={searchimages}
            searchvideos={searchvideos}
            searchType={searchType}
            searchall={searchall}
          />
      </div>
    </div>
  );
}

export default Bingsearch