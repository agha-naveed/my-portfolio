import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import html from '../assets/img/skills-logo/html-logo.svg'
import css from '../assets/img/skills-logo/css-logo.svg'
import js from '../assets/img/skills-logo/javascript-logo.svg'
import bootstrap from '../assets/img/skills-logo/bootstrap-logo.svg'
import tailwind from '../assets/img/skills-logo/tailwind-logo.svg'
import react from '../assets/img/skills-logo/react.svg'
import express from '../assets/img/skills-logo/express.svg'
import nodejs from '../assets/img/skills-logo/nodejs.svg'
import mysql from '../assets/img/skills-logo/mysql.svg'
import mongodb from '../assets/img/skills-logo/mongo.svg'
import python from '../assets/img/skills-logo/python.svg'
import cpp from '../assets/img/skills-logo/cpp.svg'
import java from '../assets/img/skills-logo/java.svg'
import photoshop from '../assets/img/skills-logo/photoshop.svg'
import wordpress from '../assets/img/skills-logo/wordpress.svg'

export default function Skills() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='w-full h-auto bg-light-gray p-40-80'>
      
      <div className="container mx-auto justify-items-center">

        <section className='w-[80%] py-20'>
          <h1 className='text-white font-poppins-semibold text-[38px] py-1'>About</h1>
          <div className='flex gap-4'>
            <span className='block h-[3px] w-[120px] bg-yellow-text relative top-[10px]'></span>
            <p className='text-white text-justify text-xl'>
              Syed Naveed Abbas is a MERN stack developer from Skardu, Pakistan, <span className='text-yellow-text'> with expertise in MongoDB, Express.js, React, and Node.js</span>. Passionate about technology, he is committed to continuous learning and staying up-to-date with new advancements. Syed's focus on creating dynamic, efficient web applications drives his growth in the ever-evolving field of <span className='text-yellow-text'> software development.</span>
            </p>
          </div>
        </section>


        <section className='py-20'>

          <h1 className='text-white text-[36px] font-poppins-semibold text-center py-6'>Skills</h1>

          <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1200" className='skills-logos flex flex-wrap gap-4 justify-center'>
          
          <div className="skills-section">
            <div className='window w-[350px]'>
              <div className="window-tab flex items-center gap-5 py-2 px-3 rounded-lg bg-white">

                <div className='flex gap-2'>
                  <span className='w-4 h-4 bg-red-500 rounded-full'></span>
                  <span className='w-4 h-4 bg-orange-400 rounded-full'></span>
                  <span className='w-4 h-4 bg-green-500 rounded-full'></span>
                </div>

                <h3 className='font-poppins-semibold text-[18px]'>Front-End Development</h3>
              </div>
              <div className="window-screen">

              </div>
            </div>
          </div>

            
          </div>
        </section>

      </div>
    </div>
  )
}