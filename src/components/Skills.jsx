import React from 'react'

export default function Skills() {
  return (
    <div className='w-full h-full bg-light-gray p-40-80'>
      <div className="container mx-auto justify-items-center">
        <div className='w-[80%]'>
          <h1 className='text-white font-poppins-semibold text-4xl py-2'>About</h1>
          <div className='flex gap-4'>
            <span className='block h-[3px] w-[100px] bg-yellow-text relative top-[10px]'></span>
            <p className='text-white text-justify'>
              Syed Naveed Abbas is a MERN stack developer from Skardu, Pakistan, <span className='text-yellow-text'> with expertise in MongoDB, Express.js, React, and Node.js</span>. Passionate about technology, he is committed to continuous learning and staying up-to-date with new advancements. Syed's focus on creating dynamic, efficient web applications drives his growth in the ever-evolving field of <span className='text-yellow-text'> software development.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
