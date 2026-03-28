import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check sections in order to find the one currently taking up the screen
      const sections = ['#home', '#about', '#projects', '#contact'];
      let currentActive = '#home';

      for (const section of sections) {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the element's top is in the top half of the viewport or above it
          if (rect.top <= window.innerHeight / 2) {
            currentActive = section;
          }
        }
      }

      setActiveLink(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About / Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <nav className="site-nav">
      <div className="nav-inner right-aligned">
        <button 
          className="nav-toggle" 
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          ☰
        </button>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <a 
                href={href}
                className={activeLink === href ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(href);
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
