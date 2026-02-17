import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import SoftSkills from './components/SoftSkills';
import LeetCodeStats from './components/LeetCodeStats';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import ParticleCursor from './components/ParticleCursor';
import Simple3DBackground from './components/Simple3DBackground';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
      
      setIsScrolling(true);
      setTimeout(() => setIsScrolling(false), 150);
    };

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 relative overflow-x-hidden">
      {/* Interactive background that responds to mouse */}
      <div 
        className="fixed inset-0 z-0 transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(102, 126, 234, 0.05) 0%, 
            transparent 50%)`
        }}
      >
        <Simple3DBackground />
      </div>
      
      {/* Interactive progress bar */}
      <div 
        className={`fixed top-0 left-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 z-50 transition-all duration-300 ${isScrolling ? 'h-2' : 'h-1'}`}
        style={{ width: `${scrollProgress}%` }}
      />
      
      {/* Floating action buttons */}
      <div className="fixed bottom-8 right-8 z-40 flex flex-col space-y-3">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center group"
          style={{ opacity: scrollProgress > 20 ? 1 : 0, pointerEvents: scrollProgress > 20 ? 'auto' : 'none' }}
        >
          <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
        
        <button
          onClick={() => {
            const element = document.getElementById('contact');
            element?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        >
          <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </button>
      </div>

      {/* Interactive cursor follower */}
      <div 
        className="fixed w-6 h-6 bg-purple-500 rounded-full opacity-20 pointer-events-none z-30 mix-blend-screen transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x + '%',
          top: mousePosition.y + '%',
          transform: 'translate(-50%, -50%)'
        }}
      />

      <ParticleCursor />
      <ThemeToggle />
      <Navbar />
      
      {/* Main content with interactive sections */}
      <div className="relative z-10">
        <section className="min-h-screen">
          <Hero />
        </section>
        
        <section className="py-20 group">
          <div className="container mx-auto px-6">
            <div className="transform transition-all duration-500 group-hover:scale-[1.02]">
              <About />
            </div>
          </div>
        </section>
        
        <section className="py-20 group">
          <div className="container mx-auto px-6">
            <div className="transform transition-all duration-500 group-hover:scale-[1.02]">
              <Education />
            </div>
          </div>
        </section>
        
        <section className="py-20 group">
          <div className="container mx-auto px-6">
            <div className="transform transition-all duration-500 group-hover:scale-[1.02]">
              <Skills />
            </div>
          </div>
        </section>
        
        <section className="py-20 group">
          <div className="container mx-auto px-6">
            <div className="transform transition-all duration-500 group-hover:scale-[1.02]">
              <SoftSkills />
            </div>
          </div>
        </section>
        
        <section className="py-20 group">
          <div className="container mx-auto px-6">
            <div className="transform transition-all duration-500 group-hover:scale-[1.02]">
              <LeetCodeStats />
            </div>
          </div>
        </section>
        
        <section className="py-20 group">
          <div className="container mx-auto px-6">
            <div className="transform transition-all duration-500 group-hover:scale-[1.02]">
              <Projects />
            </div>
          </div>
        </section>
        
        <section className="py-20 group">
          <div className="container mx-auto px-6">
            <div className="transform transition-all duration-500 group-hover:scale-[1.02]">
              <Timeline />
            </div>
          </div>
        </section>
        
        <section id="contact" className="py-20 group">
          <div className="container mx-auto px-6">
            <div className="transform transition-all duration-500 group-hover:scale-[1.02]">
              <Contact />
            </div>
          </div>
        </section>
        
        <Footer />
      </div>

      {/* Interactive scroll indicator */}
      <div className="fixed bottom-8 left-8 z-40">
        <div className="flex flex-col items-center space-y-2">
          <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Scroll</div>
          <div className="w-px h-20 bg-gradient-to-b from-purple-600 to-pink-600 relative">
            <div 
              className="absolute bottom-0 w-2 h-2 bg-purple-600 rounded-full transform -translate-x-1/2 transition-all duration-300"
              style={{ bottom: `${scrollProgress}%` }}
            />
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">{Math.round(scrollProgress)}%</div>
        </div>
      </div>
    </div>
  );
}

export default App;
