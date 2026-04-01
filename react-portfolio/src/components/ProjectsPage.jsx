import React, { useState, useEffect, useRef } from 'react';
import { FiArrowRight, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { SiGithub } from 'react-icons/si';

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [expandedSection, setExpandedSection] = useState('about'); // 'about' or 'tech'
  const detailRef = useRef(null);

  const projects = [
    {
      id: 0,
      title: 'Flashcard AI',
      shortDesc: "Vertex AI Flashcard Generator",
      desc: "Built full-stack web application that transforms raw notes, PDFs, Word documents, and various file types into intelligent flashcards using AI models; designed backend services to process data and integrate with Google Cloud Vertex AI; implemented Gemini 1.5 Pro for automated, context-aware flashcard generation; currently enhancing the platform by adding saved document chat history, improved UI/UX design, and advanced learning features.",
      techStack: "React, Node.js, Express, Google Cloud Vertex AI, Gemini 1.5 Pro",
      links: [{ text: 'View on GitHub', url: 'https://github.com/krishnap05/flashcard-ai' }],
      gradient: 'linear-gradient(135deg, #1f1c2c 0%, #928DAB 100%)',
      pattern: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 2px, transparent 2px)'
    },
    {
      id: 1,
      title: 'Churn Prediction Dashboard',
      shortDesc: "ML Dashboard for Customer Churn",
      desc: "An interactive dashboard for exploring customer churn patterns and generating predictions using machine learning models. Includes visualizations, feature breakdowns, and model performance metrics. Helps businesses identify at-risk customers proactively.",
      techStack: "Python, Streamlit, XGBoost, Scikit-Learn, Pandas, Plotly",
      links: [
        { text: 'View on GitHub', url: 'https://github.com/krishnap05/churn-prediction-dashboard' }
      ],
      gradient: 'linear-gradient(135deg, #232526 0%, #414345 100%)',
      pattern: 'linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.05) 75%, rgba(255,255,255,0.05))'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      shortDesc: "React & Vite Migrated SPA",
      desc: "A fully responsive, single-page application migrated to a React & Vite architecture. Features modular components, custom React hooks, interactive 3D card flips, animated SVG backgrounds, and dynamic routing to showcase my web development and data science projects.",
      techStack: "React, Vite, Modern CSS, JavaScript, SVGs",
      links: [
        { text: 'View on GitHub', url: 'https://github.com/krishnap05/Portfolio' }
      ],
      gradient: 'linear-gradient(135deg, #4b6cb7 0%, #182848 100%)',
      pattern: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 8px)'
    }
  ];

  const handleSelectProject = (index) => {
    setSelectedProject(index);
  };

  const toggleAccordion = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <section id="projects" className="relative min-h-screen py-20 px-5 overflow-hidden flex justify-center snap-start">
      {/* Background SVG */}
      <svg className="hero-bg opacity-95" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id="g1p" x1="0" x2="1">
            <stop offset="0%" stopColor="#7b4dbb" stopOpacity="0.18" />
            <stop offset="60%" stopColor="#d25aa8" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#ff7fb6" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <g fill="none" stroke="url(#g1p)" strokeWidth="1.6">
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

      <div className="relative z-[2] max-w-[1200px] w-full flex flex-col gap-10">
        
        {/* Modal Overlay for Selected Project */}
        {selectedProject !== null && (
          <div className="fixed inset-0 bg-black/75 backdrop-blur-[8px] z-[1000] flex items-center justify-center p-5 animate-fade-in" onClick={() => setSelectedProject(null)}>
            <div className="animate-pop-up w-full max-w-[800px] flex flex-col gap-8 bg-[rgba(20,20,35,0.85)] border border-white/10 rounded-3xl p-10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] relative max-[900px]:p-6" onClick={(e) => e.stopPropagation()}>
              
              <div className="flex flex-col items-start gap-5 pr-20 md:flex-row md:justify-between md:items-center">
                <h2 className="text-[2.5rem] m-0 bg-gradient-to-r from-white to-[#b8a6d9] bg-clip-text text-transparent">{projects[selectedProject].title}</h2>
                <div className="flex">
                  {projects[selectedProject].links.map((link, i) => (
                    <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white no-underline font-medium transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:-translate-y-0.5">
                      <SiGithub style={{marginRight: '8px'}} /> {link.text}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex flex-col">
                <p className="text-lg leading-[1.7] text-white/85 mb-6 mt-0">{projects[selectedProject].desc}</p>
                
                <div className="flex flex-col gap-3 mt-auto">
                  <div className={`accordion-item border-t border-b border-white/10 ${expandedSection === 'tech' ? 'active' : ''}`}>
                    <button className="w-full flex justify-between items-center py-5 bg-transparent border-none text-white text-lg font-medium cursor-pointer transition-colors duration-200 hover:text-[#ff6fb6]" onClick={() => toggleAccordion('tech')}>
                      Tech-stack
                      {expandedSection === 'tech' ? <FiChevronUp /> : <FiChevronDown />}
                    </button>
                    <div className="accordion-content">
                      <p className="m-0 leading-[1.6] text-[#ff6fb6] font-mono text-base">{projects[selectedProject].techStack}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="absolute top-6 right-6 bg-white/10 border-none text-white px-4 py-2 rounded-[20px] cursor-pointer text-sm transition-colors duration-200 hover:bg-white/20" onClick={() => setSelectedProject(null)}>
                ✕ Close
              </button>
            </div>
          </div>
        )}

        {/* Horizontal Project List View */}
        <div className="reveal w-full flex flex-col gap-5">
          <h2 className="text-[2rem] m-0 text-white/90">Discover Projects</h2>
          <div className="flex gap-5 h-[500px] max-[900px]:flex-col max-[900px]:h-auto">
            {projects.map((proj, i) => (
              <div 
                key={i} 
                className={`group relative flex-1 rounded-[20px] overflow-hidden cursor-pointer border border-white/[0.08] backdrop-blur-[10px] shadow-[0_10px_30px_rgba(0,0,0,0.2)] gallery-card-transition hover:flex-[1.2] hover:border-[rgba(255,111,182,0.8)] hover:shadow-[0_0_30px_rgba(255,111,182,0.4),inset_0_0_15px_rgba(255,111,182,0.15),0_10px_30px_rgba(0,0,0,0.4)] max-[900px]:h-[150px] ${
                  selectedProject === i ? 'border-2 !border-[#ff6fb6] !shadow-[0_0_30px_rgba(255,111,182,0.5)] !flex-[0.8] opacity-60' : ''
                }`}
                onClick={() => handleSelectProject(i)}
                style={{ 
                  background: proj.image ? `url(${proj.image}) center/cover` : proj.gradient
                }}
              >
                {!proj.image && (
                  <div className="absolute inset-0 opacity-30" style={{ background: proj.pattern, backgroundSize: '16px 16px' }}></div>
                )}
                <div className="absolute inset-0 bg-black/70 flex items-end p-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms]">
                  <div className="translate-y-5 group-hover:translate-y-0 transition-transform duration-[400ms] flex flex-col items-start gap-3">
                    <button className="w-12 h-12 rounded-full bg-white/20 border border-white/40 text-white flex items-center justify-center text-2xl backdrop-blur-[4px]">
                      <FiArrowRight />
                    </button>
                    <span className="text-xs tracking-[2px] text-white/80 font-semibold">VIEW PROJECT</span>
                    <h3 className="m-0 text-[1.8rem] text-white font-semibold">{proj.title}</h3>
                  </div>
                </div>
                {/* Vertical title shown when not hovered */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="[writing-mode:vertical-rl] rotate-180 m-0 text-[2rem] text-white tracking-[2px] font-semibold [text-shadow:2px_2px_10px_rgba(0,0,0,0.5)] max-[900px]:[writing-mode:horizontal-tb] max-[900px]:rotate-0 max-[900px]:text-2xl">{proj.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectsPage;
