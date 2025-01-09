import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { PiXLogoBold } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";

export default function SocialLogos() {
  return (
    <div className='justify-items-center content-end grid gap-5 ml-10'>
        <div className='w-[3px] h-24 bg-yellow-text'></div>
        <div className='text-white text-[27px] grid gap-5'>
            <FaFacebookF className='transition-all cursor-pointer hover:text-[#316FF6]' />
            <FaLinkedinIn className='transition-all cursor-pointer hover:text-[#0077B5]' />
            <PiXLogoBold className='transition-all cursor-pointer hover:text-black' />
            <FaInstagram className='"' />
            <FiGithub className='' />
        </div>
    </div>
  )
}
