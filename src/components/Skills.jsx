import React from 'react'
import html from '../assets/img/skills-logo/html-logo.svg'
import css from '../assets/img/skills-logo/css-logo.svg'
import js from '../assets/img/skills-logo/javascript-logo.svg'
import bootstrap from '../assets/img/skills-logo/bootstrap-logo.svg'
import tailwind from '../assets/img/skills-logo/tailwind-logo.svg'
import react from '../assets/img/skills-logo/react.svg'
import express from '../assets/img/skills-logo/express.svg'
import nodejs from '../assets/img/skills-logo/nodejs.svg'

export default function Skills() {
  return (
    <div className='w-full h-full bg-light-gray p-40-80'>
      
      <div className="container mx-auto justify-items-center">

        <section className='w-[80%]'>
          <h1 className='text-white font-poppins-semibold text-[38px] py-1'>About</h1>
          <div className='flex gap-4'>
            <span className='block h-[3px] w-[120px] bg-yellow-text relative top-[10px]'></span>
            <p className='text-white text-justify text-xl'>
              Syed Naveed Abbas is a MERN stack developer from Skardu, Pakistan, <span className='text-yellow-text'> with expertise in MongoDB, Express.js, React, and Node.js</span>. Passionate about technology, he is committed to continuous learning and staying up-to-date with new advancements. Syed's focus on creating dynamic, efficient web applications drives his growth in the ever-evolving field of <span className='text-yellow-text'> software development.</span>
            </p>
          </div>
        </section>

        <section className=''>
          <h1 className='text-white text-[38px] font-poppins-semibold'>Skills</h1>
          <div>
            <img src={html} alt="html" />
            <img src={css} alt="css" />
            <img src={js} alt="javascript" />
            <img src={bootstrap} alt="bootstrap" />
            <img src={tailwind} alt="tailwind" />
            <img src={react} alt="react.js" />
            <img src={express} alt="express.js" />
            <img src={nodejs} alt="node.js" />
          </div>
        </section>

      </div>
    </div>
  )
}
