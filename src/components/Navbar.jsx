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

  
  return (
    <div className='lg:flex grid lg:justify-between justify-center w-full'>
      <LogoComponent />

      <div className='flex justify-center'>
        <nav className='content-center text-text-clr text-[18.5px]'>
          <ul className='flex'>
            <li><Link to={"/"} className='px-[18px] py-[8px] !text-white'>Home</Link></li>
            <li><Link to={"/a"} className='px-[18px] py-[8px]'>Skills</Link></li>
            <li><Link to={"/b"} className='px-[18px] py-[8px]'>Projects</Link></li>
          </ul>
        </nav>

        
        <IoSearch className='block lg:hidden bg-light-gray text-text-clr text-xl p-[10px] h-[40px] w-[40px] rounded-[50%]' />
      </div>

      <div className="search-bar lg:flex hidden">
        <input ref={divRef} onClick={handleClick} type="text" placeholder='Search'
        className={`${searchWidth ? "w-[90%]" : "w-[64%]"}  h-[56px] outline-none text-[22px]`} />

        <IoSearch id='search-icon' />
      </div>

    </div>
  )
}