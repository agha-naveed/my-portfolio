import React from 'react'
import LogoComponent from '../extraComponents/Logo'
import { Link } from 'react-router'
import { IoSearch } from "react-icons/io5";

export default function Navbar() {
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
        <input type="text" placeholder='Search' className='h-[56px] w-[64%] hover:w-[90%] outline-none text-[22px]' />

        <IoSearch id='search-icon' />
      </div>

    </div>
  )
}
