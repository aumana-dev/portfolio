// Navigation Module

class NavigationManager {
  constructor() {
    this.menuToggle = document.querySelector('.menu-toggle');
    this.navContainer = document.querySelector('.nav-container');
    this.navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  }

  /**
   * Initialize navigation event listeners
   */
  init() {
    this.setupSmoothScrolling();
    this.setupMobileMenu();
    this.setupOutsideClickClose();
  }

  /**
   * Setup smooth scrolling for anchor links
   */
  setupSmoothScrolling() {
    this.navLinks.forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        const target = document.querySelector(targetId);

        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          this.closeMenu();
        }
      });
    });
  }

  /**
   * Setup mobile menu toggle
   */
  setupMobileMenu() {
    if (this.menuToggle) {
      this.menuToggle.addEventListener('click', () => {
        this.toggleMenu();
      });
    }
  }

  /**
   * Close menu when clicking outside
   */
  setupOutsideClickClose() {
    document.addEventListener('click', (e) => {
      if (!e.target.closest('nav') && this.navContainer) {
        this.closeMenu();
      }
    });
  }

  /**
   * Toggle menu visibility
   */
  toggleMenu() {
    if (this.navContainer) {
      this.navContainer.classList.toggle('active');
    }
  }

  /**
   * Close menu
   */
  closeMenu() {
    if (this.navContainer) {
      this.navContainer.classList.remove('active');
    }
  }
}

// Export for use
export default NavigationManager;
