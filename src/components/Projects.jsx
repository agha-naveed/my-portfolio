import React from 'react'
import Model from './Model'
export default function Projects() {
  return (
    <div className='h-auto bg-dark-gray'>
      <div className="container mx-auto py-28">
        <h1 className='text-white font-poppins-semibold text-[38px] py-1 text-center'>What I Provide?</h1>
        <div className='lg:flex grid lg:gap-0 gap-10 md:p-0 p-5'>
          <div className='text-white text-xl text-justify content-center'>
            <p className='md:block hidden'>I am a skilled MERN stack developer with a passion for creating stunning, intuitive, and user-focused frontend designs. My expertise lies in building full-stack web applications using MongoDB, Express.js, React, and Node.js, enabling me to deliver robust, efficient, and scalable solutions tailored to meet diverse requirements. I have a deep appreciation for blending functionality with aesthetics, ensuring every interface I design is visually appealing and easy to navigate. By focusing on seamless user experiences and clean, maintainable code, I aim to make each project stand out in both performance and design, leaving a lasting impact on users and clients alike.</p>
            <p className='md:hidden block'>I am a passionate web developer with a strong focus on creating dynamic, user-friendly websites and applications. With expertise in modern frameworks like Next.js and React, I strive to deliver clean, efficient, and scalable code. My goal is to blend creativity with functionality, ensuring every project stands out.</p>
          </div>
          <Model />
        </div>
      </div>
    </div>
  )
}