import React, { useEffect, useRef } from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import lib1 from '../assets/img/projects/libLms/1.webp'
import lib2 from '../assets/img/projects/libLms/2.webp'
import { Link } from 'react-router';

export default function ProjectDetail() {
  const ref = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      ref.current.style.width = "0"
    }, 1600)
  }, [])
  return (
    <>
      <div className='w-screen h-screen bg-black overflow-x-hidden flex relative z-[4000000]'>
        <div ref={ref} className='w-64 h-screen bg-yellow-text c-trans'></div>
        <div className='p-7 flex gap-10 w-full overflow-y-scroll'>
          <div className='w-[62vw] h-auto flex flex-col gap-20'>
            <img src={lib1} alt="Library MS" className='w-full' />
            <img src={lib2} alt="Library MS" className='w-full' />
          </div>
          <div className='w-[36vw]'>
            <button title='Go Back' className='cursor-none mt-5 mb-9'>
              <FaArrowLeft className='cursor-none hover-text bg-yellow-text w-7 h-7 p-[6.5px] rounded-full' />
            </button>
            <div className='text-white'>
              <h3 className='font-poppins-semibold text-3xl text-wrap'>Library Management System</h3>
              <p className='font-poppins-regular my-7'>Welcome to the Library Management System (LMS) software. This application is designed to efficiently manage library operations using Java programming language, SQL for database management, and MS Access as the backend database.</p>
            </div>

            <div className='text-white'>
              <h4 className='font-poppins-semibold text-2xl'>Features:</h4>
              <ol className='list-decimal pl-8 py-3 font-poppins-regular'>
                <li className='p-1'>Login System
                  <ul className='list-disc pl-5 py-1'>
                    <li>To access the LMS, users must authenticate through a login screen. This ensures security and restricts unauthorized access.</li>
                  </ul>
                </li>

                <li className='py-1'>Dashboard
                  <ul className='list-disc pl-5 py-1'>
                    <li>Upon successful login, users are presented with a comprehensive dashboard</li>
                    <li>Library Statistics</li>
                    <li>Book Management</li>
                  </ul>
                </li>
              </ol>
            </div>

            <div className='text-white font-poppins-regular py-3'>
              <h4 className='font-poppins-semibold text-2xl'>System Requirements:</h4>
              <ul className='list-disc pl-8 flex flex-col gap-1 pt-3'>
                <li><b>Java:</b> Ensure Java Runtime Environment (JRE) is installed.</li>
                <li><b>Database:</b> Requires MS Access installed with proper permissions.</li>
                <li><b>SQL:</b> Utilizes SQL queries for database operations.</li>
              </ul>
            </div>

            <div className='relative w-fit overflow-hidden rounded-lg hover-text flex mt-7'>
              <Link to={"https://github.com/agha-naveed/library-management-system"} target='_blank'
              className='visit-btn cursor-none border-[3px] border-yellow-text text-xl text-yellow-text font-poppins-medium px-7 rounded-lg py-2 group'>
                <span className='relative z-30 group-hover:text-dark-gray'>
                  Visit
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
