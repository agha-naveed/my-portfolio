import React from 'react'
import Model from './Model'
export default function Projects() {
  return (
    <div className='h-screen bg-slate-800'>
      <h1>What I Provide?</h1>
      <div className='flex'>
        <div className='text-white text-xl'>
          <p>I’m a dedicated web developer with a passion for crafting modern, responsive, and user-friendly websites. With experience in technologies like HTML, CSS, JavaScript, React, and Next.js, I focus on building scalable and efficient solutions that solve real-world problems. I thrive on creating seamless user experiences and constantly improving my skills to stay updated with the latest industry trends. My approach combines creativity, technical expertise, and attention to detail to deliver high-quality projects.</p>
        </div>
        <Model />
      </div>
    </div>
  )
}