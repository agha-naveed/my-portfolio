import React, { useState, useEffect, useRef, useContext } from 'react';
import Header from './components/Header'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Cursor from './extraComponents/Cursor';
import Footer from './components/Footer';

export default function Home() {
    const divRef = useRef(null);
    const [deviceType, setDeviceType] = useState('no-pc');
    useEffect(() => {
        const userAgent = navigator.userAgent;
        if (/linux/i.test(userAgent) || /windows/i.test(userAgent) || /macintosh/i.test(userAgent)) {
            setDeviceType('desktop');
        }
    }, [])

    return (
        <div className='w-full md:h-full'>
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