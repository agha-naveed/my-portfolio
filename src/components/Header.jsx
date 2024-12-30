import React from 'react'
import Snowfall from '../extraComponents/Snowfall';
import Navbar from './Navbar';
import myPic from '../assets/img/my-picture.png';
import { Link } from 'react-router';

export default function Header() {

  return (

    <div className='w-full h-auto bg-dark-gray justify-items-center p-40-80 relative'>
      <div className="container mx-auto w-full relative grid gap-5 z-10">
        
        <Navbar />

        <header className='lg:w-[95%] md:p-0 p-10 w-full h-full justify-center lg:flex grid relative z-10'>
          
          <div className='content-center place-self-center'>
            <span className='flex place-self-center'>
              <h4 className='text-white font-poppins-light text-2xl'>I'M</h4>
              <h1 className='text-yellow-text lg:text-[60px] text-[40px] font-poppins-medium lg:w-[90%] w-full'>Agha Naveed</h1>
            </span>


            <span>
              <h3 className='text-white font-poppins-regular text-[32px] lg:text-left text-center mb-8'>Web Developer / Programmer</h3>
            </span>

            <Link className='text-yellow-text md:text-[26px] text-[22px] border-[4px] rounded-lg border-yellow-text px-7 py-3 mt-5 justify-self-center lg:inline grid'>Contact Me</Link>
            
          </div>
          
          <div className='w-fit select-none place-items-center'>
            <img src={myPic} decoding='async' className='md:w-full w-[90%] relative top-[40px]' alt="Agha Naveed Image" />
          </div>
        </header>

      </div>

      <div className="absolute top-0 left-0 w-full z-0">
        <Snowfall />
      </div>
    </div>
  )
}