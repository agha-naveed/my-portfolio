import React, { useContext, useEffect, useRef, useState } from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import lib1 from '../assets/img/projects/libLms/1.webp'
import lib2 from '../assets/img/projects/libLms/2.webp'
import sevenup2 from '../assets/img/projects/sevenup/2.webp'
import sevenup1 from '../assets/img/projects/sevenup/1.webp'
import sevenup from '../assets/img/projects/sevenup.webp'
import store from '../assets/img/projects/store.webp'
import store1 from '../assets/img/projects/store/1.webp'
import store2 from '../assets/img/projects/store/2.webp'
import m_player1 from '../assets/img/projects/music_player/1.webp'
import m_player2 from '../assets/img/projects/music_player/2.webp'
import { Link } from 'react-router';
import contextJS from './context';
import closeContext from './closeContext';

export default function ProjectDetail() {
  const ref = useRef(null)
  const imgs = useRef(null)
  const titleRef = useRef(null)
  const yellowStripe = useRef(null)
  
  
  const [w, setWidth] = useState("256px")
  const {project, setProject} = useContext(contextJS)

  const {doClose, setDoClose} = useContext(closeContext)


  useEffect(() => {
    ref.current.style.width = "256px"
    setWidth("256px")
    setTimeout(() => {
      setWidth("0px")
    }, 1700)
  }, [])

  useEffect(() => {
  
    let images = imgs.current
    let titleRf = titleRef.current
    let yellowStrip = yellowStripe.current
    let exTexts = document.querySelectorAll(".eTexts")

    if(!doClose) {
      images.style.transform = "translateX(100px)"
      yellowStrip.style.left = "-100%"
      titleRf.style.opacity = 0
      images.style.opacity = 0

      exTexts.forEach((i) => {
        i.style.transform = "translateY(70px)"
        i.style.opacity = 0
      })
      
    }

    else {
      setTimeout(() => {
        images.style.opacity = 1
        images.style.transform = "translateX(0)"
        yellowStrip.style.left = "100%"
      }, 800)

      setTimeout(() => {
        titleRf.style.opacity = 1
        exTexts.forEach((i) => {
          i.style.transform = "translateY(0px)"
          i.style.opacity = 1
        })
      }, 1200)
    }
  }, [project, doClose])

  useEffect(() => {
    if(w == "0px") {
      ref.current.style.width = "0px"
    }
  }, [w])
  
  return (
    <>
      {
        // project == "/assets/sevenup-owal1RN2.webp" ?
        project == "/src/assets/img/projects/sevenup.webp" ?
        <div className='w-full min-h-full bg-black overflow-x-hidden flex relative z-[4000]'>
          <div ref={ref} className={`min-h-screen bg-yellow-text c-trans`}></div>
          <div className='p-7 flex md:flex-row flex-col-reverse gap-10 w-full overflow-x-hidden'>
            <div className='md:w-[62vw] w-full h-auto flex flex-col md:gap-20 gap-7 c-trans' ref={imgs}>
              <img src={sevenup} alt="7up Site Redesign" className='w-full' />
              <img src={sevenup2} alt="Library MS" className='w-full' />
              <img src={sevenup1} alt="Library MS" className='w-full' />
            </div>
            <div className='md:w-[36vw] w-full'>
              <button title='Go Back' className='cursor-none mt-5 mb-9 c-trans-2' onClick={() => {
                  setTimeout(() => {
                    setProject("");
                  }, 400)
                  setDoClose(false)
                }}>
                <FaArrowLeft className='cursor-none hover-text bg-yellow-text w-7 h-7 p-[6.5px] rounded-full' />
              </button>
              <div className='text-white relative overflow-hidden'>
                <div className='w-full h-9 absolute c-trans-2 bg-yellow-text' ref={yellowStripe}></div>
                <h3 className='font-poppins-semibold text-3xl text-wrap c-trans' ref={titleRef}>7up Site Redesign</h3>
                <p className='eTexts font-poppins-regular my-7 c-trans'>The 7Up website has been redesigned with dynamic elements to enhance user interaction. The 7Up can moves in response to the mouse scroll, creating a playful and engaging effect. Additionally, a smooth horizontal scroll animation powered by GSAP (GreenSock Animation Platform) adds a visually captivating navigation experience.</p>
              </div>

              <div className='eTexts text-white c-trans'>
                <h4 className='font-poppins-semibold text-2xl'>Features:</h4>
                <ol className='list-decimal pl-8 py-3 font-poppins-regular'>
                  <li className='p-1'>Cane move with Mouse Scroll</li>
                  <li className='py-1'>7up Products</li>
                  <li className='py-1'>Smooth Scroll</li>
                </ol>
              </div>

              <div className='eTexts text-white font-poppins-regular py-3 c-trans'>
                <h4 className='font-poppins-semibold text-2xl'>Technologies Used:</h4>
                <ul className='list-disc pl-8 flex flex-col gap-1 pt-3'>
                  <li><b>React:</b> for Single-Page Interactive Experience.</li>
                  <li><b>GSAP:</b> Playful touch to the Interface.</li>
                  <li><b>Locomotive Scroll:</b> Smooth Scrolling.</li>
                </ul>
              </div>

              <div className='eTexts relative w-fit overflow-hidden rounded-lg hover-text flex mt-7 c-trans'>
                <Link to={"https://7up-site-redesign.vercel.app"} target='_blank'
                className='visit-btn cursor-none border-[3px] border-yellow-text text-xl text-yellow-text font-poppins-medium px-7 rounded-lg py-2 group'>
                  <span className='relative z-30 group-hover:text-dark-gray'>
                    Visit
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        :
        // project == "/assets/store-JUvzdpkM.webp" ?
        project == "/src/assets/img/projects/store.webp" ?
        <div className='w-screen min-h-full bg-black overflow-x-hidden flex relative z-[4000]'>
          <div ref={ref} className={`h-screen bg-yellow-text c-trans`}></div>
          <div className='p-7 flex md:flex-row flex-col-reverse gap-10 w-full overflow-y-scroll overflow-x-hidden'>
            <div className='md:w-[62vw] w-full h-auto flex flex-col md:gap-20 gap-7 c-trans' ref={imgs}>
              <img src={store} alt="Lenmi Store Home UI" className='w-full' />
              <img src={store1} alt="Lenmi Store Cart UI" className='w-full' />
              <img src={store2} alt="Lenmi Store Login UI" className='w-full' />
            </div>
            <div className='md:w-[36vw] w-full'>
              <button title='Go Back' className='cursor-none mt-5 mb-9' onClick={() => {setProject(""); setDoClose(false)}}>
                <FaArrowLeft className='cursor-none hover-text bg-yellow-text w-7 h-7 p-[6.5px] rounded-full' />
              </button>
              <div className='text-white relative overflow-hidden'>
                <div className='w-full h-9 absolute c-trans-2 bg-yellow-text' ref={yellowStripe}></div>
                <h3 className='font-poppins-semibold text-3xl text-wrap c-trans' ref={titleRef}>Online Shopping Website</h3>
                <p className='eTexts font-poppins-regular my-7 c-trans'>An online shopping website offering a seamless shopping experience with product browsing, order management, and user authentication.</p>
              </div>

              <div className='eTexts text-white c-trans'>
                <h4 className='font-poppins-semibold text-2xl'>Features:</h4>
                <ol className='list-decimal pl-8 py-3 font-poppins-regular'>
                  <li className='p-1'><b>Encryption</b>
                    <ul className='list-disc pl-5 py-1'>
                      <li>Users password stores with advance encryption method.</li>
                    </ul>
                  </li>

                  <li className='py-1'><b>Product Review Option</b>
                    <ul className='list-disc pl-5 py-1'>
                      <li>Includes a product review feature that allows customers to share their feedback and rate products they've purchased.</li>
                    </ul>
                  </li>

                  <li className='py-1'><b>Advanced Search Option</b>
                    <ul className='list-disc pl-5 py-1'>
                      <li>Search functionality on Lenmi Store makes it easy for users to find exactly what they're looking for. With filters for categories, price ranges, ratings, and more, shoppers can quickly narrow down their search results. </li>
                    </ul>
                  </li>
                </ol>
              </div>

              <div className='eTexts text-white font-poppins-regular py-3 c-trans'>
                <h4 className='font-poppins-semibold text-2xl'>System Requirements:</h4>
                <ul className='list-disc pl-8 flex flex-col gap-1 pt-3'>
                  <li><b>Java:</b> Ensure Java Runtime Environment (JRE) is installed.</li>
                  <li><b>Database:</b> Requires MS Access installed with proper permissions.</li>
                  <li><b>SQL:</b> Utilizes SQL queries for database operations.</li>
                </ul>
              </div>

              <div className='eTexts relative w-fit overflow-hidden rounded-lg hover-text flex mt-7 c-trans'>
                <Link to={"https://lenmi-store.vercel.app"} target='_blank'
                className='visit-btn cursor-none border-[3px] border-yellow-text text-xl text-yellow-text font-poppins-medium px-7 rounded-lg py-2 group'>
                  <span className='relative z-30 group-hover:text-dark-gray'>
                    Visit
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        :
        // project == "/assets/music_player-C9DeQ6Rj.webp" ?
        project == "/src/assets/img/projects/music_player.webp" ?
        <div className='w-full min-h-full bg-black overflow-x-hidden flex relative z-[4000]'>
          <div ref={ref} className={`min-h-screen bg-yellow-text c-trans`}></div>
          <div className='p-7 flex md:flex-row flex-col-reverse gap-10 w-full overflow-x-hidden'>
            <div className='md:w-[62vw] w-full h-auto flex flex-col md:gap-20 gap-7 c-trans' ref={imgs}>
              <img src={m_player1} alt="Music Player" className='w-full' />
              <img src={m_player2} alt="Music Player" className='w-full' />
            </div>
            <div className='md:w-[36vw] w-full'>
              <button title='Go Back' className='cursor-none mt-5 mb-9 c-trans-2' onClick={() => {
                  setTimeout(() => {
                    setProject("");
                  }, 400)
                  setDoClose(false)
                }}>
                <FaArrowLeft className='cursor-none hover-text bg-yellow-text w-7 h-7 p-[6.5px] rounded-full' />
              </button>
              <div className='text-white relative overflow-hidden'>
                <div className='w-full h-9 absolute c-trans-2 bg-yellow-text' ref={yellowStripe}></div>
                <h3 className='font-poppins-semibold text-3xl text-wrap c-trans' ref={titleRef}>Music Player</h3>
                <p className='eTexts font-poppins-regular my-7 c-trans'>The Music Player marks a novel, web-based music application developed using HTML, CSS, and JavaScript. In this project, formidable graphical user interface is fused with some data structures and algorithms aimed at providing an efficient and pleasing music experience.</p>
              </div>

              <div className='eTexts text-white c-trans'>
                <h4 className='font-poppins-semibold text-2xl'>Features:</h4>
                <ol className='list-decimal pl-8 py-3 font-poppins-regular'>
                  <li className='p-1'><b>Stunning GUI:</b> Experience an aesthetically pleasing and interactive interface designed with modern HTML and CSS.</li>
                  <li className='py-1'><b>Advanced Data Structures:</b> Leveraging DSA concepts manages your music library efficiently, ensuring smooth playback and easy organization of your tracks.</li>
                  <li className='py-1'>Smooth Scroll</li>
                </ol>
              </div>

              <div className='eTexts text-white font-poppins-regular py-3 c-trans'>
                <h4 className='font-poppins-semibold text-2xl'>Data Structures:</h4>
                <ul className='list-disc pl-8 flex flex-col gap-1 pt-3'>
                  <li><b>Array:</b> Manages Playlists.</li>
                  <li><b>Doubly Linked List:</b> Allows easy forward and backward navigation through playlists.</li>
                  <li><b>Stack:</b> Manages and displays searched items efficiently.</li>
                  <li><b>Bubble Sort:</b> Organizes playlists with effective sorting.</li>
                </ul>
              </div>

              <div className='eTexts relative w-fit overflow-hidden rounded-lg hover-text flex mt-7 c-trans'>
                <Link to={"https://agha-naveed.github.io/music-player"} target='_blank'
                className='visit-btn cursor-none border-[3px] border-yellow-text text-xl text-yellow-text font-poppins-medium px-7 rounded-lg py-2 group'>
                  <span className='relative z-30 group-hover:text-dark-gray'>
                    Visit
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        :
        <div className='w-screen min-h-full bg-black overflow-x-hidden flex relative z-[4000]'>
          <div ref={ref} className={`h-screen bg-yellow-text c-trans`}></div>
          <div className='p-7 flex md:flex-row flex-col-reverse gap-10 w-full overflow-y-scroll overflow-x-hidden'>
            <div className='md:w-[62vw] w-full h-auto flex flex-col gap-20 c-trans' ref={imgs}>
              <img src={lib1} alt="Library MS" className='w-full' />
              <img src={lib2} alt="Library MS" className='w-full' />
            </div>
            <div className='md:w-[36vw] w-full'>
              <button title='Go Back' className='cursor-none mt-5 mb-9' onClick={() => {setProject(""); setDoClose(false)}}>
                <FaArrowLeft className='cursor-none hover-text bg-yellow-text w-7 h-7 p-[6.5px] rounded-full' />
              </button>
              <div className='text-white relative overflow-hidden'>
                <div className='w-full h-9 absolute c-trans-2 bg-yellow-text' ref={yellowStripe}></div>
                <h3 className='font-poppins-semibold text-3xl text-wrap c-trans' ref={titleRef}>Library Management System</h3>
                <p className='eTexts font-poppins-regular my-7 c-trans'>Welcome to the Library Management System (LMS) software. This application is designed to efficiently manage library operations using Java programming language, SQL for database management, and MS Access as the backend database.</p>
              </div>

              <div className='eTexts text-white c-trans'>
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

              <div className='eTexts text-white font-poppins-regular py-3 c-trans'>
                <h4 className='font-poppins-semibold text-2xl'>System Requirements:</h4>
                <ul className='list-disc pl-8 flex flex-col gap-1 pt-3'>
                  <li><b>Java:</b> Ensure Java Runtime Environment (JRE) is installed.</li>
                  <li><b>Database:</b> Requires MS Access installed with proper permissions.</li>
                  <li><b>SQL:</b> Utilizes SQL queries for database operations.</li>
                </ul>
              </div>

              <div className='eTexts relative w-fit overflow-hidden rounded-lg hover-text flex mt-7 c-trans'>
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
      }
    </>
  )
}
