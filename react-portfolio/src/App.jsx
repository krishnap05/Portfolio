import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import ParticleCanvas from './components/ParticleCanvas';

function App() {
  useEffect(() => {
    // Intersection Observer for scroll reveals
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => revealObserver.observe(el));
    
    return () => {
      revealElements.forEach(el => revealObserver.unobserve(el));
    };
  }, []);

  return (
    <>
      <ParticleCanvas />
      <Navbar />
      <Hero />
      <AboutPage />
      <ProjectsPage />
      <ContactPage />
    </>
  );
}

export default App;
