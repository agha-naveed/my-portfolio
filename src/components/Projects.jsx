import React from 'react'
import Model from './Model'
export default function Projects() {
  return (
    <div className='h-auto bg-dark-gray'>
      <div className="container mx-auto py-28">
        <h1 className='text-white font-poppins-semibold text-[38px] py-1 text-center'>What I Provide?</h1>
        <div className='lg:flex grid lg:gap-0 gap-10 md:p-0 p-5 overflow-hidden'>
          <div className='text-white text-xl text-justify content-center' data-aos="fade-right" data-aos-duration="1000">
            <p className='md:block hidden font-poppins-regular text-[18px]'>
            I’m a skilled <span className='text-yellow-text'> MERN stack developer </span> with a passion for creating intuitive, user-focused frontend designs. <span className='text-yellow-text'> Experienced in MongoDB, Express.js, React, and Node.js, </span> I build robust, scalable web applications that balance functionality with aesthetics. I focus on delivering seamless user experiences and clean, maintainable code, ensuring high-performance solutions that leave a lasting impact.</p>

            <p className='md:hidden block'>I am a passionate web developer with a strong focus on creating dynamic, user-friendly websites and applications. With expertise in modern frameworks like Next.js and React, I strive to deliver clean, efficient, and scalable code. My goal is to blend creativity with functionality, ensuring every project stands out.</p>
          </div>
          <div data-aos="fade-left" data-aos-duration="1000">
            <Model />
          </div>
        </div>
      </div>
    </div>
  )
}