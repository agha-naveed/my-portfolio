import React from 'react'
import ProjectPic from './ProjectPic'
import chatbot from '../assets/img/projects/chatbot.webp'
import libLms from '../assets/img/projects/lib_lms.webp'
import musicPlayer from '../assets/img/projects/music_player.webp'
import otpGen from '../assets/img/projects/otp_generator.webp'


export default function ProjectGallery() {

  return (
    <div className='bg-light-gray z-[300]'>
        <div className='container mx-auto py-10 justify-items-center'>
            <div className='flex flex-wrap md:justify-between lg:gap-y-14 justify-center lg:gap-x-20 md:gap-10 overflow-hidden'>
                <ProjectPic data={chatbot} myClass={"chatbot"}/>
                <ProjectPic data={libLms} myClass={"lib-lms"} />
                <ProjectPic data={musicPlayer} myClass={"music-player"} />
                <ProjectPic data={otpGen} myClass={"otp-gen"} />
                <ProjectPic data={musicPlayer} myClass={"music-player"} />
                <ProjectPic data={otpGen} myClass={"otp-gen"} />
            </div>
        </div>
        <div className="container mx-auto flex justify-center">
          <div>
              <h3 className='font-poppins-semibold text-white text-4xl'>Other</h3>
              <p className='font-poppins-medium text-[18px] text-yellow-text'>Check out my other Projects:</p>

              <div className='flex px-14'>

                <ul className='flex flex-col gap-3'>
                  <li><h3 className='text-[24px] text-yellow-text font-poppins-semibold relative left-[-18px]'>Archives</h3></li>
                  <li className='list-[circle] text-white font-poppins-regular'>Weather App</li>
                  <li className='list-[circle] text-white font-poppins-regular'>Twitter Clone</li>
                  <li className='list-[circle] text-white font-poppins-regular'>Password Strength Checker</li>
                </ul>
                
                <ul>
                  <li><h3 className='text-[24px] text-yellow-text font-poppins-semibold relative left-[-18px]'>Random</h3></li>
                  <li className='list-[circle] text-white font-poppins-regular'>Old Portfolio</li>
                </ul>

              </div>
            </div>
        </div>

    </div>
  )
}