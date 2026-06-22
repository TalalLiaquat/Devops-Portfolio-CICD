# DevOps Portfolio

A modern, responsive single-page portfolio website built with React and Vite. Perfect for showcasing DevOps projects and skills with a professional design.

## Features

- ✨ **Dark/Light Mode Toggle** — Switch between themes with persistent storage
- 🎯 **Responsive Design** — Mobile, tablet, and desktop optimized
- 🚀 **Modern Styling** — Clean, professional UI with smooth animations
- 📱 **Functional Sections**:
  - Hero section with call-to-action buttons
  - Skills showcase with icons (AWS, Docker, Kubernetes, Jenkins, Terraform, Ansible, Linux, Git)
  - Projects gallery with images and hover effects
  - Contact section with email and LinkedIn links
  - Sticky navigation bar
  - Footer with copyright

## Tech Stack

- **React 18** — UI framework
- **Vite** — Fast build tool
- **CSS3** — Modern styling with CSS custom properties
- **Font Awesome** — Icon library (via CDN)
- **Unsplash** — Free placeholder project images

## Getting Started

### Prerequisites

- Node.js 16+ and npm (or yarn/pnpm)

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

## Project Structure

```
src/
├── App.jsx         # Main component with all sections
├── styles.css      # Global styles with light/dark mode support
└── main.jsx        # React entry point

index.html          # HTML template
vite.config.js      # Vite configuration
package.json        # Dependencies and scripts
```

## Customization

### Update Contact Information

Edit `src/App.jsx` and update:
- Email in the `Contact` section
- LinkedIn URL

### Add Project Images

Replace the Unsplash image URLs in `projectsData` with your own images:

```javascript
image: 'https://your-image-url.com/image.jpg'
```

### Change Colors

Modify the CSS custom properties in `src/styles.css`:

```css
:root {
  --primary: #58a6ff;
  --accent: #42d9c8;
  /* ... other variables */
}
```

### Add More Skills

Add to the `skillsData` array in `src/App.jsx`:

```javascript
{ name: 'Skill Name', icon: 'fas fa-icon-name' },
```

[Browse Font Awesome icons](https://fontawesome.com/icons)

## Theme Toggle

The dark/light mode preference is saved to `localStorage`, so it persists across sessions.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers on iOS and Android

## License

Open source. Feel free to use for your portfolio.
