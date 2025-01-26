import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import html from '../assets/img/skills-logo/html-logo.svg'
import css from '../assets/img/skills-logo/css-logo.svg'
import js from '../assets/img/skills-logo/javascript-logo.svg'
import bootstrap from '../assets/img/skills-logo/bootstrap-logo.svg'
import tailwind from '../assets/img/skills-logo/tailwind-logo.svg'
import react from '../assets/img/skills-logo/react.svg'
import nextjs from '../assets/img/skills-logo/nextjs.svg'
import expressjs from '../assets/img/skills-logo/express.svg'
import nodejs from '../assets/img/skills-logo/nodejs.svg'
import mysql from '../assets/img/skills-logo/mysql.svg'
import mongodb from '../assets/img/skills-logo/mongo.svg'
import photoshop from '../assets/img/skills-logo/photoshop.svg'
import python from '../assets/img/skills-logo/python.svg'
import java from '../assets/img/skills-logo/java.svg'
import wordpress from '../assets/img/skills-logo/wordpress.svg'
import cpp from '../assets/img/skills-logo/cpp.svg'


export default function Skills() {
  
  
  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <div className='w-full h-auto bg-light-gray p-40-80'>
      
      <div className="container mx-auto relative justify-items-center">

        <section className='w-[80%] py-20'>
          <h1 className='text-white font-poppins-semibold text-[38px] py-1' data-aos="fade-up" data-aos-duration="700" >About</h1>
          <div className='flex gap-4' data-aos="fade-up" data-aos-duration="600">
            <span className='md:block hidden h-[3px] w-[120px] bg-yellow-text relative top-[10px]'></span>
            <p className='text-white text-justify text-xl'>
              Syed Naveed Abbas is a MERN stack developer from Skardu, Pakistan, <span className='text-yellow-text'> with expertise in MongoDB, Express.js, React, and Node.js</span>. Passionate about technology, he is committed to continuous learning and staying up-to-date with new advancements. Syed's focus on creating dynamic, efficient web applications drives his growth in the ever-evolving field of <span className='text-yellow-text'> software development.</span>
            </p>
          </div>
        </section>


        <section className='py-10 skills'>
          <h2>Skills</h2>
          <div className='flex flex-wrap gap-5 justify-center'>
            <div className='w-52 h-52 flex flex-col justify-center items-center bg-skills-bg gap-4 rounded-xl'>
              <img src={html} alt="HTML" className='w-[26%]' />
              <span className='font-poppins-medium text-white text-xl'>HTML</span>
            </div>
            <div className='w-52 h-52 flex flex-col justify-center items-center bg-skills-bg gap-4 rounded-xl'>
              <img src={css} alt="CSS" className='w-[26%]' />
              <span className='font-poppins-medium text-white text-xl'>CSS</span>
            </div>
            <div className='w-52 h-52 flex flex-col justify-center items-center bg-skills-bg gap-4 rounded-xl'>
              <img src={js} alt="JavaScript" className='w-[26%]' />
              <span className='font-poppins-medium text-white text-xl'>JavaScript</span>
            </div>
            <div className='w-52 h-52 flex flex-col justify-center items-center bg-skills-bg gap-4 rounded-xl'>
              <img src={bootstrap} alt="Bootstrap" className='w-[26%]' />
              <span className='font-poppins-medium text-white text-xl'>Bootstrap</span>
            </div>
            <div className='w-52 h-52 flex flex-col justify-center items-center bg-skills-bg gap-4 rounded-xl'>
              <img src={tailwind} alt="Tailwind" className='w-[26%]' />
              <span className='font-poppins-medium text-white text-xl'>Tailwind</span>
            </div>
            <div className='w-52 h-52 flex flex-col justify-center items-center bg-skills-bg gap-4 rounded-xl'>
              <img src={react} alt="React Js" className='w-[26%]' />
              <span className='font-poppins-medium text-white text-xl'>React Js</span>
            </div>
            <div className='w-52 h-52 flex flex-col justify-center items-center bg-skills-bg gap-4 rounded-xl'>
              <img src={nextjs} alt="Next Js" className='w-[26%]' />
              <span className='font-poppins-medium text-white text-xl'>Next Js</span>
            </div>
            <div className='w-52 h-52 flex flex-col justify-center items-center bg-skills-bg gap-4 rounded-xl'>
              <img src={expressjs} alt="Express Js" className='w-[26%]' />
              <span className='font-poppins-medium text-white text-xl'>Express Js</span>
            </div>
            <div className='w-52 h-52 flex flex-col justify-center items-center bg-skills-bg gap-4 rounded-xl'>
              <img src={nodejs} alt="Node Js" className='w-[26%]' />
              <span className='font-poppins-medium text-white text-xl'>Node Js</span>
            </div>
            <div className='w-52 h-52 flex flex-col justify-center items-center bg-skills-bg gap-4 rounded-xl'>
              <img src={mongodb} alt="MongoDB" className='w-[26%]' />
              <span className='font-poppins-medium text-white text-xl'>MongoDB</span>
            </div>
            <div className='w-52 h-52 flex flex-col justify-center items-center bg-skills-bg gap-4 rounded-xl'>
              <img src={mysql} alt="MySQL" className='w-[26%]' />
              <span className='font-poppins-medium text-white text-xl'>MySQL</span>
            </div>
            <div className='w-52 h-52 flex flex-col justify-center items-center bg-skills-bg gap-4 rounded-xl'>
              <img src={python} alt="Python" className='w-[26%]' />
              <span className='font-poppins-medium text-white text-xl'>Python</span>
            </div>
            <div className='w-52 h-52 flex flex-col justify-center items-center bg-skills-bg gap-4 rounded-xl'>
              <img src={photoshop} alt="Photoshop" className='w-[26%]' />
              <span className='font-poppins-medium text-white text-xl'>Photoshop</span>
            </div>
            <div className='w-52 h-52 flex flex-col justify-center items-center bg-skills-bg gap-4 rounded-xl'>
              <img src={cpp} alt="C++" className='w-[26%]' />
              <span className='font-poppins-medium text-white text-xl'>C++</span>
            </div>
            <div className='w-52 h-52 flex flex-col justify-center items-center bg-skills-bg gap-4 rounded-xl'>
              <img src={java} alt="Java" className='w-[26%]' />
              <span className='font-poppins-medium text-white text-xl'>Java</span>
            </div>
            <div className='w-52 h-52 flex flex-col justify-center items-center bg-skills-bg gap-4 rounded-xl'>
              <img src={wordpress} alt="Wordpress" className='w-[26%]' />
              <span className='font-poppins-medium text-white text-xl'>Wordpress</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}