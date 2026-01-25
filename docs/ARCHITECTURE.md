# Architecture Guide

## Project Structure

```
portfolio/
├── src/
│   ├── assets/
│   │   ├── images/        # Image assets
│   │   ├── icons/         # Icon assets
│   │   └── fonts/         # Font files
│   ├── css/
│   │   ├── variables.css      # Design system & CSS variables
│   │   ├── layout.css         # Header, footer, container
│   │   ├── components.css     # Reusable components
│   │   ├── sections.css       # Section-specific styles
│   │   ├── animations.css     # Keyframes & 3D effects
│   │   └── responsive.css     # Mobile & tablet breakpoints
│   ├── js/
│   │   ├── main.js            # Application entry point
│   │   ├── modules/
│   │   │   ├── language.js    # i18n language management
│   │   │   ├── navigation.js  # Navigation & menu handling
│   │   │   └── parallax.js    # Parallax & scroll effects
│   │   └── utils/
│   │       └── helpers.js     # Utility functions
│   └── index.html             # Main HTML template
├── public/                    # Static files for deployment
├── docs/
│   ├── ARCHITECTURE.md        # This file
│   ├── CONTRIBUTING.md        # Contributing guidelines
│   └── SETUP.md               # Setup instructions
├── config/
│   └── .editorconfig          # Editor configuration
├── package.json               # Project metadata
├── README.md                  # Project overview
└── LICENSE                    # MIT License
```

## Design Decisions

### 1. **Vanilla JavaScript (No Framework)**
- No build process required
- Fast loading
- Full control over functionality
- Easy to learn and maintain

### 2. **CSS Modularization**
- **variables.css**: Design tokens (colors, spacing, z-index)
- **layout.css**: Header, footer, container styles
- **components.css**: Reusable UI components
- **sections.css**: Hero, about, projects, contact sections
- **animations.css**: All keyframes and effects
- **responsive.css**: Mobile/tablet breakpoints

**Benefits:**
- Single Responsibility Principle
- Easy to maintain and scale
- Reusable components
- Clear separation of concerns

### 3. **JavaScript Modules (ES6)**
- **LanguageManager**: Handles i18n translations
- **NavigationManager**: Menu, smooth scrolling
- **ParallaxManager**: Scroll effects and animations
- **Helpers**: Utility functions (throttle, debounce, etc.)

**Benefits:**
- Modular and reusable
- Easy to test
- Better code organization
- Easier to extend

## Component Architecture

### LanguageManager
Manages language switching and content translation.

```javascript
const langManager = new LanguageManager('en');
langManager.toggle();  // Switch language
langManager.setLanguage('es');  // Set specific language
```

### NavigationManager
Handles navigation menu, smooth scrolling, and mobile interactions.

```javascript
const navManager = new NavigationManager();
navManager.init();  // Initialize
```

### ParallaxManager
Handles all scroll effects and animations.

```javascript
const parallax = new ParallaxManager();
parallax.init();  // Initialize
```

## Performance Optimizations

1. **RequestAnimationFrame**: Smooth 60fps animations
2. **Event Delegation**: Efficient event handling
3. **CSS Transforms**: GPU-accelerated animations
4. **Debouncing/Throttling**: Prevent excessive function calls

## Scalability

### Adding New Sections
1. Add HTML in `src/index.html`
2. Create CSS in `src/css/sections.css`
3. Add any JS logic to appropriate module

### Adding New Features
1. Create new module in `src/js/modules/`
2. Import and initialize in `src/js/main.js`
3. Export for reusability

### Upgrading to Framework
The modular structure makes it easy to migrate to React, Vue, etc.:
- Move modules to component logic
- Use CSS-in-JS or Tailwind
- Keep the same architecture

## Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers

## Future Enhancements

- [ ] Add service worker for PWA
- [ ] Implement lazy loading for images
- [ ] Add analytics
- [ ] Upgrade to TypeScript
- [ ] Add form submission
- [ ] Add dark mode toggle
- [ ] Integrate with CMS
