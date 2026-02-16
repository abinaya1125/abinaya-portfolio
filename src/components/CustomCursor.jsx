import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const cursorRef = useRef(null);
  const trailRef = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Update trail positions
      if (trailRef.current.length > 0) {
        trailRef.current.forEach((trail, index) => {
          if (trail) {
            const delay = (index + 1) * 50;
            setTimeout(() => {
              trail.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            }, delay);
          }
        });
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = (e) => {
      if (e.target.matches('a, button, input, textarea, [role="button"], .cursor-pointer')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e) => {
      if (e.target.matches('a, button, input, textarea, [role="button"], .cursor-pointer')) {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  // Create trail elements
  const createTrail = () => {
    const trails = [];
    for (let i = 0; i < 8; i++) {
      trails.push(
        <div
          key={i}
          ref={el => trailRef.current[i] = el}
          className="fixed w-2 h-2 bg-primary/30 rounded-full pointer-events-none z-50"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: `transform ${0.1 + i * 0.05}s ease-out`,
            opacity: 1 - (i * 0.12)
          }}
        />
      );
    }
    return trails;
  };

  return (
    <>
      {/* Cursor Trail */}
      {createTrail()}

      {/* Main Cursor */}
      <motion.div
        ref={cursorRef}
        className="fixed w-6 h-6 bg-primary rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovering ? 2 : 1,
          backgroundColor: isHovering ? '#2563EB' : '#3b82f6',
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
        style={{
          mixBlendMode: 'difference'
        }}
      />

      {/* Outer Ring */}
      <motion.div
        className="fixed w-10 h-10 border-2 border-primary rounded-full pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isClicking ? 0.8 : (isHovering ? 1.5 : 1),
          opacity: isHovering ? 0.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          mass: 0.8
        }}
      />

      {/* Glow Effect */}
      <motion.div
        className="fixed w-20 h-20 bg-primary/20 rounded-full pointer-events-none z-30 blur-xl"
        animate={{
          x: mousePosition.x - 40,
          y: mousePosition.y - 40,
          scale: isHovering ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
          mass: 1
        }}
      />

      {/* Click Effect */}
      {isClicking && (
        <motion.div
          className="fixed w-8 h-8 border-2 border-white rounded-full pointer-events-none z-60"
          animate={{
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            scale: [0, 2, 2.5],
            opacity: [1, 0.5, 0],
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut"
          }}
        />
      )}
    </>
  );
};

export default CustomCursor;
