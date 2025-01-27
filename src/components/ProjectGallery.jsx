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
    </div>
  )
}