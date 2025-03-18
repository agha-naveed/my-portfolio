import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Cursor from './extraComponents/Cursor';
import Footer from './components/Footer';
import { Link } from 'react-router';
import LogoComponent from './extraComponents/Logo';


export default function Home() {
    const [deviceType, setDeviceType] = useState('no-pc');
    const [showMenu, setShowMenu] = useState(false);
    
      useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 200) {
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
            <div className={`flex bg-menu-grad fixed text-white z-[1000] ${showMenu ? "top-0" : "-top-20"} transition-all w-full py-4 rounded-lg`}>
              <div className='w-full flex justify-between container mx-auto'>
                <LogoComponent />

                <ul className={`flex md:flex-row flex-col w-fit`}>
                    <li className='py-2'><Link to={"/"} className='hover-text md:px-[18px] md:py-[8px]'>Home</Link></li>
                    <li className='py-2'><Link to={"/a"} className='hover-text md:px-[18px] transition-all  md:py-[8px]'>Skills</Link></li>
                    <li className='py-2'><Link to={"/#project-section"} className='hover-text md:px-[18px] transition-all md:py-[8px]'>Projects</Link></li>
                </ul>
              </div>

            </div>
            
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