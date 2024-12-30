import React, { useState, useEffect, useRef } from 'react'
import LogoComponent from '../extraComponents/Logo'
import { Link } from 'react-router'
import { IoSearch } from "react-icons/io5";

export default function Navbar() {

  const [searchWidth, setSearchWidth] = useState(false)
  const divRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setSearchWidth(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setSearchWidth(true);
  };


  const [toggleMenu, setToggleMenu] = useState(false);

  
  return (
    <div className='flex lg:flex-row flex-col lg:justify-between justify-center w-full'>
      <div className='flex justify-center'>
      <LogoComponent />
        
      <label onClick={setToggleMenu(!toggleMenu)} className="hamburger md:hidden block relative -right-28">
          <input type="checkbox" />
          <svg viewBox="0 0 32 32">
            <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </label>
      </div>


      <div className='flex justify-center'>
        
        <nav className='content-center text-text-clr md:justify-center w-full md:flex grid text-center items-center text-[18.5px]'>
        
          <ul className='flex md:flex-row flex-col lg:w-fit w-full'>
            <li className='py-2'><Link to={"/"} className='md:px-[18px] md:py-[8px] !text-white'>Home</Link></li>
            <li className='py-2'><Link to={"/a"} className='md:px-[18px] transition-all hover:text-white md:py-[8px]'>Skills</Link></li>
            <li className='py-2'><Link to={"/b"} className='md:px-[18px] transition-all hover:text-white md:py-[8px]'>Projects</Link></li>
          </ul>
        
          <IoSearch className='block lg:hidden bg-light-gray place-self-center text-text-clr text-xl p-[10px] md:mt-0 mt-2 h-[40px] w-[40px] rounded-[50%]' />
        </nav>

      </div>
      

      <div className="search-bar lg:flex hidden">
        <input ref={divRef} onClick={handleClick} type="text" placeholder='Search'
        className={`${searchWidth ? "w-[90%]" : "w-[64%]"}  h-[56px] outline-none text-[22px]`} />

        <IoSearch id='search-icon' />
      </div>

    </div>
  )
}