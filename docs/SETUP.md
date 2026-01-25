# Setup Guide

## Quick Start

### Option 1: Python Server (Recommended)

```bash
cd portfolio
npm start
# or
python -m http.server 8000 --directory src
```

Visit: http://localhost:8000

### Option 2: Using Node.js

```bash
npm install -g http-server
cd portfolio/src
http-server
```

### Option 3: VSCode Live Server

1. Install [Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
2. Right-click `src/index.html`
3. Select "Open with Live Server"

## Deployment

### GitHub Pages

1. Push to GitHub
2. Go to Settings > Pages
3. Select "main" branch
4. Deploy from `/docs` or create GitHub Actions workflow

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

### Traditional Hosting

1. Upload `src/` folder to server
2. Set `src/index.html` as root
3. Ensure `.htaccess` for SPA routing if needed

## Troubleshooting

### CSS not loading
- Check file paths in HTML
- Verify `src/css/` files exist
- Check browser console for 404 errors

### JavaScript not running
- Verify `src/js/main.js` imports work
- Check if modules are in correct paths
- Ensure `type="module"` on script tag

### Images not displaying
- Add images to `src/assets/images/`
- Update paths in CSS/HTML
- Use relative paths

### Mobile menu not working
- Check `.nav-container` element exists
- Verify `.menu-toggle` button exists
- Ensure JavaScript is loaded

## Browser DevTools

1. Open DevTools (F12)
2. Check Console for errors
3. Check Network tab for failed requests
4. Verify JavaScript modules load

## Local SSL (HTTPS)

For testing HTTPS locally:

```bash
# Python 3.7+
python -m http.server 8000 --cgi
```

## Dependencies

The project has no runtime dependencies!

Optional dev dependencies:
- ESLint (for code quality)
- Prettier (for formatting)

```bash
npm install
```

## Environment Variables

Not required for this project, but if needed in future:

Create `.env` file:
```
VITE_API_URL=https://api.example.com
```

Access in JavaScript:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

## Performance Testing

### Lighthouse

1. Open DevTools
2. Go to Lighthouse tab
3. Click "Analyze page load"

### WebPageTest

Visit https://www.webpagetest.org and enter your URL

### GTmetrix

Visit https://gtmetrix.com and enter your URL

## Common Commands

```bash
# Start development server
npm start

# Build (no-op for vanilla JS)
npm run build

# Lint code
npm run lint

# Check file structure
tree src/
```

## Getting Help

- Check existing issues on GitHub
- Read documentation in `/docs`
- Open a new issue with details
- Contact: allan.umana@outlook.com
