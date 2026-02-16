import React, { useEffect, useState, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';

const GalaxyOverlay = () => {
  const [nebulaClouds, setNebulaClouds] = useState([]);
  const canvasRef = useRef(null);

  // Use useMemo to optimize star generation
  const stars = useMemo(() => {
    const starArray = [];
    for (let i = 0; i < 150; i++) { // Reduced from 300 to 150
      starArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5, // Smaller max size
        opacity: Math.random() * 0.7 + 0.1, // Reduced opacity
        twinkleSpeed: Math.random() * 3 + 1, // Faster twinkle
        color: Math.random() > 0.7 ? '#ffffff' : 
               Math.random() > 0.5 ? '#e0e7ff' : 
               Math.random() > 0.3 ? '#c7d2fe' : '#a5b4fc'
      });
    }
    return starArray;
  }, []); // Empty dependency array means this only runs once

  // Use useMemo for shooting stars
  const shootingStars = useMemo(() => {
    const shootingArray = [];
    for (let i = 0; i < 2; i++) { // Reduced from 3 to 2
      shootingArray.push({
        id: i,
        startX: Math.random() * 100,
        startY: Math.random() * 50,
        length: Math.random() * 80 + 40, // Smaller length
        speed: Math.random() * 3 + 2, // Faster speed
        delay: Math.random() * 8 + 3 // Shorter delay
      });
    }
    return shootingArray;
  }, []);

  useEffect(() => {
    // Generate optimized nebula clouds
    const generateNebulaClouds = () => {
      const cloudArray = [];
      const colors = ['#4c1d95', '#5b21b6', '#6d28d9', '#7c3aed', '#8b5cf6'];
      for (let i = 0; i < 5; i++) { // Reduced from 8 to 5
        cloudArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 300 + 200, // Smaller size
          opacity: Math.random() * 0.1 + 0.03, // Lower opacity
          color: colors[Math.floor(Math.random() * colors.length)],
          driftSpeed: Math.random() * 0.4 + 0.2, // Faster drift
          driftDirection: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 4 + 2 // Faster pulse
        });
      }
      setNebulaClouds(cloudArray);
    };

    generateNebulaClouds();

    // Optimized cosmic dust on canvas
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Optimized cosmic dust
      const drawCosmicDust = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Reduced layers and particles
        for (let layer = 0; layer < 2; layer++) { // Reduced from 3 to 2
          for (let i = 0; i < 80; i++) { // Reduced from 150 to 80
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const size = Math.random() * 1.5; // Smaller size
            const opacity = Math.random() * 0.15 + (layer * 0.05); // Lower opacity
            const color = layer === 0 ? '#147, 197, 253' : '#196, 181, 253';
            
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${color}, ${opacity})`;
            ctx.fill();
          }
        }
      };

      drawCosmicDust();

      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawCosmicDust();
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Simplified Deep Space Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/30" />
      <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-purple-900/20" />
      
      {/* Optimized Cosmic Dust Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: 'screen' }}
      />
      
      {/* Optimized Nebula Clouds */}
      {nebulaClouds.map(cloud => (
        <motion.div
          key={cloud.id}
          className="absolute rounded-full blur-3xl"
          style={{
            left: `${cloud.x}%`,
            top: `${cloud.y}%`,
            width: `${cloud.size}px`,
            height: `${cloud.size}px`,
            backgroundColor: cloud.color,
            opacity: cloud.opacity,
            transform: 'translate(-50%, -50%)',
            mixBlendMode: 'screen'
          }}
          animate={{
            x: [0, Math.cos(cloud.driftDirection) * 40, 0], // Reduced movement
            y: [0, Math.sin(cloud.driftDirection) * 25, 0], // Reduced movement
            scale: [1, 1.1, 1], // Reduced scale variation
            opacity: [cloud.opacity, cloud.opacity * 1.2, cloud.opacity],
          }}
          transition={{
            duration: 20 / cloud.driftSpeed, // Shorter duration
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Optimized Stars */}
      {stars.map(star => (
        <motion.div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            opacity: star.opacity,
            transform: 'translate(-50%, -50%)',
            boxShadow: `0 0 ${star.size * 2}px ${star.color}` // Reduced shadow
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 0.3, star.opacity],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: star.twinkleSpeed,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Optimized Shooting Stars */}
      {shootingStars.map(star => (
        <motion.div
          key={star.id}
          className="absolute h-px bg-gradient-to-r from-transparent via-white to-transparent"
          style={{
            left: `${star.startX}%`,
            top: `${star.startY}%`,
            width: `${star.length}px`,
            transformOrigin: 'left center',
            boxShadow: '0 0 8px rgba(255, 255, 255, 0.6)' // Reduced glow
          }}
          animate={{
            x: [0, window.innerWidth],
            opacity: [0, 1, 1, 0],
            rotate: [0, 10] // Reduced rotation
          }}
          transition={{
            duration: star.speed,
            repeat: Infinity,
            repeatDelay: star.delay,
            ease: "linear"
          }}
        />
      ))}
      
      {/* Simplified Glowing Nebula Atmosphere */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-0 left-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" // Smaller
          animate={{
            scale: [1, 1.1, 1], // Reduced scale
            opacity: [0.1, 0.15, 0.1] // Reduced opacity
          }}
          transition={{
            duration: 6, // Shorter duration
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" // Smaller
          animate={{
            scale: [1, 1.2, 1], // Reduced scale
            opacity: [0.1, 0.12, 0.1] // Reduced opacity
          }}
          transition={{
            duration: 8, // Shorter duration
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-violet-600/08 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" // Smaller and lower opacity
          animate={{
            scale: [1, 1.3, 1], // Reduced scale
            opacity: [0.08, 0.1, 0.08] // Reduced opacity
          }}
          transition={{
            duration: 10, // Shorter duration
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      {/* Simplified Deep Space Vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/40" />
    </div>
  );
};

export default GalaxyOverlay;
