import React from 'react'
import Snowfall from '../extraComponents/Snowfall';
import Navbar from './Navbar';
import myPic from '../assets/img/my-picture.png';
import { Link } from 'react-router';

export default function Header() {
  return (

    <div className='w-full h-auto bg-dark-gray justify-items-center p-40-80 relative'>
      <div className="container mx-auto w-full relative z-10">
        <Navbar />

        <header className='lg:w-[95%] w-full h-full justify-center lg:flex grid relative z-10'>
          
          <div className='content-center place-self-center'>
            <span className='flex'>
              <h4 className='text-white font-poppins-light text-2xl'>I'M</h4>
              <h1 className='text-yellow-text text-[60px] font-poppins-medium w-[90%]'>Agha Naveed</h1>
            </span>


            <span>
              <h3 className='text-white font-poppins-regular text-[32px] mb-8'>Web Developer / Programmer</h3>
            </span>

            <Link className='text-yellow-text text-[26px] border-[4px] rounded-lg border-yellow-text px-7 py-3 mt-5 justify-self-center lg:inline grid'>Contact Me</Link>
            
          </div>
          
          <div className='w-fit select-none'>
            <img src={myPic} decoding='async' className='w-full relative top-[40px]' alt="Agha Naveed Image" />
          </div>
        </header>

      </div>

      <div className="absolute top-0 left-0 w-full z-0">
        <Snowfall />
      </div>
    </div>
  )
}