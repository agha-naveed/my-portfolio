import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { PiXLogoBold } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";

export default function SocialLogos() {
  return (
    <div className='justify-items-center content-end grid gap-5 ml-10'>
        <div className='w-[3px] h-24 bg-yellow-text'></div>
        <div className='text-white text-[27px] grid gap-5'>
          <div className='transition-all cursor-pointer w-10 h-10 rounded-full p-2 hover:bg-[#316FF6]'>
            <FaFacebookF className='hover:text-white' />
          </div>
          <div className='transition-all cursor-pointer hover:bg-[#0077B5] w-10 h-10 rounded-full flex justify-center items-center'>
            <FaLinkedinIn className='text-white' />
          </div>

            <PiXLogoBold className='transition-all cursor-pointer hover:text-black' />
            <FaInstagram className='transition-all cursor-pointer' />
            <FiGithub className='transition-all cursor-pointer' />
        </div>
    </div>
  )
}
