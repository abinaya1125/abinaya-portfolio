import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [typingText, setTypingText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    "Building scalable and efficient backend solutions.",
    "Passionate about Java development and clean code.",
    "Creating innovative software solutions.",
    "Focused on performance and user experience."
  ];

  useEffect(() => {
    const currentText = texts[textIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        setTypingText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex > 0) {
        setTypingText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % texts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            variants={itemVariants}
          >
            Hi, I'm{' '}
            <motion.span
              className="gradient-text"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Abinaya S
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8"
            variants={itemVariants}
          >
            Aspiring Software Engineer | Java Developer
          </motion.p>

          <motion.div
            className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-12 h-8"
            variants={itemVariants}
          >
            <span className="typing-animation">
              {typingText}
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            variants={itemVariants}
          >
            <motion.a
              href="#projects"
              className="btn-primary cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-briefcase mr-2"></i> View Projects
            </motion.a>

            <motion.a
              href="/assets/abinaya.pdf"
              download="abinaya-resume.pdf"
              className="btn-secondary cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-download mr-2"></i> Download Resume
            </motion.a>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6"
            variants={itemVariants}
          >
            {[
              { href: 'https://www.linkedin.com/in/abinayas4821/', icon: 'fab fa-linkedin' },
              { href: 'https://leetcode.com/u/Abinaya1125/', icon: 'fas fa-laptop-code' },
              { href: 'https://github.com/abinaya1125', icon: 'fab fa-github' },
              { href: 'mailto:abinayas927@gmail.com', icon: 'fas fa-envelope' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="text-3xl text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
              >
                <i className={social.icon}></i>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
