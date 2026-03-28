import React from 'react';
import './AboutPage.css';
import { FaPython, FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiTypescript, SiOpenai } from 'react-icons/si';

const AboutPage = () => {

  const techSkills = [
    { name: 'Python', icon: <FaPython color="#3776AB" /> },
    { name: 'JavaScript', icon: <IoLogoJavascript color="#F7DF1E" /> },
    { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
    { name: 'React', icon: <FaReact color="#61DAFB" /> },
    { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
    { name: 'HTML', icon: <FaHtml5 color="#E34F26" /> },
    { name: 'CSS', icon: <FaCss3Alt color="#1572B6" /> },
    { name: 'LLMs & AI', icon: <SiOpenai color="#10A37F" /> }
  ];

  return (
    <section id="about" className="details-page">
      {/* Animated background */}
      <svg className="hero-bg details-bg" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id="g1a" x1="0" x2="1">
            <stop offset="0%" stopColor="#7b4dbb" stopOpacity="0.18" />
            <stop offset="60%" stopColor="#d25aa8" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#ff7fb6" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <g fill="none" stroke="url(#g1a)" strokeWidth="1.6">
          <path className="hero-path" d="M1200,160 C900,-40 700,-40 480,160 C260,360 120,320 0,160"/>
          <path className="hero-path" d="M1200,176 C900,-24 700,-24 480,176 C260,376 120,336 0,176"/>
          <path className="hero-path" d="M1200,192 C900,-8 700,-8 480,192 C260,392 120,352 0,192"/>
          <path className="hero-path" d="M1200,208 C900,8 700,8 480,208 C260,408 120,368 0,208"/>
          <path className="hero-path" d="M1200,224 C900,24 700,24 480,224 C260,424 120,384 0,224"/>
          <path className="hero-path" d="M1200,240 C900,40 700,40 480,240 C260,440 120,400 0,240"/>
          <path className="hero-path" d="M1200,256 C900,56 700,56 480,256 C260,456 120,416 0,256"/>
          <path className="hero-path" d="M1200,272 C900,72 700,72 480,272 C260,472 120,432 0,272"/>
          <path className="hero-path" d="M1200,288 C900,88 700,88 480,288 C260,488 120,448 0,288"/>
          <path className="hero-path" d="M1200,304 C900,104 700,104 480,304 C260,504 120,464 0,304"/>
          <path className="hero-path" d="M1200,320 C900,120 700,120 480,320 C260,520 120,480 0,320"/>
          <path className="hero-path" d="M1200,336 C900,136 700,136 480,336 C260,536 120,496 0,336"/>
          <path className="hero-path" d="M1200,352 C900,152 700,152 480,352 C260,552 120,512 0,352"/>
          <path className="hero-path" d="M1200,368 C900,168 700,168 480,368 C260,568 120,528 0,368"/>
          <path className="hero-path" d="M1200,384 C900,184 700,184 480,384 C260,584 120,544 0,384"/>
          <path className="hero-path" d="M1200,400 C900,200 700,200 480,400 C260,600 120,560 0,400"/>
        </g>
      </svg>

      <main className="bento-container">
        {/* Left Side - About Me Bio */}
        <div className="bento-card bio-card reveal">
          <div className="bio-content">
            <h2>About Me</h2>
            
            <p>Hey, I'm Krishna. I'm studying CS at Memorial University and spending most of my free time building stuff I find interesting, web apps, AI tools, data projects, sometimes all three at once.</p>
            <p>I like that sweet spot where good design meets smart tech. I've been diving into modern web frameworks, experimenting with LLMs, and exploring how data can tell a story. Every project I work on teaches me something new and pushes me to think differently.</p>
            <p>I'm still figuring things out but I'm always learning, always building, and always looking for the next interesting problem to solve."
</p>
          </div>
        </div>

        {/* Right Side - Tech Skills & Extras */}
        <div className="right-bento-column">
          
          <div className="bento-card skills-card reveal">
            <h3 className="bento-title">Technical Skills</h3>
            <div className="tech-skills-grid">
              {techSkills.map((skill, index) => (
                <div key={index} className="tech-logo-container">
                  <div className="tech-icon">{skill.icon}</div>
                  <span className="tech-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bento-card location-card reveal delay-1">
            <div className="location-content">
              <h3 className="bento-title">Current Focus</h3>
              <p>Expanding my knowledge in <strong>Modern Web Frameworks</strong> and <strong>Machine Learning</strong> while pursuing my CS Degree.</p>
              <div className="focus-badges">
                <span className="badge">Web Dev</span>
                <span className="badge">Data Science</span>
                <span className="badge">AI/LLMs</span>
              </div>
            </div>
          </div>

        </div>
      </main>
    </section>
  );
};

export default AboutPage;
