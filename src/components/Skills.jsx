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
      
      <div className="container mx-auto relative items-center flex flex-col gap-20 py-20">

        <section className='w-[80%]'>
          <h1 className='text-white font-poppins-semibold text-[38px] py-1' data-aos="fade-up" data-aos-duration="700" >About</h1>
          <div className='flex gap-4' data-aos="fade-up" data-aos-duration="600">
            <span className='md:block hidden h-[3px] w-[120px] bg-yellow-text relative top-[10px]'></span>
            <p className='text-white text-justify text-xl'>Hi, I’m <span className='text-yellow-text'>Syed Naveed Abbas</span> from Skardu, Pakistan. I’m a passionate MERN Stack Developer with a strong foundation in technologies like <span className='text-yellow-text'> MongoDB, Express.js, React, Node.js, as well as Next.js, Bootstrap, TailwindCSS, and MySQL.</span> I’m always eager to learn and stay updated with the latest trends in the development world.</p>
          </div>
        </section>


        <section className='py-10 skills grid gap-8'>
          <h2 className='text-center text-[40px] font-poppins-semibold text-white' data-aos="fade-up" data-aos-duration="600">Skills</h2>

          <div className='skills-pic flex flex-wrap gap-5 justify-center' data-aos="fade-up" data-aos-duration="1000">
            <div className='md:w-52 md:h-52 w-36 h-36 flex flex-col justify-center items-center bg-skills-bg gap-4 rounded-xl relative'>
              <img src={html} alt="HTML" className='w-[26%] z-10' />
              <span className='font-poppins-regular text-white md:text-xl z-10'>HTML</span>
            </div>
            <div className='md:w-52 md:h-52 w-36 h-36 flex flex-col justify-center items-center bg-skills-bg gap-4 rounded-xl'>
              <img src={css} alt="CSS" className='w-[26%] z-10' />
              <span className='font-poppins-regular text-white md:text-xl z-10'>CSS</span>
            </div>
            <div className='md:w-52 md:h-52 w-36 h-36 flex flex-col justify-center items-center bg-skills-bg gap-4 rounded-xl'>
              <img src={js} alt="JavaScript" className='w-[26%] z-10' />
              <span className='font-poppins-regular text-white md:text-xl z-10'>JavaScript</span>
            </div>
            <div className='md:w-52 md:h-52 w-36 h-36 flex flex-col justify-center items-center bg-skills-bg gap-4 rounded-xl'>
              <img src={bootstrap} alt="Bootstrap" className='w-[26%] z-10' />
              <span className='font-poppins-regular text-white md:text-xl z-10'>Bootstrap</span>
            </div>
            <div className='md:w-52 md:h-52 w-36 h-36 flex flex-col justify-center items-center bg-skills-bg gap-4 rounded-xl'>
              <img src={tailwind} alt="Tailwind" className='w-[26%] z-10' />
              <span className='font-poppins-regular text-white md:text-xl z-10'>Tailwind</span>
            </div>
            <div className='md:w-52 md:h-52 w-36 h-36 flex flex-col justify-center items-center bg-skills-bg gap-4 rounded-xl'>
              <img src={react} alt="React Js" className='w-[26%] z-10' />
              <span className='font-poppins-regular text-white md:text-xl z-10'>React Js</span>
            </div>
            <div className='md:w-52 md:h-52 w-36 h-36 flex flex-col justify-center items-center bg-skills-bg gap-4 rounded-xl'>
              <img src={nextjs} alt="Next Js" className='w-[26%] z-10' />
              <span className='font-poppins-regular text-white md:text-xl z-10'>Next Js</span>
            </div>
            <div className='md:w-52 md:h-52 w-36 h-36 flex flex-col justify-center items-center bg-skills-bg gap-4 rounded-xl'>
              <img src={expressjs} alt="Express Js" className='w-[26%] z-10' />
              <span className='font-poppins-regular text-white md:text-xl z-10'>Express Js</span>
            </div>
            <div className='md:w-52 md:h-52 w-36 h-36 flex flex-col justify-center items-center bg-skills-bg gap-4 rounded-xl'>
              <img src={nodejs} alt="Node Js" className='w-[26%] z-10' />
              <span className='font-poppins-regular text-white md:text-xl z-10'>Node Js</span>
            </div>
            <div className='md:w-52 md:h-52 w-36 h-36 flex flex-col justify-center items-center bg-skills-bg gap-4 rounded-xl'>
              <img src={mongodb} alt="MongoDB" className='w-[26%] z-10' />
              <span className='font-poppins-regular text-white md:text-xl z-10'>MongoDB</span>
            </div>
            <div className='md:w-52 md:h-52 w-36 h-36 flex flex-col justify-center items-center bg-skills-bg gap-4 rounded-xl'>
              <img src={mysql} alt="MySQL" className='w-[26%] z-10' />
              <span className='font-poppins-regular text-white md:text-xl z-10'>MySQL</span>
            </div>
            <div className='md:w-52 md:h-52 w-36 h-36 flex flex-col justify-center items-center bg-skills-bg gap-4 rounded-xl'>
              <img src={python} alt="Python" className='w-[26%] z-10' />
              <span className='font-poppins-regular text-white md:text-xl z-10'>Python</span>
            </div>
            <div className='md:w-52 md:h-52 w-36 h-36 flex flex-col justify-center items-center bg-skills-bg gap-4 rounded-xl'>
              <img src={photoshop} alt="Photoshop" className='w-[26%] z-10' />
              <span className='font-poppins-regular text-white md:text-xl z-10'>Photoshop</span>
            </div>
            <div className='md:w-52 md:h-52 w-36 h-36 flex flex-col justify-center items-center bg-skills-bg gap-4 rounded-xl'>
              <img src={cpp} alt="C++" className='w-[26%] z-10' />
              <span className='font-poppins-regular text-white md:text-xl z-10'>C++</span>
            </div>
            <div className='md:w-52 md:h-52 w-36 h-36 flex flex-col justify-center items-center bg-skills-bg gap-4 rounded-xl'>
              <img src={java} alt="Java" className='w-[26%] z-10' />
              <span className='font-poppins-regular text-white md:text-xl z-10'>Java</span>
            </div>
            <div className='md:w-52 md:h-52 w-36 h-36 flex flex-col justify-center items-center bg-skills-bg gap-4 rounded-xl'>
              <img src={wordpress} alt="Wordpress" className='w-[26%] z-10' />
              <span className='font-poppins-regular text-white md:text-xl z-10'>Wordpress</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}