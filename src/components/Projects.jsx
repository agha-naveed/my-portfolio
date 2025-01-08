import React from 'react'
import ParticlesComponent from './ParticlesComponent'

export default function Projects() {
  return (
    <>
      <div className='h-auto w-full bg-dark-gray relative -z-10'>
        <div className="container mx-auto p-40-80">

        
        <div className="project-section grid gap-16 justify-items-center container mx-auto md:p-0 p-5">

          <h1 className='text-white font-poppins-semibold text-[38px] py-1'>Project</h1>
          
          <div className='project flex md:flex-row flex-col gap-5 lg:w-[75%]'>
            <div className='date-bg font-poppins-regular text-white text-2xl bg-light-gray h-fit p-5 pt-6 pr-8 text-center md:w-auto w-fit'>2023</div>
            
            <div className='lg:flex flex-col hidden items-center gap-2  justify-between'>
              <div className='p-circle w-6 h-6 bg-white rounded-full'></div>
              <div className='w-1 h-[74%] bg-gray-50'></div>
            </div>

            <div>
              <h3 className='p-heading text-white font-poppins-semibold text-[26px]'>Library Management Software</h3>
              <p className='text-white font-poppins-regular text-justify text-[18px]'>A Java and SQL-powered library management software meticulously tracks total books, sections, and borrowing details, including fees and late charges. Seamlessly integrating new book additions, it ensures up-to-date inventory management. Efficiently handling returns, it retrieves fee and return date details using registration numbers or CNICs, while its reporting feature offers insightful analytics for informed decision-making.</p>
            </div>

          </div>
        
          <div className='project flex md:flex-row flex-col gap-5 lg:w-[75%]'>
            <div className='date-bg font-poppins-regular text-white text-2xl bg-light-gray h-fit p-5 pt-6 pr-8 text-center md:w-auto w-fit'>2023</div>
            
            <div className='lg:flex flex-col hidden items-center gap-2  justify-between'>
              <div className='p-circle w-6 h-6 bg-white rounded-full'></div>
              <div className='w-1 h-[74%] bg-gray-50'></div>
            </div>

            <div>
              <h3 className='p-heading text-white font-poppins-semibold text-[26px]'>Real Estate Agency Web App</h3>
              <p className='text-white font-poppins-regular text-[18px] text-justify'>This Real Estate Agency Web App allows users to manage buyer, seller, and property details, as well as generate invoices, track payments, and issue receipt vouchers. Built with React.js, Express.js, Node.js, and MySQL, it offers an efficient and automated solution for real estate agencies to streamline their operations. The app ensures seamless user experience and reliable data management for better business workflow.</p>
            </div>

          </div>

          <div className='project flex md:flex-row flex-col gap-5 lg:w-[75%]'>
            <div className='date-bg font-poppins-regular text-white text-2xl bg-light-gray h-fit p-5 pt-6 pr-8 text-center md:w-auto w-fit'>2023</div>
            
            <div className='lg:flex flex-col hidden items-center gap-2  justify-between'>
              <div className='p-circle w-6 h-6 bg-white rounded-full'></div>
              <div className='w-1 h-[74%] bg-gray-50'></div>
            </div>

            <div>
              <h3 className='p-heading text-white font-poppins-semibold text-[26px]'>Music Player</h3>
              <p className='text-white font-poppins-regular text-[18px] text-justify'>This Music Player is built using key DSA concepts like Stack, Linked List, Linear Search, and Bubble Sort to enhance performance and functionality. The app offers multiple playlists, allowing users to organize, shuffle, and play their music seamlessly. By leveraging efficient data structures and algorithms, it ensures fast track management, quick searches, and smooth navigation, providing an optimized and responsive user experience.</p>
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