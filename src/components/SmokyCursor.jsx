import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

const SmokyCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [smokeParticles, setSmokeParticles] = useState([]);
  const [isHovering, setIsHovering] = useState(false);
  const particleIdRef = useRef(0);
  const lastParticleTime = useRef(0);
  const maxParticles = 20; // Limit maximum particles for performance

  // Optimize particle creation with useCallback
  const createSmokeParticle = useCallback((x, y, isBurst = false) => {
    // Limit particle count
    setSmokeParticles(prev => {
      if (prev.length >= maxParticles) {
        return prev.slice(1).concat({
          id: particleIdRef.current++,
          x,
          y,
          size: isBurst ? Math.random() * 25 + 15 : Math.random() * 20 + 10, // Smaller particles
          opacity: isBurst ? 0.4 : 0.25, // Reduced opacity
          duration: isBurst ? 1800 : 1500, // Shorter duration
          driftX: (Math.random() - 0.5) * (isBurst ? 30 : 20), // Less drift
          driftY: (Math.random() - 0.5) * (isBurst ? 30 : 20) - 15, // Less drift
          scale: isBurst ? 1.5 : 1, // Smaller scale
          color: isHovering 
            ? 'rgba(168, 85, 247, ' // Galaxy purple when hovering
            : 'rgba(96, 165, 250, ', // Galaxy blue normally
          blur: 'sm' // Consistent blur
        });
      }
      
      return [...prev, {
        id: particleIdRef.current++,
        x,
        y,
        size: isBurst ? Math.random() * 25 + 15 : Math.random() * 20 + 10,
        opacity: isBurst ? 0.4 : 0.25,
        duration: isBurst ? 1800 : 1500,
        driftX: (Math.random() - 0.5) * (isBurst ? 30 : 20),
        driftY: (Math.random() - 0.5) * (isBurst ? 30 : 20) - 15,
        scale: isBurst ? 1.5 : 1,
        color: isHovering 
          ? 'rgba(168, 85, 247, '
          : 'rgba(96, 165, 250, ',
        blur: 'sm'
      }];
    });

    // Auto-remove particle after duration
    const id = particleIdRef.current - 1;
    setTimeout(() => {
      setSmokeParticles(prev => prev.filter(p => p.id !== id));
    }, isBurst ? 1800 : 1500);
  }, [isHovering]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Create particles less frequently for better performance
      const now = Date.now();
      if (now - lastParticleTime.current > 50) { // Increased interval from 30ms to 50ms
        createSmokeParticle(e.clientX, e.clientY);
        lastParticleTime.current = now;
      }
    };

    const handleMouseDown = (e) => {
      // Create smaller burst for better performance
      for (let i = 0; i < 5; i++) { // Reduced from 8 to 5
        setTimeout(() => {
          createSmokeParticle(
            e.clientX + (Math.random() - 0.5) * 25, // Reduced spread
            e.clientY + (Math.random() - 0.5) * 25,
            true
          );
        }, i * 30);
      }
    };

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
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, [createSmokeParticle]);

  return (
    <>
      {/* Optimized Smoke Particles */}
      {smokeParticles.map(particle => (
        <motion.div
          key={particle.id}
          className="fixed pointer-events-none z-40"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
          }}
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: [0, particle.scale, particle.scale * 1.5], // Reduced final scale
            opacity: [0, particle.opacity, 0],
            x: particle.driftX,
            y: particle.driftY,
          }}
          transition={{
            duration: particle.duration / 1000,
            ease: "easeOut",
          }}
        >
          <div 
            className="w-full h-full rounded-full blur-sm"
            style={{
              background: `radial-gradient(circle, ${particle.color}${particle.opacity}) 0%, ${particle.color}${particle.opacity * 0.4}) 40%, transparent 100%)`,
              boxShadow: `0 0 ${particle.size/3}px ${particle.color}${particle.opacity * 0.3}`, // Reduced shadow
            }}
          />
        </motion.div>
      ))}

      {/* Optimized Galaxy Cursor Indicator */}
      <motion.div
        className="fixed w-2 h-2 rounded-full pointer-events-none z-50" // Smaller cursor
        style={{
          backgroundColor: isHovering ? '#a855f7' : '#60a5fa',
          boxShadow: `0 0 10px ${isHovering ? '#a855f7' : '#60a5fa'}40`, // Reduced glow
          mixBlendMode: 'screen',
        }}
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500, // Increased stiffness for better performance
          damping: 28,
          mass: 0.3,
        }}
      />

      {/* Optimized Outer Glow Ring */}
      <motion.div
        className="fixed w-6 h-6 rounded-full border-2 pointer-events-none z-30" // Smaller ring
        style={{
          borderColor: isHovering ? '#a855f7' : '#60a5fa',
          boxShadow: `0 0 15px ${isHovering ? '#a855f7' : '#60a5fa'}30`, // Reduced glow
          opacity: 0.5, // Reduced opacity
        }}
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovering ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 400, // Increased stiffness
          damping: 25,
          mass: 0.4,
        }}
      />
    </>
  );
};

export default SmokyCursor;
