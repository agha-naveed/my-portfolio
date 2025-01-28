import React from 'react'
import Snowfall from '../extraComponents/Snowfall';
import Navbar from './Navbar';
import myPic from '../assets/img/my-picture.png';
import { Link } from 'react-router';
import SocialLogos from '../extraComponents/SocialLogos';
export default function Header() {

  return (

    <div className='w-full h-auto bg-dark-gray justify-items-center p-40-80 relative'>
      <div className="container mx-auto w-full relative grid gap-5 z-10">
        
        <Navbar />

        <header className='lg:w-[95%] md:p-0 p-10 w-full h-full justify-center lg:flex grid relative z-10'>
          
          <div data-aos="fade-up-right" data-aos-duration="600" className='grid content-center place-self-center'>
            <span className='flex place-self-center'>
              <h4 className='text-white font-poppins-light md:text-2xl text-xl'>I'M</h4>
              <h1 className='text-yellow-text lg:text-[60px] md:text-[40px] text-[34px] font-poppins-medium lg:w-[90%] w-full'>Agha Naveed</h1>
            </span>


            <span>
              <h3 className='hover-text text-white font-poppins-regular md:text-[32px] text-[25px] lg:text-left text-center mb-8'>Web Developer / Programmer</h3>
            </span>
            
            <Link className='contact-btn w-fit md:place-self-start justify-self-center relative overflow-hidden hover:text-[#272829] z-30 border-[5px] border-yellow-text font-poppins-regular text-yellow-text md:text-[22px] text-[22px] rounded-lg px-6 py-3 mt-5 grid hover-text'>Contact Me</Link>
            
          </div>
          
          <div data-aos="fade-up-left" data-aos-duration="600" className='w-fit place-items-center'>
            <img src={myPic} decoding='async' className='md:w-full w-[90%] relative top-[40px]' alt="Agha Naveed Image" />
          </div>

          
          <SocialLogos display = "grid" hidden = "block" margin = "ml-10" />

        </header>

      </div>

      <div className="md:block hidden absolute top-0 left-0 w-full z-0">
        <Snowfall />
      </div>
    </div>
  )
}