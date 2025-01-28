import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { PiXLogoBold } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";

export default function SocialLogos({display, hidden, margin}) {
  return (
    <div className={`justify-items-center content-end lg:grid hidden gap-5 ${margin}`}>
        
        <div className={`w-[3px] h-24 bg-yellow-text ${hidden}`} ></div>

        <div className={`text-white s-m-logos text-[26px] ${display} gap-2`}>
          <div className='fb-logo hover-image w-10 h-10 flex justify-center items-center p-2'>
            <FaFacebookF/>
          </div>
          <div className='linkedin-logo hover-image w-10 h-10 flex justify-center items-center p-2'>
            <FaLinkedinIn/>
          </div>
          <div className='x-logo transition-all hover:text-black hover-image w-10 h-10 flex justify-center items-center p-2'>
            <PiXLogoBold/>
          </div>
          <div className='insta-logo transition-all hover-image w-10 h-10 rounded-full flex justify-center items-center'>
            <FaInstagram />
          </div>
          <div className='git-logo hover-image w-10 h-10 flex justify-center items-center p-2'>
            <FiGithub />
          </div>
        </div>
    </div>
  )
}
