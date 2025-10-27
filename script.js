document.addEventListener("DOMContentLoaded", () => {
  // Fade-in animation on scroll for sections after the hero/home
  const sections = document.querySelectorAll("section:not(#home):not(.hero-page)");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, {
    threshold: 0.12
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
      // set active immediately on click
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      // close mobile nav if open
      document.querySelector('.nav-links')?.classList.remove('open');
    });
  });

  // Highlight active nav link on scroll (improved)
  // Map nav links to their target sections (if present)
  const navItems = Array.from(navLinks).map(l => {
    const href = l.getAttribute('href');
    const target = document.querySelector(href);
    return { link: l, target };
  });

  function updateActiveLinkOnScroll() {
    const scrollPos = window.scrollY + 140; // account for fixed nav
    const docBottom = document.documentElement.scrollHeight - window.innerHeight;

    // If near bottom, mark last nav link as active
    if (window.scrollY >= docBottom - 40) {
      navLinks.forEach(l => l.classList.remove('active'));
      const last = navLinks[navLinks.length - 1];
      last?.classList.add('active');
      return;
    }

    // Choose the nav link whose section top is nearest to the scroll position
    let closest = null;
    let closestDistance = Infinity;
    navItems.forEach(item => {
      if (!item.target) return;
      const top = item.target.offsetTop;
      const distance = Math.abs(top - scrollPos);
      if (distance < closestDistance) {
        closestDistance = distance;
        closest = item;
      }
    });

    // Clear all, then set only the closest as active
    navLinks.forEach(l => l.classList.remove('active'));
    if (closest && closest.link) {
      closest.link.classList.add('active');
    }
  }
  window.addEventListener('scroll', updateActiveLinkOnScroll, {passive: true});
  // call once to set initial state
  updateActiveLinkOnScroll();

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
      // reduced tilt intensity for pastel, subtle effect
      const rotX = (dy * 3).toFixed(2);
      const rotY = (dx * -3).toFixed(2);
      card.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.01)`;
      card.style.boxShadow = `${-rotY * 1.2}px ${rotX * 1.2}px 18px rgba(0,0,0,0.08)`;
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

  // Timezone display for St. John's, Newfoundland (America/St_Johns)
  function updateNewfoundlandTime() {
    const el = document.querySelector('#timezone .tz-clock');
    if (!el) return;
    try {
      const now = new Date();
      const opts = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'America/St_Johns' };
      const fmt = new Intl.DateTimeFormat([], opts);
      el.textContent = fmt.format(now);
    } catch (e) {
      // fallback: display UTC offset approx
      const now = new Date();
      el.textContent = now.toLocaleTimeString();
    }
  }
  setInterval(updateNewfoundlandTime, 1000);
  updateNewfoundlandTime();

  // Typewriter effect for hero name
  (function typewriter() {
    const el = document.querySelector('#typed-name');
    if (!el) return;
    const text = el.dataset.text || el.textContent || '';
    el.textContent = '';
    let i = 0;
    const speed = 80;
    function step() {
      if (i <= text.length) {
        el.textContent = text.slice(0, i);
        i++;
        setTimeout(step, speed);
      } else {
        // blink cursor for a short while
        setTimeout(() => { el.style.borderRight = '0px solid transparent'; }, 900);
      }
    }
    setTimeout(step, 400);
  })();

  // robot click -> scroll to contact
  const robotEl = document.querySelector('.robot');
  robotEl?.addEventListener('click', () => {
    const contact = document.querySelector('#contact');
    if (contact) contact.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // subtle hero background parallax (mouse move)
  (function heroParallax() {
    const hero = document.querySelector('.hero-dark');
    const bg = document.querySelector('.hero-bg');
    if (!hero || !bg) return;
    let raf = null;
    const state = { x: 0, y: 0 };
    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 -> 0.5
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      state.x = px * 18; state.y = py * 10;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        bg.style.transform = `translate3d(${state.x}px, ${state.y}px, 0) rotate(${state.x * 0.03}deg)`;
      });
    });
    hero.addEventListener('mouseleave', () => {
      if (raf) cancelAnimationFrame(raf);
      bg.style.transform = '';
    });
  })();
});
