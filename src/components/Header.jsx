import React from 'react'
import Snowfall from '../extraComponents/Snowfall';
import Navbar from './Navbar';
import myPic from '../assets/img/my-picture.png';

export default function Header() {
  return (
    <div className='w-full h-full bg-dark-gray p-40-80 relative'>
      <div className="container mx-auto w-full relative z-10">
        <Navbar />

        <header className='flex w-full h-full justify-center relative z-10'>
          <div>
            <span className='flex'>
              <h4 className='text-white'>I'M</h4>
              <h1 className='text-yellow-text text-[45px] font-poppins-medium'>Agha Naveed</h1>
            </span>
            
          </div>
          <div className='w-[85%]'>
            <img src={myPic} className='w-full' alt="Agha Naveed Image" />
          </div>
        </header>

      </div>

      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Snowfall />
      </div>
    </div>
  )
}