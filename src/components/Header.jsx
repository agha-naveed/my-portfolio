import React from 'react'
import Snowfall from '../extraComponents/Snowfall';
import Navbar from './Navbar';

export default function Header() {
  return (
    <div className='w-full h-full bg-dark-gray p-40-80'>
      <div className="container mx-auto w-full">
        <Navbar />
        <Snowfall />
      </div>
    </div>
  )
}