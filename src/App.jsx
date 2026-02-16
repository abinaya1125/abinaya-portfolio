import React, { useEffect, useState, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import ParticleCursor from './components/ParticleCursor';

// Lazy load all components for better performance
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Education = lazy(() => import('./components/Education'));
const Skills = lazy(() => import('./components/Skills'));
const SoftSkills = lazy(() => import('./components/SoftSkills'));
const LeetCodeStats = lazy(() => import('./components/LeetCodeStats'));
const Projects = lazy(() => import('./components/Projects'));
const Timeline = lazy(() => import('./components/Timeline'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Optimized loading component
const SectionLoader = () => (
  <motion.div
    className="py-12 flex justify-center items-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
  >
    <div className="flex flex-col items-center space-y-2">
      <div className="w-8 h-8 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
      <div className="text-gray-500 text-xs">Loading...</div>
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
      {/* Particle Cursor Effect */}
      <ParticleCursor />

      {/* Progress Bar */}
      <motion.div
        className="progress-bar"
        style={{ width: `${scrollProgress}%` }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress / 100 }}
        transition={{ duration: 0.2 }}
      />

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Navbar */}
      <Navbar />

      {/* Main Content - Optimized loading strategy */}
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {/* Critical sections - loaded immediately */}
            <Suspense fallback={<SectionLoader />}>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                className="no-lag"
              >
                <Hero />
              </motion.div>
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.05 }}
                viewport={{ once: true, margin: "-50px" }}
                className="no-lag"
              >
                <About />
              </motion.div>
            </Suspense>

            {/* Other sections - optimized lazy loading */}
            <Suspense fallback={<SectionLoader />}>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="no-lag"
              >
                <Education />
              </motion.div>
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.15 }}
                viewport={{ once: true, margin: "-50px" }}
                className="no-lag"
              >
                <Skills />
              </motion.div>
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
                className="no-lag"
              >
                <SoftSkills />
              </motion.div>
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.25 }}
                viewport={{ once: true, margin: "-50px" }}
                className="no-lag"
              >
                <LeetCodeStats />
              </motion.div>
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true, margin: "-50px" }}
                className="no-lag"
              >
                <Projects />
              </motion.div>
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.35 }}
                viewport={{ once: true, margin: "-50px" }}
                className="no-lag"
              >
                <Timeline />
              </motion.div>
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.4 }}
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
