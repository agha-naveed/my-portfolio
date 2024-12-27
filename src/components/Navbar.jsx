import React from 'react'
import LogoComponent from '../extraComponents/Logo'
import { Link } from 'react-router'
import { IoSearch } from "react-icons/io5";

export default function navbar() {
  return (
    <div className='flex'>
      <LogoComponent />

      <nav>
        <ul className='flex'>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/a"}>Skills</Link></li>
          <li><Link to={"/b"}>Projects</Link></li>
        </ul>
      </nav>

      <div className="search-bar flex">
        <input type="text" className='h-[56px] bg-light-gray' />
        <IoSearch />
      </div>
    </div>
  )
}
