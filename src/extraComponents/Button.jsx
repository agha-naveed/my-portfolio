import React from 'react'
import { MdCall } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";

export default function Button() {
  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      <div className='flex gap-[14px]'>
        <div className='contact-icons bg-dark-gray group flex w-fit px-[26px] py-[16px] rounded-lg gap-[12px]'>
          <MdCall className='text-white text-[26px] relative z-20 group-hover:text-[#272829] self-center' />
          <span className='text-yellow-text font-poppins-regular text-[18px] group-hover:text-[#272829] relative z-20'>+92 3408353 107</span>
        </div>
        <div className='contact-icons bg-dark-gray group flex w-fit px-[26px] py-[16px] rounded-lg gap-[12px]'>
          <IoLocationSharp className='text-white text-[24px] relative z-20 group-hover:text-[#272829] self-center' />
          <span className='text-yellow-text font-poppins-regular text-[18px] group-hover:text-[#272829] relative z-20'>Skardu, Pakistan</span>
        </div>
      </div>
      <div className='contact-icons bg-dark-gray group flex w-fit px-[26px] py-[16px] rounded-lg gap-[12px]'>
        <FaEnvelope className='text-white text-[24px] relative z-20 group-hover:text-[#272829] self-center' />
        <span className='text-yellow-text font-poppins-regular text-[18px] group-hover:text-[#272829] relative z-20'>naveedabs31@gmail.com</span>
      </div>
    </div>
  )
}