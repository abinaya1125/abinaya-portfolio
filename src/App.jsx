import React from 'react';
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
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 relative">
      <Simple3DBackground />
      <ParticleCursor />
      <ThemeToggle />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <SoftSkills />
      <LeetCodeStats />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
