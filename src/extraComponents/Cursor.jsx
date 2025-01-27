import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPos = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateCursorPos);

    return () => {
      window.removeEventListener('mousemove', updateCursorPos);
    };
  }, []);

  return (<>
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        width: '13px',
        height: '13px',
        borderRadius: '50%',
        backgroundColor: 'black',
        transform: `translate3d(${cursorPos.x - 10}px, ${cursorPos.y - 10}px, 0)`,
        transition: 'transform 0.1s ease-out',
        zIndex: 40000
      }}
    />
    <motion.div
      style={{
        position: 'fixed',
        top: "-13px",
        left: "-13px",
        mixBlendMode: "difference",
        pointerEvents: 'none',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: 'white',
        border: '2px solid white',
        transform: `translate3d(${cursorPos.x - 10}px, ${cursorPos.y - 10}px, 0)`,
        transition: 'transform 0.4s ease-out',
        zIndex: 4000
      }}
    /></>
    
  );
};

export default CustomCursor;
