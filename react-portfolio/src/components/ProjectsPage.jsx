import React, { useState, useEffect, useRef } from 'react';
import { FiArrowRight, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { SiGithub } from 'react-icons/si';
import './ProjectsPage.css';

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
    <section id="projects">
      {/* Background SVG */}
      <svg className="hero-bg details-bg" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
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

      <div className="projects-container">
        
        {/* Modal Overlay for Selected Project */}
        {selectedProject !== null && (
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
            <div className="project-modal" onClick={(e) => e.stopPropagation()}>
              
              <div className="detail-header">
                <h2 className="detail-title">{projects[selectedProject].title}</h2>
                <div className="detail-actions">
                  {projects[selectedProject].links.map((link, i) => (
                    <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="github-btn">
                      <SiGithub style={{marginRight: '8px'}} /> {link.text}
                    </a>
                  ))}
                </div>
              </div>

              <div className="detail-content">
                <p className="modal-description">{projects[selectedProject].desc}</p>
                
                <div className="accordion-container">
                  <div className={`accordion-item ${expandedSection === 'tech' ? 'active' : ''}`}>
                    <button className="accordion-header" onClick={() => toggleAccordion('tech')}>
                      Tech-stack
                      {expandedSection === 'tech' ? <FiChevronUp /> : <FiChevronDown />}
                    </button>
                    <div className="accordion-content">
                      <p className="tech-stack-text">{projects[selectedProject].techStack}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="close-modal-btn" onClick={() => setSelectedProject(null)}>
                ✕ Close
              </button>
            </div>
          </div>
        )}

        {/* Horizontal Project List View */}
        <div className="gallery-section reveal delay-1">
          <h2 className="gallery-title">Discover Projects</h2>
          <div className="projects-gallery">
            {projects.map((proj, i) => (
              <div 
                key={i} 
                className={`gallery-card ${selectedProject === i ? 'active-card' : ''}`}
                onClick={() => handleSelectProject(i)}
                style={{ 
                  background: proj.image ? `url(${proj.image}) center/cover` : proj.gradient
                }}
              >
                {!proj.image && (
                  <div className="card-pattern" style={{ background: proj.pattern, backgroundSize: '16px 16px' }}></div>
                )}
                <div className="card-overlay">
                  <div className="card-overlay-content">
                    <button className="view-arrow-btn">
                      <FiArrowRight />
                    </button>
                    <span className="view-text">VIEW PROJECT</span>
                    <h3 className="card-horiz-title">{proj.title}</h3>
                  </div>
                </div>
                {/* Vertical title shown when not hovered */}
                <div className="card-vertical-title-container">
                  <h3 className="card-vertical-title">{proj.title}</h3>
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
