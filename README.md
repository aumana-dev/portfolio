# Allan Umana - Professional Portfolio

Responsive, modular portfolio website showcasing full-stack development expertise. Features modern parallax animations, 3D effects, and multilingual support (English/Spanish). Built with vanilla HTML, CSS, and JavaScript using a professional, scalable architecture.

**Live Demo:** https://aumana-dev.github.io/portfolio/

## 🌟 Features

✨ **Modern Design**
- Responsive layout for all devices
- Smooth parallax scrolling effects
- 3D grid animations with particles
- Glassmorphism UI elements
- Dark theme with gradient accents

🌐 **Multilingual Support**
- English/Spanish language toggle
- Real-time content translation
- Persistent language preference
- Clean i18n architecture

🎨 **Interactive Elements**
- Smooth scrolling navigation
- Hover animations on components
- Mobile-friendly menu
- Animated particles and 3D effects
- Optimized animations with requestAnimationFrame

📱 **Sections**
- **Hero**: Impactful introduction with CTAs
- **About**: Professional background and skills
- **Projects**: Portfolio of featured work
- **Contact**: Easy communication options

## 🏗️ Architecture

This project uses a **professional, scalable architecture** perfect for portfolios and small-to-medium applications.

### Project Structure

```
portfolio/
├── src/
│   ├── assets/          # Images, icons, fonts
│   ├── css/             # Modularized styles
│   │   ├── variables.css
│   │   ├── layout.css
│   │   ├── components.css
│   │   ├── sections.css
│   │   ├── animations.css
│   │   └── responsive.css
│   ├── js/              # Modular JavaScript
│   │   ├── main.js
│   │   ├── modules/
│   │   │   ├── language.js
│   │   │   ├── navigation.js
│   │   │   └── parallax.js
│   │   └── utils/
│   │       └── helpers.js
│   └── index.html
├── docs/                # Documentation
├── config/              # Configuration files
└── package.json         # Project metadata
```

### Key Design Principles

✅ **No Dependencies** - Vanilla JavaScript, HTML, CSS
✅ **Modular** - ES6 modules for clean code
✅ **Scalable** - Easy to extend and maintain
✅ **Professional** - Production-ready code
✅ **Performant** - GPU-accelerated animations, requestAnimationFrame

## 🚀 Quick Start

### Clone the Repository
```bash
git clone https://github.com/aumana-dev/portfolio.git
cd portfolio
```

### Option 1: Python Server (Recommended)
```bash
npm start
# or
python -m http.server 8000 --directory src
```

### Option 2: Node.js
```bash
npm install -g http-server
npm start
```

### Option 3: VSCode Live Server
1. Install Live Server extension
2. Right-click `src/index.html`
3. Select "Open with Live Server"

Then visit: **http://localhost:8000**

## 💻 Technologies

**Frontend**
- HTML5 (Semantic markup)
- CSS3 (Grid, Flexbox, Variables, Animations)
- JavaScript ES6+ (Modules, Classes)

**Architecture**
- Vanilla JavaScript (No frameworks)
- Modular CSS structure
- Mobile-first responsive design
- Accessibility features (ARIA labels)

**Tools**
- Git & GitHub
- npm for package management

## 📚 Projects

### 1. Inventory Management System
- Custom solution for retail product management
- Stock tracking and order automation
- **Tech**: Python, SQL, Automation

### 2. Fitness Center App
- Comprehensive gym management application
- Member tracking and workout scheduling
- **Tech**: Java, Android, Firebase

### 3. HR Management Platform
- Enterprise resource planning solution
- Employee data and payroll management
- **Tech**: C#, .NET, SQL Server

## 🎯 Skills

**Languages**: Python, Java, C#, JavaScript

**Frontend**: React, HTML5, CSS3, Responsive Design

**Backend**: Node.js, .NET, REST APIs

**Database**: SQL, SQL Server

**Tools**: Git, GitHub, Agile/Scrum, Linux

## 📖 Documentation

- [Architecture Guide](docs/ARCHITECTURE.md) - Deep dive into structure
- [Contributing Guide](docs/CONTRIBUTING.md) - How to contribute
- [Setup Guide](docs/SETUP.md) - Detailed setup instructions

## 🌐 Deployment

### GitHub Pages
```bash
git push origin main
# Enable in Settings > Pages
```

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

## 🔄 Module Overview

### LanguageManager
Handles i18n translations with English/Spanish support.

```javascript
const langManager = new LanguageManager('en');
langManager.toggle();  // Switch language
```

### NavigationManager
Manages navigation, smooth scrolling, and mobile menu.

```javascript
const navManager = new NavigationManager();
navManager.init();
```

### ParallaxManager
Handles all scroll-based animations and effects.

```javascript
const parallax = new ParallaxManager();
parallax.init();
```

## ⚡ Performance

- **Lighthouse Score**: 90+
- **Load Time**: < 2 seconds
- **SEO Optimized**: Semantic HTML, meta tags
- **Accessible**: WCAG 2.1 compliant
- **Mobile Optimized**: Responsive & touch-friendly

## 🛠️ Browser Support

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile Browsers

## 🤝 Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](docs/CONTRIBUTING.md) for guidelines.

## 📞 Contact

- **Email**: allan.umana@outlook.com
- **LinkedIn**: [linkedin.com/in/allan-umana](https://linkedin.com/in/allan-umana)
- **Location**: San Jose, Costa Rica

## 📄 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) for details.

## 🎓 Lessons Learned

This portfolio demonstrates:
- Professional project structure and organization
- Modular, maintainable code practices
- Responsive and accessible web design
- Performance optimization techniques
- Git workflow and version control
- Documentation best practices

## 🚀 Future Enhancements

- [ ] Add service worker (PWA)
- [ ] Lazy loading for assets
- [ ] Analytics integration
- [ ] TypeScript migration
- [ ] Form submission handling
- [ ] Dark mode toggle
- [ ] CMS integration
- [ ] API connectivity

---

**Built with passion and code** © 2026 Allan Umana

