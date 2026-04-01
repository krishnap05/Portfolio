import React, { useState, useEffect } from 'react';

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
    <nav className="fixed top-3 left-3 right-3 z-[100]">
      <div className="flex items-center justify-end bg-[rgba(20,15,30,0.4)] px-6 py-2.5 border border-white/[0.08] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-[16px] transition-[border-color] duration-300 hover:border-white/15">
        <button 
          className="md:hidden bg-transparent border-none text-xl text-white cursor-pointer" 
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          ☰
        </button>
        <ul className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-[50px] md:top-auto right-2.5 md:right-auto bg-[rgba(11,8,16,0.95)] md:bg-transparent p-4 md:p-0 rounded-xl md:rounded-none shadow-[0_4px_12px_rgba(0,0,0,0.5)] md:shadow-none gap-2 list-none m-0`}>
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <a 
                href={href}
                className={`block px-4 py-2 rounded-[10px] no-underline font-medium transition-all duration-300 hover:bg-white/10 hover:text-white ${
                  activeLink === href 
                    ? 'bg-[rgba(255,127,182,0.15)] text-[#ff7fb6] shadow-[inset_0_0_10px_rgba(255,127,182,0.2)]' 
                    : 'text-white/70'
                }`}
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
