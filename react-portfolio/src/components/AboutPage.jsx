import React from 'react';
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
    <section id="about" className="relative overflow-hidden min-h-screen py-[60px] px-5 snap-start">
      {/* Animated background */}
      <svg className="hero-bg opacity-95" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
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

      <main className="grid grid-cols-[55%_45%] gap-6 max-w-[1200px] mx-auto mt-5 relative z-[2] items-stretch max-[900px]:grid-cols-1">
        {/* Left Side - About Me Bio */}
        <div className="reveal bg-[rgba(20,20,35,0.45)] border border-white/[0.08] rounded-3xl p-9 backdrop-blur-[16px] shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-[transform,border-color,box-shadow] duration-300 hover:border-[rgba(255,111,182,0.6)] hover:shadow-[0_0_30px_rgba(255,111,182,0.3),inset_0_0_15px_rgba(255,111,182,0.1),0_8px_32px_rgba(0,0,0,0.4)] relative overflow-hidden">
          <div>
            <h2 className="text-white mt-0 mb-5 font-semibold -tracking-[0.5px] text-[2.2rem] max-[900px]:text-[1.8rem]">About Me</h2>
            
            <p className="leading-[1.7] text-white/75 mb-4 text-[1.05rem]">Hey, I'm Krishna. I'm studying CS at Memorial University and spending most of my free time building stuff I find interesting, web apps, AI tools, data projects, sometimes all three at once.</p>
            <p className="leading-[1.7] text-white/75 mb-4 text-[1.05rem]">I like that sweet spot where good design meets smart tech. I've been diving into modern web frameworks, experimenting with LLMs, and exploring how data can tell a story. Every project I work on teaches me something new and pushes me to think differently.</p>
            <p className="leading-[1.7] text-white/75 mb-0 text-[1.05rem]">I'm still figuring things out but I'm always learning, always building, and always looking for the next interesting problem to solve."
</p>
          </div>
        </div>

        {/* Right Side - Tech Skills & Extras */}
        <div className="flex flex-col gap-6">
          
          <div className="reveal bg-[rgba(20,20,35,0.45)] border border-white/[0.08] rounded-3xl p-9 backdrop-blur-[16px] shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-[transform,border-color,box-shadow] duration-300 hover:border-[rgba(255,111,182,0.6)] hover:shadow-[0_0_30px_rgba(255,111,182,0.3),inset_0_0_15px_rgba(255,111,182,0.1),0_8px_32px_rgba(0,0,0,0.4)] relative overflow-hidden">
            <h3 className="text-white mt-0 mb-5 font-semibold -tracking-[0.5px] text-2xl">Technical Skills</h3>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(85px,1fr))] gap-4">
              {techSkills.map((skill, index) => (
                <div key={index} className="group bg-black/20 border border-white/5 rounded-2xl py-5 px-2.5 flex flex-col items-center justify-center gap-3 backdrop-blur-[8px] transition-all duration-300 cursor-default hover:bg-white/[0.04] hover:border-[rgba(255,111,182,0.6)] hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,111,182,0.25),inset_0_0_10px_rgba(255,111,182,0.1)]">
                  <div className="text-[2.5rem] flex items-center justify-center drop-shadow-[0_2px_8px_rgba(255,255,255,0.1)] transition-[transform,filter] duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_4px_12px_rgba(255,255,255,0.2)]">{skill.icon}</div>
                  <span className="text-xs text-white/60 font-medium tracking-[0.5px]">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal bg-gradient-to-br from-[rgba(20,20,35,0.65)] to-[rgba(45,25,65,0.4)] border border-white/[0.08] rounded-3xl p-9 backdrop-blur-[16px] shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-[transform,border-color,box-shadow] duration-300 hover:border-[rgba(255,111,182,0.6)] hover:shadow-[0_0_30px_rgba(255,111,182,0.3),inset_0_0_15px_rgba(255,111,182,0.1),0_8px_32px_rgba(0,0,0,0.4)] relative overflow-hidden flex-grow flex flex-col justify-center">
            <div>
              <h3 className="text-white mt-0 mb-5 font-semibold -tracking-[0.5px] text-2xl">Current Focus</h3>
              <p className="leading-[1.7] text-white/75 mb-4 text-[1.05rem]">Expanding my knowledge in <strong>Modern Web Frameworks</strong> and <strong>Machine Learning</strong> while pursuing my CS Degree.</p>
              <div className="flex flex-wrap gap-2.5 mt-5">
                <span className="bg-white/[0.08] border border-white/10 px-3.5 py-1.5 rounded-[20px] text-sm text-[#ff6fb6] font-medium tracking-[0.5px]">Web Dev</span>
                <span className="bg-white/[0.08] border border-white/10 px-3.5 py-1.5 rounded-[20px] text-sm text-[#ff6fb6] font-medium tracking-[0.5px]">Data Science</span>
                <span className="bg-white/[0.08] border border-white/10 px-3.5 py-1.5 rounded-[20px] text-sm text-[#ff6fb6] font-medium tracking-[0.5px]">AI/LLMs</span>
              </div>
            </div>
          </div>

        </div>
      </main>
    </section>
  );
};

export default AboutPage;
