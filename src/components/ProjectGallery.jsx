import React from 'react'
import ProjectPic from './ProjectPic'
import chatbot from '../assets/img/projects/chatbot.webp'
import libLms from '../assets/img/projects/lib_lms.webp'
import musicPlayer from '../assets/img/projects/music_player.webp'
import otpGen from '../assets/img/projects/otp_generator.webp'

export default function ProjectGallery() {
  return (
    <div className='bg-light-gray'>
        <div className='container mx-auto py-10 justify-items-center'>
            <div className='grid grid-cols-2 gap-10'>
                <ProjectPic data={chatbot} />
                <ProjectPic data={libLms} />
                <ProjectPic data={musicPlayer} />
                <ProjectPic data={otpGen} />
            </div>
        </div>
        
    </div>
  )
}