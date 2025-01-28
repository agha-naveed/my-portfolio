import { useState } from 'react'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { PiXLogoBold } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";

export default function SocialLogos({display, hidden, margin, responsive}) {
  let [link, setLink] = useState('')
  if(link === "fb") {
    window.open("https://facebook.com/naveedbalti31", 'Facebook Page', 'width=800, height=600').moveBy(100, 50)
  }
  else if(link === "linkedin") {
    window.open("https://www.linkedin.com/in/agha-naveed/", 'Linkedin Page', 'width=800, height=600').moveBy(100, 50)
  }
  else if(link === "x") {
    window.open("https://www.x.com/naveed-kazmi31/", 'X Page', 'width=800, height=600').moveBy(100, 50)
  }
  else if(link === "insta") {
    window.open("https://www.instagram.com/aghanaveed_/", 'Instagram Page', 'width=800, height=600').moveBy(100, 50)
  }
  else if(link === "github") {
    window.open("https://www.github.com/agha-naveed/", 'GitHub Page', 'width=800, height=600').moveBy(100, 50)
  }
  return (
    <div className={`justify-items-center content-end lg:grid ${responsive} gap-5 z-[2000] ${margin}`}>
        
        <div className={`w-[3px] h-24 bg-yellow-text ${hidden}`} ></div>

        <div className={`text-white s-m-logos text-[26px] ${display} gap-2`}>
          <div onClick={() => setLink("fb")} className='fb-logo hover-image w-10 h-10 flex justify-center items-center p-2'>
            <FaFacebookF/>
          </div>
          <div onClick={() => setLink("linkedin")} className='linkedin-logo hover-image w-10 h-10 flex justify-center items-center p-2'>
            <FaLinkedinIn/>
          </div>
          <div onClick={() => setLink("x")} className='x-logo transition-all hover:text-black hover-image w-10 h-10 flex justify-center items-center p-2'>
            <PiXLogoBold/>
          </div>
          <div onClick={() => setLink("insta")} className='insta-logo transition-all hover-image w-10 h-10 rounded-full flex justify-center items-center'>
            <FaInstagram />
          </div>
          <div onClick={() => setLink("github")} className='git-logo hover-image w-10 h-10 flex justify-center items-center p-2'>
            <FiGithub />
          </div>
        </div>
        
    </div>
  )
}
