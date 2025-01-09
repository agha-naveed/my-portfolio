import React from 'react'
import { FaFacebook, FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { PiXLogoBold } from "react-icons/pi";

export default function SocialLogos() {
  return (
    <div className='justify-items-center content-end grid gap-5 ml-10'>
        <div className='w-[3px] h-24 bg-yellow-text'></div>
        <div className='text-white text-[27px] grid gap-5'>
            <FaFacebook className='transition-all cursor-pointer' />
            <FaLinkedinIn />
            <PiXLogoBold />
            <FaInstagram />
            <FaGithub />
        </div>
    </div>
  )
}
