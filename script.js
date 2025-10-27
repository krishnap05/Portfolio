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

  // Highlight active nav link on scroll 
  // Map nav links to their target sections 
  const navItems = Array.from(navLinks).map(l => {
    const href = l.getAttribute('href');
    const target = document.querySelector(href);
    return { link: l, target };
  });

  function updateActiveLinkOnScroll() {
    const docBottom = document.documentElement.scrollHeight - window.innerHeight;

    // If near bottom, mark last nav link as active
    if (window.scrollY >= docBottom - 40) {
      navLinks.forEach(l => l.classList.remove('active'));
      const last = navLinks[navLinks.length - 1];
      last?.classList.add('active');
      return;
    }

    // Choose the section with the largest visible ratio in the viewport
    let best = null;
    let bestRatio = 0;
    const vh = window.innerHeight || document.documentElement.clientHeight;
    navItems.forEach(item => {
      if (!item.target) return;
      const rect = item.target.getBoundingClientRect();
      const height = rect.height || (item.target.offsetHeight || 1);
      const visible = Math.max(0, Math.min(rect.bottom, vh) - Math.max(rect.top, 0));
      const ratio = visible / height;
      if (ratio > bestRatio) {
        bestRatio = ratio;
        best = item;
      }
    });

    // Clear all, then set only the best as active (require minimal visibility)
    navLinks.forEach(l => l.classList.remove('active'));
    if (best && bestRatio > 0.05) {
      best.link.classList.add('active');
    } else {
      // fallback: when near the very top, highlight Home
      if (window.scrollY < 120) {
        const homeLink = document.querySelector('.nav-links a[href="#home"]');
        homeLink?.classList.add('active');
      }
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

  // Character-wrapping and staggered reveal for hero headline
  (function headlineReveal(){
    function wrapAndAnimate(selector, initialDelay = 0, perChar = 0.04) {
      const el = document.querySelector(selector);
      if (!el) return 0;
      const text = el.textContent.trim();
      // preserve whitespace between words but remove excess
      el.textContent = '';
      let total = 0;
      [...text].forEach((ch, i) => {
        const span = document.createElement('span');
        span.className = 'char';
        // preserve visible spacing by using a non-breaking space for regular spaces
        if (ch === ' ') {
          span.innerHTML = '&nbsp;';
        } else {
          span.textContent = ch;
        }
        // small delay for spaces to avoid visual gaps
        const delay = initialDelay + (i * perChar);
        span.style.animationDelay = delay + 's';
        el.appendChild(span);
        total = delay;
      });
      // force reflow then add animate class
      requestAnimationFrame(() => {
        el.querySelectorAll('.char').forEach(s => s.classList.add('animate'));
      });
      return total + 0.55; // approximate end time
    }

    const hiDone = wrapAndAnimate('.hero h1 .hi', 0.06, 0.05);
    const nameDone = wrapAndAnimate('.hero h1 .name', 0.12 + hiDone, 0.035);

    // reveal intro lines after headline animation completes
    const revealAfter = Math.max(hiDone, nameDone) + 0.12;
    setTimeout(() => {
      document.querySelectorAll('.hero .reveal').forEach(el => el.classList.add('show'));
    }, revealAfter * 1000);
  })();

  
  // Make the hero arrow scroll smoothly to the About section
  const scrollArrow = document.querySelector('.scroll-arrow');
  scrollArrow?.addEventListener('click', (e) => {
    e.preventDefault();
    const href = scrollArrow.getAttribute('href');
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
