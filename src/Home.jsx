import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Cursor from './extraComponents/Cursor';
import Footer from './components/Footer';
import { Link } from 'react-router';


export default function Home() {
    const [deviceType, setDeviceType] = useState('no-pc');
    const [showMenu, setShowMenu] = useState(false);
    
      useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 50) {
            setShowMenu(true);
          } else {
            setShowMenu(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
        
    useEffect(() => {
        const userAgent = navigator.userAgent;
        if (/linux/i.test(userAgent) || /windows/i.test(userAgent) || /macintosh/i.test(userAgent)) {
            setDeviceType('desktop');
        }
    }, [])

    return (
        <div className='w-full md:h-full'>
            <ul className={`flex md:flex-row flex-col lg:w-fit w-full fixed text-black z-[1000] ${showMenu ? "top-5" : "-top-full"} left-1/2 -translatex-1/2 transition-all bg-white px-3 py-2 rounded-lg`}>
                <li className='py-2'><Link to={"/"} className='hover-text md:px-[18px] md:py-[8px]'>Home</Link></li>
                <li className='py-2'><Link to={"/a"} className='hover-text md:px-[18px] transition-all  md:py-[8px]'>Skills</Link></li>
                <li className='py-2'><Link to={"/#project-section"} className='hover-text md:px-[18px] transition-all md:py-[8px]'>Projects</Link></li>
            </ul>
            
            <div className={`${deviceType == "desktop" ? "block" : "hidden"}`}>
                <Cursor />
            </div>
            <Header />
            <Skills />
            <Projects />
            <Footer />
        </div>
    )
}