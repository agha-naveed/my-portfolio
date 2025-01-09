import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { PiXLogoBold } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";

export default function SocialLogos() {
  return (
    <div className='justify-items-center content-end grid gap-5 ml-10'>
        <div className='w-[3px] h-24 bg-yellow-text'></div>

        <div className='text-white s-m-logos text-[26px] grid gap-5'>
          <div className='transition-all cursor-pointer w-10 h-10 rounded-full justify-items-center p-2 hover:bg-[#316FF6]'>
            <FaFacebookF/>
          </div>
          <div className='transition-all cursor-pointer hover:bg-[#0077B5] w-10 h-10 rounded-full flex justify-center items-center'>
            <FaLinkedinIn/>
          </div>
          <div className='transition-all cursor-pointer w-10 h-10 rounded-full flex justify-center items-center'>
            <PiXLogoBold/>
          </div>
          <div className='insta-div transition-all cursor-pointer w-10 h-10 rounded-full flex justify-center items-center'>
            <FaInstagram />
          </div>
          <div className='transition-all cursor-pointer hover:bg-black hover:text-white pt-2 w-10 h-10 rounded-full flex justify-center items-center'>
            <FiGithub />
          </div>
        </div>
    </div>
  )
}
