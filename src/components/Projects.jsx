import React from 'react'
import ParticlesComponent from './ParticlesComponent'
import { Link } from 'react-router'
import ProjectPic from './ProjectPic'
import chatbot from '../assets/img/projects/chatbot.webp'
import libLms from '../assets/img/projects/lib_lms.webp'
import musicPlayer from '../assets/img/projects/music_player.webp'
import otpGen from '../assets/img/projects/otp_generator.webp'
import weatherApp from '../assets/img/project-hover-img/weather_app.webp'

export default function Projects() {
  
  

  return (
    <>
      <div id='project-section' className='project-container h-auto w-full bg-dark-gray relative -z-10'>
        
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

          <div className='flex flex-wrap md:justify-between justify-center overflow-hidden'>
              <ProjectPic data={chatbot} myClass={"chatbot"}/>
              <ProjectPic data={libLms} myClass={"lib-lms"} />
              <ProjectPic data={musicPlayer} myClass={"music-player"} />
              <ProjectPic data={otpGen} myClass={"otp-gen"} />
              <ProjectPic data={musicPlayer} myClass={"music-player"} />
              <ProjectPic data={otpGen} myClass={"otp-gen"} />
          </div>

          <div>
              <div className='mb-8 grid gap-3s'>
                <h3 className='font-poppins-semibold text-white text-4xl'>Other</h3>
                <p className='font-poppins-medium text-[18px] text-yellow-text'>Check out my other Projects:</p>
              </div>

              <div className='flex px-14'>

                <ul className='flex flex-col gap-3 w-[500px]'>
                  <li><h3 className='text-[24px] text-yellow-text font-poppins-semibold relative left-[-18px]'>Archives</h3></li>
                  <li className='list-[circle] text-white font-poppins-regular'>
                    <Link to="https://agha-naveed.github.io/weather-app/" className='z-[200] group relative hover:text-yellow-text hover-text hover:px-[10px] transition-all' target='_blank'>
                      Weather App
                      <div className='absolute top-5 left-10 w-[200px] z-[200]'>
                        <img src={weatherApp} className='w-full hidden group-hover:block' alt="Weather App Image" />
                      </div>
                    </Link>
                  </li>
                  <li className='list-[circle] text-white font-poppins-regular'>
                    <Link to="https://agha-naveed.github.io/weather-app/" className='z-[200] group relative hover:text-yellow-text hover-text hover:px-[10px] transition-all' target='_blank'>
                      Weather App
                      <div className='absolute top-5 left-10 w-[200px] z-[200]'>
                        <img src={weatherApp} className='w-full hidden group-hover:block' alt="Weather App Image" />
                      </div>
                    </Link>
                  </li>
                  <li className='list-[circle] text-white font-poppins-regular'>
                    <Link to="https://agha-naveed.github.io/weather-app/" className='z-[200] group relative hover:text-yellow-text hover-text hover:px-[10px] transition-all' target='_blank'>
                      Weather App
                      <div className='absolute top-5 left-10 w-[200px] z-[200]'>
                        <img src={weatherApp} className='w-full hidden group-hover:block' alt="Weather App Image" />
                      </div>
                    </Link>
                  </li>
                  
                </ul>
                
                <ul className='flex flex-col gap-3 w-[500px]'>
                  <li><h3 className='text-[24px] text-yellow-text font-poppins-semibold relative left-[-18px]'>Random</h3></li>
                  <li className='list-[circle] text-white font-poppins-regular'>Old Portfolio</li>
                </ul>

              </div>
          </div>

        </div>
      </div>

      <div className="relative sm:block hidden opacity-20 z-[-10]">
        <ParticlesComponent />
      </div>
    </>
  )
}