import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorType, setCursorType] = useState('default');

  useEffect(() => {
    const updateCursorPos = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnterText = () => setCursorType('text');
    const handleMouseEnterImage = () => setCursorType('image');
    const handleMouseLeave = () => setCursorType('default');

    
    const textElements = document.querySelectorAll('.hover-text');
    const imageElements = document.querySelectorAll('.hover-image');

    textElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnterText);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    imageElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnterImage);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Update cursor position on mousemove
    window.addEventListener('mousemove', updateCursorPos);

    return () => {
      // Cleanup event listeners
      textElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnterText);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      imageElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnterImage);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      window.removeEventListener('mousemove', updateCursorPos);
    };
  }, []);

  // Define cursor styles for different states
  const cursorStyles = {
    default: {
      width: '40px',
      height: '40px',
      backgroundColor: 'black',
      top: '-13px',
      left: '-13px'
    },
    text: {
      width: '60px',
      height: '60px',
      backgroundColor: 'black',
      top: '-24px',
      left: '-24px'
    },
    image: {
      width: 0,
      height: 0
    }
  };

  return (
    <>
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          borderRadius: '50%',
          backgroundColor: cursorStyles[cursorType].backgroundColor,
          width: '13px',
          height: '13px',
          transform: `translate3d(${cursorPos.x - 10}px, ${cursorPos.y - 10}px, 0)`,
          transition: 'transform 0.1s ease-out',
          zIndex: 40000,
        }}
      />
      <motion.div
        style={{
          position: 'fixed',
          top: cursorStyles[cursorType].top,
          left: cursorStyles[cursorType].left,
          mixBlendMode: 'difference',
          pointerEvents: 'none',
          width: cursorStyles[cursorType].width,
          height: cursorStyles[cursorType].height,
          borderRadius: '50%',
          opacity: 0.7,
          backgroundColor: 'white',
          border: '2px solid white',
          transform: `translate3d(${cursorPos.x - 10}px, ${cursorPos.y - 10}px, 0)`,
          transition: 'transform 0.4s ease-out, width 0.2s ease-out, height 0.2s ease-out, left 0.2s ease, top 0.2s ease',
          zIndex: 4000,
        }}
      />
    </>
  );
};

export default CustomCursor;
