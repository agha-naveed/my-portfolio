import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorType, setCursorType] = useState('default'); // New state to track cursor type

  useEffect(() => {
    const updateCursorPos = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnterText = () => setCursorType('text');
    const handleMouseEnterImage = () => setCursorType('image');
    const handleMouseLeave = () => setCursorType('default');

    // Add event listeners for text and image elements
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
      width: '13px',
      height: '13px',
      backgroundColor: 'black',
    },
    text: {
      width: '7px',
      height: '30px',
      backgroundColor: 'red',
      borderRadius: "2px !important"
    },
    image: {
      width: '25px',
      height: '25px',
      backgroundColor: 'red', // Red when hovering image
    },
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
          width: cursorStyles[cursorType].width,
          height: cursorStyles[cursorType].height,
          transform: `translate3d(${cursorPos.x - 10}px, ${cursorPos.y - 10}px, 0)`,
          transition: 'transform 0.1s ease-out',
          zIndex: 40000,
        }}
      />
      
      <motion.div
        style={{
          position: 'fixed',
          top: '-13px',
          left: '-13px',
          mixBlendMode: 'difference',
          pointerEvents: 'none',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: 'white',
          border: '2px solid white',
          transform: `translate3d(${cursorPos.x - 10}px, ${cursorPos.y - 10}px, 0)`,
          transition: 'transform 0.4s ease-out',
          zIndex: 4000,
        }}
      />
    </>
  );
};

export default CustomCursor;
