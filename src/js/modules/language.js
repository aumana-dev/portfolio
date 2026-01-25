// Language Configuration Module

class LanguageManager {
  constructor(defaultLang = 'en') {
    this.currentLang = defaultLang;
    this.supportedLanguages = ['en', 'es'];
  }

  /**
   * Toggle between languages
   */
  toggle() {
    this.currentLang = this.currentLang === 'en' ? 'es' : 'en';
    this.updateUI();
  }

  /**
   * Set specific language
   * @param {string} lang - Language code ('en' or 'es')
   */
  setLanguage(lang) {
    if (this.supportedLanguages.includes(lang)) {
      this.currentLang = lang;
      this.updateUI();
    }
  }

  /**
   * Update button text and translate content
   */
  updateUI() {
    // Update button text
    const langText = document.querySelector('.lang-text');
    if (langText) {
      langText.textContent = this.currentLang === 'en' ? 'ES' : 'EN';
    }

    // Find all elements that need translation
    document.querySelectorAll('[data-en]').forEach(element => {
      const translation = element.getAttribute(`data-${this.currentLang}`);
      if (translation) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.placeholder = translation;
        } else {
          element.innerHTML = translation;
        }
      }
    });
  }

  getCurrentLanguage() {
    return this.currentLang;
  }
}

// Export for use
export default LanguageManager;
