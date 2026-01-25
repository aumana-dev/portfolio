// Parallax Effects Module

class ParallaxManager {
  constructor() {
    this.ticking = false;
    this.scrolling = false;
  }

  /**
   * Initialize parallax effects
   */
  init() {
    window.addEventListener('scroll', () => this.onScroll());
  }

  /**
   * Handle scroll event with requestAnimationFrame
   */
  onScroll() {
    if (!this.ticking) {
      window.requestAnimationFrame(() => {
        this.updateParallax();
        this.ticking = false;
      });
      this.ticking = true;
    }
  }

  /**
   * Update all parallax effects
   */
  updateParallax() {
    const scrolled = window.pageYOffset;
    this.updateHeroParallax(scrolled);
    this.updateAboutParallax(scrolled);
  }

  /**
   * Update hero section parallax
   */
  updateHeroParallax(scrolled) {
    const hero = document.querySelector('.hero');
    if (hero && scrolled < hero.offsetTop + hero.offsetHeight) {
      // Disabled parallax for normal scrolling
      // hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
  }

  /**
   * Update about section parallax with 3D effects
   */
  updateAboutParallax(scrolled) {
    const aboutSection = document.querySelector('.about');
    if (!aboutSection) return;

    const aboutTop = aboutSection.offsetTop;
    const aboutBottom = aboutTop + aboutSection.offsetHeight;

    // Only animate if visible
    if (scrolled + window.innerHeight > aboutTop && scrolled < aboutBottom) {
      const relativeScroll = scrolled - aboutTop + window.innerHeight;

      // Animate 3D Grid
      this.animateTechGrid(relativeScroll);

      // Animate particles
      this.animateParticles(relativeScroll);
    }
  }

  /**
   * Animate tech grid with 3D effect
   */
  animateTechGrid(relativeScroll) {
    const techGrid = document.querySelector('.tech-grid');
    if (techGrid) {
      techGrid.style.transform = `perspective(500px) rotateX(60deg) translateY(${relativeScroll * 0.1}px)`;
    }
  }

  /**
   * Animate particles at different speeds
   */
  animateParticles(relativeScroll) {
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
      const speed = 0.05 + (index * 0.01);
      particle.style.transform = `translateY(${relativeScroll * speed}px)`;
    });
  }
}

// Export for use
export default ParallaxManager;
