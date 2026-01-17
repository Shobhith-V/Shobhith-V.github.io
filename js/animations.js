// Scroll-based reveal animations and interactions
// Enhances the site with smooth reveals and micro-interactions

(function() {
  'use strict';

  // Intersection Observer for scroll reveals
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Optionally stop observing after first reveal for performance
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with reveal class
  document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal:not(.revealed)');
    revealElements.forEach(el => {
      observer.observe(el);
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Parallax effect for hero section (subtle)
  let ticking = false;
  function updateParallax() {
    const hero = document.querySelector('.hero-section');
    if (hero) {
      const scrolled = window.pageYOffset;
      const rate = scrolled * 0.3;
      hero.style.transform = `translateY(${rate}px)`;
    }
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  });

  // Add cursor trail effect on hero (optional, subtle)
  const heroSection = document.querySelector('.hero-section');
  if (heroSection && window.innerWidth > 768) {
    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      heroSection.style.background = `
        radial-gradient(circle at ${x}% ${y}%, rgba(0, 217, 255, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 30% 20%, rgba(0, 217, 255, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 70% 80%, rgba(255, 176, 32, 0.1) 0%, transparent 50%)
      `;
    });
  }

  // Lazy load images with fade-in
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            img.classList.add('fade-in');
          }
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
})();