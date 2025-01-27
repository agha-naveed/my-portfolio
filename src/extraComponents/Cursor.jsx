import React, { useEffect, useState } from 'react'

export default function Cursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorStyle, setCursorStyle] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div className="pointer-events-none">
      <div
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transform: "translate(80%, 80%)",
        }}
        className="fixed top-0 left-0 z-[4000] w-3 h-3 bg-white rounded-full mix-blend-difference"
      ></div>
    </div>
  );
}
