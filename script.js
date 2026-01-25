// --- Language Configuration ---
let currentLang = 'en';

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'es' : 'en';
  
  // 1. Update button text
  document.querySelector('.lang-text').textContent = currentLang === 'en' ? 'ES' : 'EN';
  
  // 2. Find all elements that need translation
  // Look for elements with data-en attribute
  document.querySelectorAll('[data-en]').forEach(element => {
    const translation = element.getAttribute('data-' + currentLang);
    if (translation) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translation;
      } else {
        // Keeps HTML formatting if present
        element.innerHTML = translation; 
      }
    }
  });
}

// --- Navigation & Scroll Effects ---

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Close mobile menu
      const navContainer = document.querySelector('.nav-container');
      if (navContainer) navContainer.classList.remove('active');
    }
  });
});

// Mobile menu toggle logic
const menuToggle = document.querySelector('.menu-toggle');
if (menuToggle) {
  menuToggle.addEventListener('click', function() {
    document.querySelector('.nav-container').classList.toggle('active');
  });
}

// Close menu when clicking outside
document.addEventListener('click', function(e) {
  if (!e.target.closest('nav')) {
    const navContainer = document.querySelector('.nav-container');
    if (navContainer) navContainer.classList.remove('active');
  }
});

// --- Parallax Effects (New) ---
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrolled = window.pageYOffset;
      
      // 1. Hero Parallax
      const hero = document.querySelector('.hero');
      if (hero && scrolled < hero.offsetTop + hero.offsetHeight) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
      
      // 2. Tech Background Parallax (About Section)
      const aboutSection = document.querySelector('.about');
      if (aboutSection) {
        const aboutTop = aboutSection.offsetTop;
        const aboutBottom = aboutTop + aboutSection.offsetHeight;
        
        // Only animate if visible
        if (scrolled + window.innerHeight > aboutTop && scrolled < aboutBottom) {
          const relativeScroll = scrolled - aboutTop + window.innerHeight;
          
          // Animate the 3D Grid
          const techGrid = document.querySelector('.tech-grid');
          if (techGrid) {
            techGrid.style.transform = `perspective(500px) rotateX(60deg) translateY(${relativeScroll * 0.1}px)`;
          }
          
          // Animate particles at different speeds
          const particles = document.querySelectorAll('.particle');
          particles.forEach((particle, index) => {
            const speed = 0.05 + (index * 0.01);
            particle.style.transform = `translateY(${relativeScroll * speed}px)`;
          });
        }
      }
      
      ticking = false;
    });
    ticking = true;
  }
});