import React from 'react';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

const ContactPage = () => {
  return (
    <section id="contact" className="relative overflow-hidden min-h-screen py-[60px] px-5 snap-start flex items-center justify-center">
      <svg className="hero-bg opacity-95" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id="g1c" x1="0" x2="1">
            <stop offset="0%" stopColor="#7b4dbb" stopOpacity="0.18" />
            <stop offset="60%" stopColor="#ff7fb6" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#d25aa8" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <g fill="none" stroke="url(#g1c)" strokeWidth="1.6">
          <path className="hero-path" d="M1200,160 C900,-40 700,-40 480,160 C260,360 120,320 0,160"/>
          <path className="hero-path" d="M1200,176 C900,-24 700,-24 480,176 C260,376 120,336 0,176"/>
          <path className="hero-path" d="M1200,192 C900,-8 700,-8 480,192 C260,392 120,352 0,192"/>
          <path className="hero-path" d="M1200,208 C900,8 700,8 480,208 C260,408 120,368 0,208"/>
          <path className="hero-path" d="M1200,224 C900,24 700,24 480,224 C260,424 120,384 0,224"/>
          <path className="hero-path" d="M1200,240 C900,40 700,40 480,240 C260,440 120,400 0,240"/>
          <path className="hero-path" d="M1200,256 C900,56 700,56 480,256 C260,456 120,416 0,256"/>
          <path className="hero-path" d="M1200,272 C900,72 700,72 480,272 C260,472 120,432 0,272"/>
        </g>
      </svg>

      <div className="relative z-10 flex flex-col items-center text-center gap-6">
        <h2 className="glitch-text text-[clamp(3rem,8vw,5rem)] font-extrabold relative text-[#ff6fb6] m-0 tracking-[2px] leading-[1.1]" data-text="Let's Connect">Let's Connect</h2>
        <p className="text-lg text-white/70 m-0 mb-4 font-normal tracking-[0.5px]">Feel free to reach out</p>
        
        <div className="flex gap-6 justify-center items-center">
          <a 
            href="mailto:krishnapandya510@gmail.com" 
            className="flex items-center justify-center w-[60px] h-[60px] rounded-full border-[1.5px] border-[rgba(255,127,182,0.3)] bg-[rgba(20,15,30,0.4)] text-white text-2xl transition-all duration-300 backdrop-blur-[8px] no-underline hover:border-[#ff7fb6] hover:text-[#ff7fb6] hover:shadow-[0_0_20px_rgba(255,127,182,0.4),inset_0_0_10px_rgba(255,127,182,0.2)] hover:-translate-y-1"
            aria-label="Email"
          >
            <FiMail />
          </a>
          <a 
            href="https://github.com/krishnap05" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-[60px] h-[60px] rounded-full border-[1.5px] border-[rgba(255,127,182,0.3)] bg-[rgba(20,15,30,0.4)] text-white text-2xl transition-all duration-300 backdrop-blur-[8px] no-underline hover:border-[#ff7fb6] hover:text-[#ff7fb6] hover:shadow-[0_0_20px_rgba(255,127,182,0.4),inset_0_0_10px_rgba(255,127,182,0.2)] hover:-translate-y-1"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/krishna-pandya-a97839270/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-[60px] h-[60px] rounded-full border-[1.5px] border-[rgba(255,127,182,0.3)] bg-[rgba(20,15,30,0.4)] text-white text-2xl transition-all duration-300 backdrop-blur-[8px] no-underline hover:border-[#ff7fb6] hover:text-[#ff7fb6] hover:shadow-[0_0_20px_rgba(255,127,182,0.4),inset_0_0_10px_rgba(255,127,182,0.2)] hover:-translate-y-1"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
