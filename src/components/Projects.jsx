import React from 'react'
import ParticlesComponent from './ParticlesComponent'

export default function Projects() {
  return (
    <>
      <div className='h-screen w-full bg-dark-gray relative -z-10'>
        <div className="container mx-auto">

        <h1 className='text-white font-poppins-semibold text-[38px] py-1'>Project</h1>
        
        <div className="project-section justify-items-center">
          
          <div className='project flex gap-5 w-[80%]'>
            <div className='date-bg font-poppins-regular text-white text-2xl bg-light-gray h-fit p-5 pt-6 pr-8 text-center'>2023</div>
            
            <div className='flex flex-col items-center gap-2  justify-between'>
              <div className='p-circle w-6 h-6 bg-white rounded-full'></div>
              <div className='w-1 h-[74%] bg-gray-50'></div>
            </div>

            <div>
              <h3 className='p-heading text-white font-poppins-semibold text-[26px]'>Library Management Software</h3>
              <p className='text-white font-poppins-regular'>A Java and SQL-powered library management software meticulously tracks total books, sections, and borrowing details, including fees and late charges. Seamlessly integrating new book additions, it ensures up-to-date inventory management. Efficiently handling returns, it retrieves fee and return date details using registration numbers or CNICs, while its reporting feature offers insightful analytics for informed decision-making.</p>
            </div>

          </div>
        </div>

        </div>
      </div>

      <div className="relative opacity-20 -z-10">
        <ParticlesComponent />
      </div>
    </>
  )
}