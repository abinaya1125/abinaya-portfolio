import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/abinayaProfilePic.jpg';

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isHovering) {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
      }
    };

    const element = document.getElementById('about-container');
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      return () => element.removeEventListener('mousemove', handleMouseMove);
    }
  }, [isHovering]);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    }
  };

  const badges = [
    {
      text: '9.17 GPA',
      icon: 'fas fa-graduation-cap',
      className: 'bg-primary/10 text-primary'
    },
    {
      text: 'Topper of Topper (3 Years)',
      icon: 'fas fa-trophy',
      className: 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
    },
    {
      text: 'NPTEL Elite Certification',
      icon: 'fas fa-certificate',
      className: 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300'
    },
    {
      text: 'Xcelevate Certified Bootcamp Trainee',
      icon: 'fas fa-medal',
      className: 'bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300'
    }
  ];

  return (
    <section 
      id="about" 
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Mouse follower effect */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-primary/20 to-blue-500/20 blur-3xl pointer-events-none"
        animate={{
          x: mousePosition.x * window.innerWidth - 192,
          y: mousePosition.y * window.innerHeight - 192,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
      />
      
      <div id="about-container" className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={leftVariants}>
            <div className="relative">
              <motion.img
                src={profilePic}
                alt="Abinaya S"
                className="w-80 h-80 mx-auto rounded-full object-cover shadow-lg"
                whileHover={{ scale: 1.05 }}
                animate={{
                  rotateY: isHovering ? (mousePosition.x - 0.5) * 10 : 0,
                  rotateX: isHovering ? (mousePosition.y - 0.5) * -10 : 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              />
              
              <motion.div
                className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-50 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                  x: isHovering ? (mousePosition.x - 0.5) * 20 : 0,
                  y: isHovering ? (mousePosition.y - 0.5) * 20 : 0,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
          </motion.div>

          <motion.div variants={rightVariants} className="space-y-6">
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              Driven by curiosity and a commitment to engineering excellence, I'm an aspiring software engineer with a passion for building scalable and efficient backend solutions. My journey in computer science has been marked by academic excellence and hands-on experience in Java development.
            </motion.p>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              I specialize in Java programming, Spring framework, and database management, with a strong foundation in data structures and algorithms. My goal is to contribute to innovative projects that make a meaningful impact.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              variants={containerVariants}
            >
              {badges.map((badge, index) => (
                <motion.div
                  key={index}
                  className={`px-4 py-2 rounded-full font-semibold ${badge.className}`}
                  variants={badgeVariants}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)'
                  }}
                  animate={{
                    y: isHovering ? Math.sin((mousePosition.x + index) * Math.PI * 2) * 5 : 0,
                    x: isHovering ? Math.cos((mousePosition.y + index) * Math.PI * 2) * 3 : 0,
                  }}
                  transition={{ 
                    duration: 0.2,
                    type: "spring",
                    stiffness: 400,
                    damping: 25
                  }}
                >
                  <i className={`${badge.icon} mr-2`}></i>
                  {badge.text}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
