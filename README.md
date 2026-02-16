# Abinaya S - Portfolio Website

A modern, professional portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern, premium design inspired by SaaS landing pages
- 🌙 Dark/Light mode toggle with localStorage persistence
- 📱 Fully responsive design for all screen sizes
- ✨ Smooth animations with Framer Motion
- 🚀 Smooth scrolling navigation
- 📊 Progress bar indicator
- 💫 Glassmorphism effects
- 🎯 Professional sections: Hero, About, Skills, Projects, Timeline, Contact

## Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Font Awesome
- **Fonts**: Inter (Google Fonts)

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Timeline.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── ThemeToggle.jsx
│   ├── ProjectCard.jsx
│   ├── SkillCard.jsx
│   └── TimelineItem.jsx
├── data/
│   ├── projects.js
│   ├── skills.js
│   └── timeline.js
├── hooks/
│   └── useTheme.js
├── App.jsx
├── main.jsx
└── index.css
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd abinaya-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Sections

1. **Hero** - Introduction with typing animation and CTA buttons
2. **About** - Professional description with achievement badges
3. **Skills** - Interactive skill cards with hover effects
4. **Projects** - Featured projects with tech stack badges
5. **Timeline** - Professional journey timeline with Xcelevate Bootcamp
6. **Contact** - Contact form with validation
7. **Footer** - Professional footer

## Customization

### Personal Information

Update the following files:
- `src/data/timeline.js` - Timeline entries and Xcelevate Bootcamp details
- `src/data/projects.js` - Project information
- `src/data/skills.js` - Skills list
- Component files for personal text content

### Adding New Timeline Entries

Edit `src/data/timeline.js`:

```javascript
{
  title: 'New Position',
  company: 'Company Name',
  period: '2024',
  description: 'Description of your role and achievements',
  type: 'work', // or 'education'
  badge: 'Optional Badge' // optional
}
```

### Adding New Projects

Edit `src/data/projects.js`:

```javascript
{
  title: 'Project Title',
  description: 'Project description',
  techStack: ['Tech1', 'Tech2'],
  githubLink: 'https://github.com/...',
  image: 'fas fa-icon'
}
```

### Theme Customization

Edit `tailwind.config.js` to customize colors and animations:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#2563EB',
      darkBg: '#0F172A',
      lightBg: '#F8FAFC',
    }
  }
}
```

## Features Implemented

- ✅ React 18 with modern hooks
- ✅ Vite for fast development and building
- ✅ Tailwind CSS with custom configuration
- ✅ Framer Motion animations
- ✅ Dark/Light mode toggle
- ✅ Responsive navigation with mobile menu
- ✅ Typing animation in hero section
- ✅ Scroll progress bar
- ✅ Smooth scrolling navigation
- ✅ Intersection Observer for scroll animations
- ✅ Hover effects and micro-interactions
- ✅ Glassmorphism design elements
- ✅ Professional timeline layout
- ✅ Contact form with validation
- ✅ Social media integration
- ✅ Xcelevate Bootcamp timeline entry with badge

## Animation Details

- **Fade-in animations** for section entrances
- **Slide-up animations** for content reveal
- **Staggered animations** for cards and skills
- **Hover animations** with scale and shadow effects
- **Typing animation** in hero section
- **Scroll-triggered animations** using viewport detection

## Browser Support

- Chrome/Chromium 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Performance

- ⚡ Built with Vite for optimal development experience
- 🎯 Lazy loading and code splitting ready
- 📱 Responsive images and optimized assets
- 🚀 Production builds optimized for performance

## License

This project is open source and available under the [MIT License](LICENSE).

---

© 2026 Abinaya S | Designed with Passion
