import React from 'react'
import Snowfall from '../extraComponents/Snowfall';
import Navbar from './Navbar';
import myPic from '../assets/img/my-picture.png';

export default function Header() {
  return (
    <div className='w-full h-full bg-dark-gray p-40-80 relative'>
      <div className="container mx-auto w-full relative z-10">
        <Navbar />

        <header>
          <img src={myPic} alt="Agha Naveed Image" />
        </header>

      </div>

      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Snowfall />
      </div>
    </div>
  )
}