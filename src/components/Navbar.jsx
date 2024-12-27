import React from 'react'
import LogoComponent from '../extraComponents/Logo'
import { Link } from 'react-router'
import { IoSearch } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className='flex justify-between w-full'>
      <LogoComponent />

      <div className='flex justify-between'>
        <nav>
          <ul className='flex'>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/a"}>Skills</Link></li>
            <li><Link to={"/b"}>Projects</Link></li>
          </ul>
        </nav>
      </div>

      <div className="search-bar flex">
        <input type="text" placeholder='Search' className='h-[56px] hover:w-full' />
        <IoSearch id='search-icon' />
      </div>

    </div>
  )
}
