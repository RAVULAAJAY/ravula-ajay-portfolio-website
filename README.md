# Ravula Ajay - AI & Full Stack Developer Portfolio

A modern, responsive portfolio website showcasing projects, skills, and achievements. Built with React, TypeScript, and Tailwind CSS.

**Live Demo:** [View Portfolio](http://localhost:8080/)

**GitHub Repository:** [RAVULAAJAY/ravula-ajay-portfolio-website](https://github.com/RAVULAAJAY/ravula-ajay-portfolio-website)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Requirements](#requirements)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
- [Deployment](#deployment)
- [Configuration](#configuration)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

This is a professional portfolio website designed to showcase:
- **Personal Information** - Profile with circular and square photo displays
- **Featured Projects** - 6 major projects with descriptions, tech stacks, and GitHub links
- **Skills** - Technical expertise displayed with visual indicators
- **Achievements & Recognition** - Certifications and academic recognition
- **About Section** - Professional background and education details
- **Contact Information** - Direct links to LinkedIn, GitHub, and email

---

## ✨ Features

### Core Features
- ✅ **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- ✅ **Dark Mode Support** - Built-in theme switching capability
- ✅ **Smooth Animations** - Elegant fade-in and slide-in transitions
- ✅ **Fast Performance** - Optimized with Vite for rapid load times
- ✅ **SEO Optimized** - Meta tags and structured data for better search visibility
- ✅ **Accessibility** - ARIA labels and semantic HTML for screen readers

### Sections
1. **Navigation Bar** - Fixed navbar with smooth scrolling
2. **Hero Section** - Eye-catching introduction with circular photo
3. **About Me** - Personal information with square photo and achievements
4. **Skills** - Technical skills with visual proficiency indicators
5. **Featured Projects** - Portfolio of 6 projects with images and GitHub links
6. **Achievements & Recognition** - Certifications and awards
7. **Contact Section** - Social media links and contact form
8. **Footer** - Quick navigation and social links

### Additional Features
- 📄 **Resume Download** - Direct PDF download from portfolio
- 🔗 **Social Links** - LinkedIn, GitHub, and Email integration
- 🎨 **Custom Favicon** - Branded favicon display
- 📱 **Mobile Optimized** - Touch-friendly interface
- 🚀 **Fast Navigation** - Smooth scroll-to-section functionality

---

## 🛠️ Tech Stack

### Frontend Framework
- **React 18.3.1** - UI library
- **TypeScript 5.8.3** - Type-safe JavaScript
- **Vite 5.4.19** - Build tool and dev server

### Styling & UI
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Shadcn/ui** - High-quality React components
- **Lucide React 0.462.0** - Beautiful SVG icons

### Libraries & Tools
- **React Router DOM 6.30.1** - Client-side routing
- **React Hook Form 7.61.1** - Efficient form handling
- **Zod 3.25.76** - TypeScript-first schema validation
- **Sonner 1.7.4** - Toast notifications
- **TailwindCSS Animate 1.0.7** - Animation utilities

### Development Tools
- **ESLint 9.32.0** - Code quality and linting
- **TypeScript ESLint 8.38.0** - TypeScript linting
- **Autoprefixer 10.4.21** - CSS vendor prefixes
- **PostCSS 8.5.6** - CSS processing

### Dependencies
- **Recharts 2.15.4** - Data visualization
- **Radix UI** - Accessible component primitives
- **Class Variance Authority 0.7.1** - Component styling
- **Date FNS 3.6.0** - Date utilities

---

## 📋 Requirements

### System Requirements
- **Node.js** - v16 or higher
- **npm** - v7 or higher (or yarn/pnpm alternative)
- **Git** - for version control

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/RAVULAAJAY/ravula-ajay-portfolio-website.git
cd ravula-ajay-portfolio-website
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Run Development Server
```bash
npm run dev
```

The application will start at `http://localhost:8080/`

### 4. Build for Production
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
ravula-ajay-portfolio-website/
├── public/                          # Static assets
│   ├── favicon.ico.jpg             # Website favicon
│   ├── my_resume.pdf               # Resume document
│   ├── Hero Circle.jpg             # Hero section image
│   ├── About Square.jpg            # About section image
│   ├── Online-book-store.jpg       # Project image
│   ├── Farm-direct.jpg             # Project image
│   ├── AI-Powered Student Verification System.webp
│   ├── College Event Management App.jpg
│   ├── Smart Campus Store App.jpg
│   ├── Sustainability Image Classification.jpg
│   └── robots.txt                  # SEO robots file
│
├── src/                             # Source code
│   ├── components/                  # React components
│   │   ├── Hero.tsx               # Hero section
│   │   ├── About.tsx              # About section
│   │   ├── Skills.tsx             # Skills section
│   │   ├── Projects.tsx           # Projects section
│   │   ├── Achievements.tsx       # Achievements section
│   │   ├── Contact.tsx            # Contact section
│   │   ├── Navigation.tsx         # Navigation bar
│   │   ├── Footer.tsx             # Footer component
│   │   └── ui/                    # UI components (shadcn/ui)
│   │
│   ├── hooks/                       # Custom React hooks
│   │   ├── use-toast.ts
│   │   └── use-mobile.tsx
│   │
│   ├── lib/                         # Utility functions
│   │   └── utils.ts
│   │
│   ├── assets/                      # Image and media assets
│   │   └── hero-bg.jpg
│   │
│   ├── pages/                       # Page components
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   │
│   ├── App.tsx                      # Main app component
│   ├── main.tsx                     # Entry point
│   ├── index.css                    # Global styles
│   └── vite-env.d.ts               # Vite environment types
│
├── index.html                       # HTML template
├── package.json                     # Dependencies and scripts
├── vite.config.ts                   # Vite configuration
├── tsconfig.json                    # TypeScript configuration
├── tailwind.config.ts               # Tailwind CSS configuration
├── postcss.config.js                # PostCSS configuration
├── eslint.config.js                 # ESLint configuration
└── README.md                        # This file
```

---

## 🔧 How It Works

### Component Architecture
1. **App.tsx** - Main component that loads all sections
2. **Navigation.tsx** - Fixed header with smooth scroll navigation
3. **Hero.tsx** - Landing section with profile image and CTA buttons
4. **About.tsx** - Personal information with education and certifications
5. **Skills.tsx** - Technical expertise display
6. **Projects.tsx** - Showcasing 6 featured projects with GitHub links
7. **Achievements.tsx** - Timeline of certifications and recognition
8. **Contact.tsx** - Contact form and social media links
9. **Footer.tsx** - Navigation footer with social icons

### Data Flow
- **State Management** - React hooks (useState, useContext) for component state
- **Form Handling** - React Hook Form with Zod validation
- **Routing** - Smooth scroll-based routing via anchor links
- **Styling** - Tailwind CSS utility classes with custom animations

### Key Interactions
- **Smooth Scrolling** - Click navigation items to scroll to sections
- **Download Resume** - One-click PDF download from hero section
- **Social Links** - Direct links to LinkedIn, GitHub, and email
- **Contact Form** - Email integration with validation
- **Responsive Layout** - CSS Grid and Flexbox for responsive design

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

#### Option 1: Using Git
1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Framework: **Vite**
6. Click "Deploy"

#### Option 2: Using Vercel CLI
```bash
npm install -g vercel
vercel login
vercel
```

### Deploy to Other Platforms

#### Netlify
```bash
npm run build
# Connect your GitHub repo to Netlify
# Select 'dist' as publish directory
```

#### GitHub Pages
```bash
# Update vite.config.ts base URL
# npm run build
# Push dist folder to gh-pages branch
```

#### Traditional Hosting (Apache, Nginx)
```bash
npm run build
# Upload 'dist' folder contents to server
# Configure server to serve index.html for SPA routing
```

### Environment Variables
Create `.env.local` file (if needed):
```
VITE_API_URL=your_api_url
VITE_CONTACT_EMAIL=your_email@example.com
```

---

## ⚙️ Configuration

### Customize Content

#### Update Personal Information
**File:** `src/components/Hero.tsx`
```typescript
<h1>Your Name Here</h1>
<p>Your professional title</p>
```

#### Update Projects
**File:** `src/components/Projects.tsx`
```typescript
const projects: Project[] = [
  {
    title: "Your Project",
    description: "Project description",
    tech: ["React", "Node.js"],
    github: "https://github.com/yourrepo",
    image: "/your-image.jpg",
  },
];
```

#### Update Skills
**File:** `src/components/Skills.tsx`
```typescript
const skills: Skill[] = [
  { category: "Frontend", items: ["React", "TypeScript"] },
];
```

#### Update Contact Links
**File:** `src/components/Contact.tsx`
```typescript
const socialLinks = [
  {
    label: "LinkedIn",
    link: "https://linkedin.com/in/yourprofile",
  },
  {
    label: "GitHub",
    link: "https://github.com/yourprofile",
  },
];
```

### Styling Customization

#### Colors
**File:** `src/index.css` (CSS Variables)
```css
:root {
  --primary: #your-color;
  --primary-light: #your-light-color;
}
```

#### Fonts
**File:** `index.html`
```html
<link href="https://fonts.googleapis.com/css2?family=Your-Font&display=swap" rel="stylesheet">
```

---

## 🎨 Customization Guide

### Adding New Sections
1. Create component in `src/components/`
2. Import in `src/App.tsx`
3. Add navigation link in `src/components/Navigation.tsx`
4. Style with Tailwind CSS

### Adding Images
1. Place images in `public/` folder
2. Reference in components: `/image-name.jpg`
3. Update image paths in component files

### Modifying Colors & Theme
- Edit `tailwind.config.ts` for theme colors
- Update CSS variables in `src/index.css`
- Modify component className attributes

---

## 📝 Scripts

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

---

## 🔗 Social Links & Contact

- **LinkedIn:** [linkedin.com/in/ravula-ajay-42612a288](https://www.linkedin.com/in/ravula-ajay-42612a288/)
- **GitHub:** [github.com/RAVULAAJAY](https://github.com/RAVULAAJAY)
- **Email:** ravulaajay9@gmail.com
- **Portfolio:** [localhost:8080](http://localhost:8080/)

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repository and submit pull requests.

---

## 📞 Support

For issues or questions:
1. Check existing GitHub issues
2. Create a new GitHub issue with detailed description
3. Email: ravulaajay9@gmail.com

---

## 🎓 About the Developer

**Ravula Ajay** - Aspiring AI & Full Stack Developer passionate about building intelligent, real-world solutions in education, agriculture, and accessibility.

- **Education:** B.Tech Computer Science and Engineering (AIML), SR University, 2023-2027
- **Certifications:** TCS ION, Microsoft Azure Fundamentals, Salesforce
- **Experience:** Full-stack development, AI/ML projects, and web applications

---

**Last Updated:** November 13, 2025

**Version:** 1.0.0

---

Made with ❤️ by Ravula Ajay
