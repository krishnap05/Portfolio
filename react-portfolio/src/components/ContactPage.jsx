import React from 'react';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <section id="contact" className="details-page centered-contact-section">
      <svg className="hero-bg details-bg" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
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

      <div className="contact-content">
        <h2 className="glitch-text" data-text="Let's Connect">Let's Connect</h2>
        <p className="contact-subtitle">Feel free to reach out</p>
        
        <div className="contact-links-row">
          <a 
            href="mailto:krishnapandya510@gmail.com" 
            className="contact-icon-btn"
            aria-label="Email"
          >
            <FiMail />
          </a>
          <a 
            href="https://github.com/krishnap05" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-icon-btn"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/krishna-pandya-a97839270/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-icon-btn"
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
