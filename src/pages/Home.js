import React from 'react'
import NavBar from '../comps/Navbar'
import { useEffect } from 'react';
import ChatBot from '../comps/Home/ChatBot';
import Content from '../comps/Home/Content';
function Home() {
  useEffect(() => {
    const HomeTab = document.getElementById("HomeTab");

    HomeTab.style.textDecoration = "underline";
  }, []);
  return (
    <div className="w-screen h-screen" id='homebg'>
      <ChatBot />
      <NavBar />
      <Content/>
    </div>
  );
}

export default Home