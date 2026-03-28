import React, { useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  useEffect(() => {
    const wrapAndAnimate = (selector, initialDelay = 0, perChar = 0.04) => {
      const el = document.querySelector(selector);
      if (!el) return 0;
      
      const text = el.textContent.trim();
      el.textContent = '';
      
      let total = 0;
      [...text].forEach((ch, i) => {
        const span = document.createElement('span');
        span.className = 'char';
        if (ch === ' ') {
          span.innerHTML = '&nbsp;';
        } else {
          span.textContent = ch;
        }
        
        const delay = initialDelay + (i * perChar);
        span.style.animationDelay = `${delay}s`;
        el.appendChild(span);
        total = delay;
      });
      
      requestAnimationFrame(() => {
        el.querySelectorAll('.char').forEach(s => s.classList.add('animate'));
      });
      
      return total + 0.55;
    };

    const hiTime = wrapAndAnimate('.hero h1 .hi', 0.06, 0.05);
    const nameTime = wrapAndAnimate('.hero h1 .name', 0.12 + hiTime, 0.035);
    
    const revealAfter = Math.max(hiTime, nameTime) + 0.12;
    setTimeout(() => {
      document.querySelectorAll('.hero .reveal').forEach(el => el.classList.add('show'));
    }, revealAfter * 1000);

  }, []);

  return (
    <section id="home" className="hero hero-page hero-dark">
      {/* Animated SVG background shape */}
      <svg className="hero-bg" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#d25aa8" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#ff7fb6" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#ff7fb6" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        <g fill="none" stroke="url(#g1)" strokeWidth="1.6">
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

      <div className="hero-content">
        <h1 className="hero-heading">
          <span className="hi">Hi, I'm Krishna,</span>
        </h1>

        <p className="hero-subheading reveal">
          passionate about... 
        </p>

        <div className="hero-subtitle reveal">
          <div className="word-roller">
            <div className="roll-text-container">
              <span className="roll-text">building AI & LLM tools</span>
              <span className="roll-text">modern web development</span>
              <span className="roll-text">UI/UX design</span>
              <span className="roll-text">data science</span>
              <span className="roll-text">creating cool things</span>
              <span className="roll-text" aria-hidden="true">building AI & LLM tools</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;



