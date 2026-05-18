/* ================================================================
   NAWEEL GLOBAL — main.js
   Handles: navbar scroll state, mobile menu, scroll reveal,
            active nav link highlighting, smooth hero entrance
================================================================ */

(function () {
  'use strict';

  /* ── NAVBAR SCROLL STATE ───────────────────────────────────── */
  const navbar = document.getElementById('navbar');

  function handleNavbarScroll() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll(); // run once on load

  /* ── MOBILE MENU ───────────────────────────────────────────── */
  const navToggle = document.getElementById('nav-toggle');
  const navLinks  = document.getElementById('nav-links');

  navToggle.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ── SCROLL REVEAL ─────────────────────────────────────────── */
  const revealEls = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  revealEls.forEach(function (el) {
    revealObserver.observe(el);
  });

  /* ── STAGGERED CHILDREN ─────────────────────────────────────── */
  // Add sequential reveal delays to mission items, why-cards, contact-cards
  function staggerChildren(parentSelector, childSelector) {
    document.querySelectorAll(parentSelector).forEach(function (parent) {
      parent.querySelectorAll(childSelector).forEach(function (child, i) {
        child.style.transitionDelay = (i * 0.1) + 's';
      });
    });
  }

  staggerChildren('.mission-list', '.mission-item');
  staggerChildren('.why-grid',     '.why-card');
  staggerChildren('.contact-grid', '.contact-card');

  /* ── ACTIVE NAV HIGHLIGHTING ───────────────────────────────── */
  const sections   = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-link[href^="#"]');

  const sectionObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navAnchors.forEach(function (a) {
            const href = a.getAttribute('href').slice(1);
            a.classList.toggle('active', href === id);
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  sections.forEach(function (section) {
    sectionObserver.observe(section);
  });

  /* ── SMOOTH PARALLAX on HERO ───────────────────────────────── */
  const hero = document.querySelector('.hero');

  function heroParallax() {
    if (!hero) return;
    const scrolled = window.scrollY;
    // Subtle parallax — shift bg upward as user scrolls
    hero.style.backgroundPositionY = (scrolled * 0.35) + 'px';
  }

  window.addEventListener('scroll', heroParallax, { passive: true });

  /* ── BADGE ROTATION ANIMATION ──────────────────────────────── */
  const badge = document.querySelector('.story-badge');
  if (badge) {
    let angle = 0;
    let lastTs = null;

    function rotateBadge(ts) {
      if (lastTs !== null) {
        angle += (ts - lastTs) * 0.008; // very slow rotation
      }
      lastTs = ts;
      badge.style.transform = 'rotate(' + angle + 'deg)';
      badge.querySelector('.badge-inner').style.transform = 'rotate(' + (-angle) + 'deg)';
      requestAnimationFrame(rotateBadge);
    }

    requestAnimationFrame(rotateBadge);
  }

  /* ── GOLD CURSOR TRAIL (subtle, optional) ──────────────────── */
  // Create a very lightweight trailing dot in gold
  const trail = document.createElement('div');
  trail.style.cssText = [
    'position:fixed',
    'width:6px',
    'height:6px',
    'background:rgba(196,152,90,0.55)',
    'border-radius:50%',
    'pointer-events:none',
    'z-index:9999',
    'transition:transform 0.12s ease',
    'transform:scale(0)',
  ].join(';');
  document.body.appendChild(trail);

  let trailX = 0, trailY = 0;
  let targetX = 0, targetY = 0;

  document.addEventListener('mousemove', function (e) {
    targetX = e.clientX;
    targetY = e.clientY;
    trail.style.transform = 'scale(1) translate(-50%,-50%)';
  });

  document.addEventListener('mouseleave', function () {
    trail.style.transform = 'scale(0)';
  });

  function animateTrail() {
    trailX += (targetX - trailX) * 0.2;
    trailY += (targetY - trailY) * 0.2;
    trail.style.left = trailX + 'px';
    trail.style.top  = trailY + 'px';
    requestAnimationFrame(animateTrail);
  }
  requestAnimationFrame(animateTrail);

})();
