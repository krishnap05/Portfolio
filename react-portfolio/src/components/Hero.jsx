import React, { useEffect } from 'react';

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
    <section id="home" className="hero min-h-screen flex flex-col justify-center items-center px-[5%] py-[60px] relative bg-gradient-to-b from-[#0b0810] to-[#0f0b16] text-white overflow-hidden snap-start">
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

      <div className="animate-float-in max-w-[900px] flex flex-col items-center justify-center text-center relative z-[5]">
        <h1 className="mb-0 text-white -tracking-[0.6px]">
          <span className="hi block text-[#ff6fb6] font-extrabold leading-[1.1] m-0 text-[clamp(3rem,7vw,5.5rem)] -tracking-[1px] max-[520px]:text-[clamp(2rem,8vw,3rem)]">Hi, I'm Krishna,</span>
        </h1>

        <p className="reveal text-[clamp(1.6rem,3.5vw,2.4rem)] font-medium text-white/60 mt-3 leading-[1.3] mb-0">
          passionate about... 
        </p>

        <div className="reveal flex items-center justify-center gap-3 text-[clamp(1.8rem,4.5vw,3.8rem)] font-extrabold mt-1 mb-0.5 text-white">
          <div className="h-[1.4em] overflow-hidden relative inline-block align-bottom">
            <div className="roll-text-container">
              <span className="h-[1.4em] leading-[1.4em] m-0 p-0 flex items-center justify-center text-white font-extrabold -tracking-[1px] whitespace-nowrap">building AI & LLM tools</span>
              <span className="h-[1.4em] leading-[1.4em] m-0 p-0 flex items-center justify-center text-white font-extrabold -tracking-[1px] whitespace-nowrap">modern web development</span>
              <span className="h-[1.4em] leading-[1.4em] m-0 p-0 flex items-center justify-center text-white font-extrabold -tracking-[1px] whitespace-nowrap">UI/UX design</span>
              <span className="h-[1.4em] leading-[1.4em] m-0 p-0 flex items-center justify-center text-white font-extrabold -tracking-[1px] whitespace-nowrap">data science</span>
              <span className="h-[1.4em] leading-[1.4em] m-0 p-0 flex items-center justify-center text-white font-extrabold -tracking-[1px] whitespace-nowrap">creating cool things</span>
              <span className="h-[1.4em] leading-[1.4em] m-0 p-0 flex items-center justify-center text-white font-extrabold -tracking-[1px] whitespace-nowrap" aria-hidden="true">building AI & LLM tools</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;



