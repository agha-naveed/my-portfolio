import React, { useEffect, useState, useRef } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Skills() {

  let [fMax, set_fMax] = useState(true)
  let [bMax, set_bMax] = useState(true)
  let [dMax, set_dMax] = useState(true)
  
  const [positions, setPositions] = useState([
    { x: 0, y: 0 }, // Position for the first window
    { x: 0, y: 0 }, // Position for the second window
    { x: 0, y: 0 }, // Position for the third window
  ]);
  const [isDragging, setIsDragging] = useState(false);
  const [draggedWindowIndex, setDraggedWindowIndex] = useState(null);

  const windowRefs = useRef([useRef(null), useRef(null), useRef(null)]);
  
  useEffect(() => {
    // Mouse move handler
    const handleMouseMove = (e) => {
      if (isDragging && draggedWindowIndex !== null) {
        setPositions((prevPositions) => {
          const newPositions = [...prevPositions];
          const newX = prevPositions[draggedWindowIndex].x + e.movementX;
          const newY = prevPositions[draggedWindowIndex].y + e.movementY;
          newPositions[draggedWindowIndex] = { x: newX, y: newY };
          return newPositions;
        });
      }
    };

    // Mouse up handler
    const handleMouseUp = () => {
      setIsDragging(false);
    };

    // Add event listeners for mouse move and mouse up
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, draggedWindowIndex]);

  // Start dragging when mouse is pressed down on a window
  const handleMouseDown = (e, index) => {
    setIsDragging(true);
    setDraggedWindowIndex(index);
  };

  
  
  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <div className='w-full h-auto bg-light-gray p-40-80'>
      
      <div className="container mx-auto relative justify-items-center">

        <section className='w-[80%] py-20'>
          <h1 className='text-white font-poppins-semibold text-[38px] py-1' data-aos="fade-up" data-aos-duration="700" >About</h1>
          <div className='flex gap-4' data-aos="fade-up" data-aos-duration="600">
            <span className='md:block hidden h-[3px] w-[120px] bg-yellow-text relative top-[10px]'></span>
            <p className='text-white text-justify text-xl'>
              Syed Naveed Abbas is a MERN stack developer from Skardu, Pakistan, <span className='text-yellow-text'> with expertise in MongoDB, Express.js, React, and Node.js</span>. Passionate about technology, he is committed to continuous learning and staying up-to-date with new advancements. Syed's focus on creating dynamic, efficient web applications drives his growth in the ever-evolving field of <span className='text-yellow-text'> software development.</span>
            </p>
          </div>
        </section>


        <section className='py-10 skills'>

        </section>

      </div>
    </div>
  )
}