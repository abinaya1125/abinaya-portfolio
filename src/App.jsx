import React, { useEffect, useState, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SmokyCursor from './components/SmokyCursor';
import GalaxyOverlay from './components/GalaxyOverlay';

// Lazy load non-critical components for better performance
const Education = lazy(() => import('./components/Education'));
const Skills = lazy(() => import('./components/Skills'));
const SoftSkills = lazy(() => import('./components/SoftSkills'));
const LeetCodeStats = lazy(() => import('./components/LeetCodeStats'));
const Projects = lazy(() => import('./components/Projects'));
const Timeline = lazy(() => import('./components/Timeline'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Loading component for lazy loaded sections
const SectionLoader = () => (
  <motion.div
    className="py-20 flex justify-center items-center"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
  >
    <div className="flex flex-col items-center space-y-4">
      {/* Premium loading spinner */}
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 w-16 h-16 border-2 border-purple-500/20 border-t-purple-500 rounded-full animate-spin"></div>
        <div className="absolute inset-2 w-12 h-12 border-2 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" style={{ animationDelay: '150ms' }}></div>
        <div className="absolute inset-4 w-8 h-8 border-2 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin" style={{ animationDelay: '300ms' }}></div>
      </div>
      <motion.div
        className="text-purple-300 text-sm font-medium"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        Loading amazing content...
      </motion.div>
    </div>
  </motion.div>
);

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    // Use passive event listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Galaxy Background */}
      <GalaxyOverlay />

      {/* Smoky Cursor */}
      <SmokyCursor />

      {/* Progress Bar */}
      <motion.div
        className="progress-bar"
        style={{ width: `${scrollProgress}%` }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress / 100 }}
        transition={{ duration: 0.3 }}
      />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Critical sections - loaded immediately */}
            <Hero />
            <About />

            {/* Lazy loaded sections with optimized animations */}
            <Suspense fallback={<SectionLoader />}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                className="no-lag"
              >
                <Education />
              </motion.div>
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
                viewport={{ once: true, margin: "-50px" }}
                className="no-lag"
              >
                <Skills />
              </motion.div>
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="no-lag"
              >
                <SoftSkills />
              </motion.div>
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
                viewport={{ once: true, margin: "-50px" }}
                className="no-lag"
              >
                <LeetCodeStats />
              </motion.div>
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
                className="no-lag"
              >
                <Projects />
              </motion.div>
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.25 }}
                viewport={{ once: true, margin: "-50px" }}
                className="no-lag"
              >
                <Timeline />
              </motion.div>
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true, margin: "-50px" }}
                className="no-lag"
              >
                <Contact />
              </motion.div>
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer - Lazy loaded */}
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
