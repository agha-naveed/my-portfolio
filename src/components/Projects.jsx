import React, { useEffect, useState } from 'react'
import ParticlesComponent from './ParticlesComponent'
import ProjectPic from './ProjectPic'
import chatbot from '../assets/img/projects/chatbot.webp'
import libLms from '../assets/img/projects/lib_lms.webp'
import musicPlayer from '../assets/img/projects/music_player.webp'
import otpGen from '../assets/img/projects/otp_generator.webp'
import OtherProject from '../extraComponents/OtherProject'
import ProjectDetail from '../extraComponents/ProjectDetail'

export default function Projects() {
  const [projectName, setProjectName] = useState('')
  const names = [chatbot, libLms, musicPlayer, otpGen]
  useEffect(() => {
    names.map((item) => {
      console.log(item)
    })
  }, [])
  return (
    <>
      <div id='project-section' className='project-container h-auto w-full bg-dark-gray relative'>
        
        <div className="container mx-auto p-40-80 grid gap-20">
        
          <div className="project-section grid gap-16 justify-items-center container mx-auto md:py-14 md:px-0 p-5">

            <h1 data-aos="fade-up" data-aos-duration="600" className='z-10 text-white font-poppins-semibold relative top-5 text-[38px] py-1'>Project</h1>
            
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top-bottom" className='project z-10 flex md:flex-row flex-col gap-5 lg:w-[75%]'>
              <div className='date-bg font-poppins-regular text-white text-2xl bg-light-gray h-fit p-5 pt-6 pr-8 text-center md:w-auto w-fit'>2023</div>
              
              <div className='lg:flex flex-col hidden items-center gap-2  justify-between'>
                <div className='p-circle w-6 h-6 bg-white rounded-full'></div>
                <div className='w-1 h-[74%] bg-zinc-500'></div>
              </div>

              <div className='grid gap-2'>
                <h3 className='p-heading text-white font-poppins-semibold text-[26px]'>Library Management Software</h3>
                <p className='text-white font-poppins-regular text-justify text-[18px]'>A Java and SQL-powered library management software meticulously tracks total books, sections, and borrowing details, including fees and late charges. Seamlessly integrating new book additions, it ensures up-to-date inventory management. Efficiently handling returns, it retrieves fee and return date details using registration numbers or CNICs, while its reporting feature offers insightful analytics for informed decision-making.</p>
              </div>

            </div>
          
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top-bottom" className='project z-10 flex md:flex-row flex-col gap-5 lg:w-[75%]'>
              <div className='date-bg font-poppins-regular text-white text-2xl bg-light-gray h-fit p-5 pt-6 pr-8 text-center md:w-auto w-fit'>2024</div>
              
              <div className='lg:flex flex-col hidden items-center gap-2  justify-between'>
                <div className='p-circle w-6 h-6 bg-white rounded-full'></div>
                <div className='w-1 h-[74%] bg-zinc-500'></div>
              </div>

              <div className='grid gap-2'>
                <h3 className='p-heading text-white font-poppins-semibold text-[26px]'>Real Estate Agency Web App</h3>
                <p className='text-white font-poppins-regular text-[18px] text-justify'>This Real Estate Agency Web App allows users to manage buyer, seller, and property details, as well as generate invoices, track payments, and issue receipt vouchers. Built with React.js, Express.js, Node.js, and MySQL, it offers an efficient and automated solution for real estate agencies to streamline their operations. The app ensures seamless user experience and reliable data management for better business workflow.</p>
              </div>

            </div>

            <div data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top-bottom" className='project z-10 flex md:flex-row flex-col gap-5 lg:w-[75%]'>
              <div className='date-bg font-poppins-regular text-white text-2xl bg-light-gray h-fit p-5 pt-6 pr-8 text-center md:w-auto w-fit'>2024</div>
              
              <div className='lg:flex flex-col hidden items-center gap-2  justify-between'>
                <div className='p-circle w-6 h-6 bg-white rounded-full'></div>
                <div className='w-1 h-[74%] bg-zinc-500'></div>
              </div>

              <div className='grid gap-2'>
                <h3 className='p-heading text-white font-poppins-semibold text-[26px]'>Music Player</h3>
                <p className='text-white font-poppins-regular text-[18px] text-justify'>This Music Player is built using key DSA concepts like Stack, Linked List, Linear Search, and Bubble Sort to enhance performance and functionality. The app offers multiple playlists, allowing users to organize, shuffle, and play their music seamlessly. By leveraging efficient data structures and algorithms, it ensures fast track management, quick searches, and smooth navigation, providing an optimized and responsive user experience.</p>
              </div>

            </div>

          </div>

          <div className='flex flex-wrap lg:justify-between relative z-[200] justify-center overflow-hidden'>
            {/* <div className={`fixed ${projectName ? "left-0" : "left-full"} c-trans top-0 z-[4000000]`}>
              <ProjectDetail value={projectName} />
            </div> */}
            {
              names.map((item, idx) => {
                return (
                <div key={`project-${idx}`} onClick={() => setProjectName(`${item}`)}>
                  <ProjectPic data={item} myClass={`${item}`} />
                </div>
                )
              })
            }
          </div>

          <div className='px-10 md:pt-10 md:pb-44 py-28'>
              <div className='mb-8 grid gap-3'>
                <h3 className='font-poppins-semibold text-white text-4xl'>Other</h3>
                <p className='font-poppins-medium text-[18px] text-yellow-text'>Check out my other Projects:</p>
              </div>

              <div className='md:px-14 px-4'>
                <OtherProject />
              </div>
          </div>

        </div>
      </div>

      <div className="relative sm:block hidden opacity-20">
        <ParticlesComponent />
      </div>
    </>
  )
}