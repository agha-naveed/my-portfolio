import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { PiXLogoBold } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";

export default function SocialLogos({display, hidden}) {
  return (
    <div className='justify-items-center content-end grid gap-5 ml-10'>
        
        <div className={`w-[3px] h-24 bg-yellow-text ${hidden}`} ></div>

        <div className={`text-white s-m-logos text-[26px] ${display} gap-2`}>
          <div className='fb-logo cursor-pointer w-10 h-10 flex justify-center items-center p-2'>
            <FaFacebookF/>
          </div>
          <div className='linkedin-logo cursor-pointer w-10 h-10 flex justify-center items-center p-2'>
            <FaLinkedinIn/>
          </div>
          <div className='x-logo transition-all hover:text-black cursor-pointer w-10 h-10 flex justify-center items-center p-2'>
            <PiXLogoBold/>
          </div>
          <div className='insta-logo transition-all cursor-pointer w-10 h-10 rounded-full flex justify-center items-center'>
            <FaInstagram />
          </div>
          <div className='git-logo cursor-pointer w-10 h-10 flex justify-center items-center p-2'>
            <FiGithub />
          </div>
        </div>
    </div>
  )
}
