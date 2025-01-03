import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Skills() {

  let [fMax, set_fMax] = useState(true)
  let [bMax, set_bMax] = useState(true)
  let [dMax, set_dMax] = useState(true)


  function minimize(data) {
    data(false)
  }
  function maximize(data) {
    data(true)
  }

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <div className='w-full h-auto bg-light-gray p-40-80'>
      
      <div className="container mx-auto justify-items-center">

        <section className='w-[80%] py-20'>
          <h1 className='text-white font-poppins-semibold text-[38px] py-1'>About</h1>
          <div className='flex gap-4'>
            <span className='block h-[3px] w-[120px] bg-yellow-text relative top-[10px]'></span>
            <p className='text-white text-justify text-xl'>
              Syed Naveed Abbas is a MERN stack developer from Skardu, Pakistan, <span className='text-yellow-text'> with expertise in MongoDB, Express.js, React, and Node.js</span>. Passionate about technology, he is committed to continuous learning and staying up-to-date with new advancements. Syed's focus on creating dynamic, efficient web applications drives his growth in the ever-evolving field of <span className='text-yellow-text'> software development.</span>
            </p>
          </div>
        </section>


        <section className='py-20'>

          <h1 className='text-white text-[36px] font-poppins-semibold text-center py-6'>Skills</h1>

          <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1200" className='skills-logos flex flex-wrap gap-4 justify-center'>
          
          <div className="skills-section flex flex-wrap gap-4 justify-center">

            <div className='window w-[350px] h-fit relative shadow-2xl select-none'>

              <div className="window-tab flex items-center gap-5 py-2 px-3 rounded-t-lg bg-zinc-200">

                <div className='flex gap-2'>
                  <span className='w-4 h-4 bg-red-500 rounded-full'></span>
                  <span onClick={() => set_fMax(true)} className='w-4 h-4 hover:cursor-pointer bg-orange-400 rounded-full'></span>
                  
                  <span onClick={() => set_fMax(false)} className='w-4 h-4 hover:cursor-pointer bg-green-500 rounded-full'></span>
                </div>

                <h3 className='font-poppins-semibold text-[18px]'>Front-End Development</h3>
              </div>

              <div className={`window-screen grid items-center transition-all ${fMax ? "h-auto" : "h-0"}  gap-2 py-2 px-3 rounded-b-lg bg-white`}>
                {
                    fMax ?
                    <>
                      <span>HTML</span>
                      <span>CSS</span>
                      <span>JavaScript</span>
                      <span>React Js</span>
                    </>
                    :
                    ""
                }
              </div>

            </div>


            
            <div className='window w-[350px] h-fit relative shadow-2xl select-none'>

              <div className="window-tab flex items-center gap-5 py-2 px-3 rounded-t-lg bg-zinc-200">

                <div className='flex gap-2'>
                  <span className='w-4 h-4 bg-red-500 rounded-full'></span>
                  <span onClick={() => set_bMax(true)} title='Maximize' className='w-4 h-4 hover:cursor-pointer bg-orange-400 rounded-full'></span>
                  
                  <span onClick={() => set_bMax(false)} title='Minimize' className='w-4 h-4 hover:cursor-pointer bg-green-500 rounded-full'></span>
                </div>

                <h3 className='font-poppins-semibold text-[18px]'>Back-End Development</h3>
              </div>

              <div className={`window-screen grid items-center transition-all ${bMax ? "h-auto" : "h-0"}  gap-2 py-2 px-3 rounded-b-lg bg-white`}>
                {
                    bMax ?
                    <>
                      <span>Express Js</span>
                      <span>Node Js</span>
                      <span>Python</span>
                      <span>C++</span>
                      <span>Java</span>
                    </>
                    :
                    ""
                }
              </div>

            </div>

            
            
            <div className='window w-[350px] h-fit relative shadow-2xl select-none'>

              <div className="window-tab flex items-center gap-5 py-2 px-3 rounded-t-lg bg-zinc-200">

                <div className='flex gap-2'>
                  <span className='w-4 h-4 bg-red-500 rounded-full'></span>
                  <span onClick={() => set_dMax(true)} title='Maximize' className='w-4 h-4 hover:cursor-pointer bg-orange-400 rounded-full'></span>
                  
                  <span onClick={() => set_dMax(false)} title='Minimize' className='w-4 h-4 hover:cursor-pointer bg-green-500 rounded-full'></span>
                </div>

                <h3 className='font-poppins-semibold text-[18px]'>Database</h3>
              </div>

              <div className={`window-screen grid items-center transition-all ${dMax ? "h-auto" : "h-0"}  gap-2 py-2 px-3 rounded-b-lg bg-white`}>
                {
                    dMax ?
                    <>
                      <span>MongoDB</span>
                      <span>MySQL</span>
                    </>
                    :
                    ""
                }
              </div>

            </div>


            
            
            
          </div>

            
          </div>
        </section>

      </div>
    </div>
  )
}