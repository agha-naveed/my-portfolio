import React, { useState, useRef } from 'react'
import ParticlesComponent from './ParticlesComponent'
import chatbot from '../assets/img/projects/chatbot.webp'

export default function Projects() {
  const flipBoxRef = useRef(null);
  const [transformStyles, setTransformStyles] = useState({
    rotateX: 0,
    rotateY: 0,
    shineX: 0, // Default shine position (centered)
    shineY: 0,
    scale: 1,
    boxShadow: "",
    op: 0,
  });
  const [isMoving, setIsMoving] = useState(false);
  const timeoutRef = useRef(null);
  const handleMouseMove = (e) => {
    const flipBox = flipBoxRef.current;
    if (!flipBox) return;

    const rect = flipBox.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate rotation values based on mouse position
    const rotateX = ((y / rect.height) - 0.5) * 45; // Tilt X-axis
    const rotateY = ((x / rect.width) - 0.5) * -45; // Tilt Y-axis

    // Calculate shine position
    const shineX = ((x / rect.width) * 100).toFixed(2); // Shine X as percentage
    const shineY = ((y / rect.height) * 100).toFixed(2); // Shine Y as percentage
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    // Update state with new transform styles
    setTransformStyles({
      rotateX,
      rotateY,
      shineX,
      shineY,
      scale: 1.1, // Slightly increase scale for hover effect
      boxShadow: "0 20px 35px rgba(0, 0, 0, 0.5)", // Shadow for depth
      op: 0.5, // Increase shine opacity
    });

    setIsMoving(true);

    timeoutRef.current = setTimeout(() => {
      setTransformStyles((prevStyles) => ({ ...prevStyles, op: 0 }));
      setIsMoving(false);
    }, 300);
    
  };

  const handleMouseLeave = () => {
    setTransformStyles({
      rotateX: 0,
      rotateY: 0,
      shineX: 50,
      shineY: 50,
      scale: 1,
      boxShadow: "",
      op: 0,
    });
    setIsMoving(false);
  };

  

  return (
    <>
      <div id='project-section' className='project-container h-auto w-full bg-dark-gray relative -z-10'>
        
        <div className="container mx-auto p-40-80">
        
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


          <section className='relative z-20'>
            
            <div
              ref={flipBoxRef}
              className="relative z-[200] w-72 h-92 rounded-lg overflow-hidden transition-transform duration-300 ease-out"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${transformStyles.rotateX}deg) rotateY(${transformStyles.rotateY}deg) scale(${transformStyles.scale})`,
                boxShadow: transformStyles.boxShadow,
              }}
            >
              <div
                className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 rounded-lg"
                style={{
                  background: `radial-gradient(circle at ${transformStyles.shineX}% ${transformStyles.shineY}%, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.1) 60%)`,
                  opacity: 0.2,
                  transition: "background-position 0.1s ease, opacity 0.2s ease-out",
                }}
              ></div>

                
                  <img src={chatbot} className='relative pointer-events-none w-72 z-1' alt="" />
              
              </div>

          </section>

        </div>
      </div>

      <div className="relative sm:block hidden opacity-20 z-[-10]">
        <ParticlesComponent />
      </div>
    </>
  )
}