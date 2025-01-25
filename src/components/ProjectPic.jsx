import React, { useState, useEffect, useRef } from 'react';
import chatbot from '../assets/img/projects/chatbot.webp'

export default function ProjectPic() {
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
      shineX: 0,
      shineY: 0,
      scale: 1,
      boxShadow: "",
      op: 0,
    });
    setIsMoving(false);
  };

  return (
      <section className='relative z-20 bg-light-gray'>
        <div className='container mx-auto py-10'>
            
            
            <div
              ref={flipBoxRef}
              className="relative z-[200] w-72 h-92 rounded-lg overflow-hidden transition-transform duration-200 ease-out"
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
                }}>
              </div>
                    <img src={chatbot} className='relative pointer-events-none w-72 z-1' alt="" />
              </div>
        </div>
        
    </section>
  )
}