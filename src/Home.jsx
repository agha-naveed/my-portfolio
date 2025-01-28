import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Cursor from './extraComponents/Cursor';
import Footer from './components/Footer';


export default function Home() {
    const [deviceType, setDeviceType] = useState('');
        
    useEffect(() => {
        const userAgent = navigator.userAgent;
        console.log(userAgent)
        if (/mobile/i.test(userAgent)) {
            setDeviceType('mobile');
        }
        else if (/tablet/i.test(userAgent)) {
            setDeviceType('tablet');
        }
        else if (/linux/i.test(userAgent) || /windows/i.test(userAgent) || /macintosh/i.test(userAgent)) {
            setDeviceType('desktop');
        } else {
            setDeviceType('Unknown');
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