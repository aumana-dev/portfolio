# Contributing Guide

## Getting Started

1. Fork the repository
2. Clone your fork
3. Create a new branch: `git checkout -b feature/your-feature`
4. Make your changes
5. Commit: `git commit -m "Add your feature"`
6. Push: `git push origin feature/your-feature`
7. Submit a pull request

## Development Setup

### Requirements
- Python 3.x (for local server)
- Git
- Code editor (VS Code recommended)

### Installation

```bash
git clone https://github.com/aumana-dev/portfolio.git
cd portfolio
npm start
```

Visit `http://localhost:8000`

## Code Style

### JavaScript
- Use ES6 modules
- Use meaningful variable names
- Add JSDoc comments to functions
- Follow the existing code structure

```javascript
/**
 * Description of what the function does
 * @param {type} paramName - Parameter description
 * @returns {type} - Return description
 */
function myFunction(paramName) {
  // Implementation
}
```

### CSS
- Use CSS variables from `variables.css`
- Keep styles modular and organized
- Use meaningful class names
- Follow mobile-first approach

```css
.component {
  /* Mobile styles */
  padding: 1rem;
}

@media (min-width: 768px) {
  .component {
    /* Desktop styles */
    padding: 2rem;
  }
}
```

### HTML
- Use semantic HTML
- Include proper ARIA labels
- Use data attributes for internationalization

```html
<button aria-label="Description" data-en="Button" data-es="Botón">
  Button
</button>
```

## File Structure Rules

- Keep files small and focused
- Use lowercase filenames with hyphens
- Group related files in directories
- Keep assets organized by type

## Testing

Before submitting a pull request, test:
- [ ] Desktop browsers (Chrome, Firefox, Safari, Edge)
- [ ] Mobile browsers (iOS Safari, Chrome Android)
- [ ] Tablet devices
- [ ] Language switching
- [ ] Smooth scrolling
- [ ] Parallax effects
- [ ] Mobile menu

## Pull Request Guidelines

1. **Clear title**: "Add feature" not "fix"
2. **Description**: Explain what and why
3. **Screenshot/Demo**: If visual changes
4. **Tests**: Confirm testing done
5. **No breaking changes**: Or clearly document

## Reporting Issues

Include:
- Browser and OS
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

## Questions?

Open an issue or contact: allan.umana@outlook.com
