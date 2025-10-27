document.addEventListener("DOMContentLoaded", () => {
  // Fade-in animation on scroll
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, {
    threshold: 0.1
  });

  sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
  });
  
  // Smooth scrolling for nav links + active state
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      target.scrollIntoView({behavior: 'smooth', block: 'start'});
      // close mobile nav if open
      document.querySelector('.nav-links')?.classList.remove('open');
    });
  });

  // Highlight active nav link on scroll
  const sectionsForNav = Array.from(document.querySelectorAll('section[id]'));
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 120; // account for fixed nav
    for (const sec of sectionsForNav) {
      const top = sec.offsetTop;
      const bottom = top + sec.offsetHeight;
      const id = '#' + sec.id;
      const link = document.querySelector('.nav-links a[href="' + id + '"]');
      if (!link) continue;
      if (scrollPos >= top && scrollPos < bottom) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    }
  }, {passive: true});

  // Mobile menu toggle
  const toggle = document.querySelector('.nav-toggle');
  toggle?.addEventListener('click', () => {
    document.querySelector('.nav-links')?.classList.toggle('open');
  });

  // 3D tilt for project cards
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    card.classList.add('tilt');
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within the card
      const y = e.clientY - rect.top;  // y position within the card
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const dx = (x - cx) / cx;
      const dy = (y - cy) / cy;
      const rotX = (dy * 6).toFixed(2);
      const rotY = (dx * -6).toFixed(2);
      card.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`;
      card.style.boxShadow = `${-rotY * 2}px ${rotX * 2}px 24px rgba(0,0,0,0.12)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.boxShadow = '';
    });
  });

  // small parallax for hero based on scroll
  const hero = document.querySelector('.hero');
  window.addEventListener('scroll', () => {
    if (!hero) return;
    const offset = window.scrollY * 0.06;
    hero.style.transform = `translateY(${offset}px)`;
  });
});
