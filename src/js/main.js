// Main Application Entry Point

import LanguageManager from './modules/language.js';
import NavigationManager from './modules/navigation.js';
import ParallaxManager from './modules/parallax.js';

/**
 * Application Main Class
 */
class Portfolio {
  constructor() {
    this.languageManager = null;
    this.navigationManager = null;
    this.parallaxManager = null;
  }

  /**
   * Initialize application
   */
  init() {
    console.log('Initializing Portfolio Application...');

    this.initLanguageManager();
    this.initNavigationManager();
    this.initParallaxManager();

    console.log('Portfolio Application initialized ✓');
  }

  /**
   * Initialize language manager
   */
  initLanguageManager() {
    this.languageManager = new LanguageManager('en');
    this.languageManager.updateUI();

    // Listen for language toggle
    const langToggle = document.querySelector('.lang-toggle');
    if (langToggle) {
      langToggle.addEventListener('click', () => {
        this.languageManager.toggle();
      });
    }
  }

  /**
   * Initialize navigation manager
   */
  initNavigationManager() {
    this.navigationManager = new NavigationManager();
    this.navigationManager.init();
  }

  /**
   * Initialize parallax manager
   */
  initParallaxManager() {
    this.parallaxManager = new ParallaxManager();
    this.parallaxManager.init();
  }
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const app = new Portfolio();
  app.init();
});

// Export for external use
export default Portfolio;
