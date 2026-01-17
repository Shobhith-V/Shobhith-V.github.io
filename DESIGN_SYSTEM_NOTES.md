# Design System & Refactoring Notes

## Overview
This document outlines the comprehensive redesign of the personal website to create a world-class, research-driven portfolio with a dark, computational neuroscience aesthetic.

## Design System

### Color Palette
- **Primary Background**: `#0a0a0f` - Deep black with subtle blue undertones
- **Secondary Background**: `#121218` - Elevated surfaces
- **Accent Primary**: `#00d9ff` - Electric cyan for highlights and links
- **Accent Secondary**: `#0099cc` - Deeper blue for hover states
- **Highlight**: `#ffb020` - Warm gold/amber for important elements (achievements, highlights)
- **Text Primary**: `#f0f0f5` - High contrast white
- **Text Secondary**: `#b0b0c0` - Secondary text
- **Text Tertiary**: `#707080` - Muted text

### Typography
- **Body Font**: Inter (clean, modern sans-serif)
- **Headline/Technical Font**: JetBrains Mono (monospace for technical depth)
- **Font Sizes**: Responsive scale from 14px to 3.5rem
- **Font Weights**: Light (300) to Extra Bold (800)

### Spacing & Layout
- Modular spacing scale: xs (0.25rem) to 4xl (6rem)
- Max content width: 900px for readability
- Consistent vertical rhythm with reveal animations

### Visual Effects
- Subtle noise texture overlay for depth
- Gradient backgrounds with radial overlays
- Smooth scroll reveals using Intersection Observer
- Hover effects with glow and transform
- Parallax effect on hero section (subtle)

## Key Features Implemented

### 1. Hero Section
- Cinematic landing with gradient backgrounds
- Large, bold typography with accent colors
- Clear call-to-action buttons
- Responsive design

### 2. YouTube Video Embed
- Prominent section for Cybathlon performance
- Responsive 16:9 aspect ratio wrapper
- Professional presentation with description
- **NOTE**: Update the video ID in `index.html` and `project-cybathlon-knee-prosthesis.html`
  - Replace `YOUR_VIDEO_ID_HERE` with actual YouTube video ID

### 3. Project Cards
- Modern card design with hover effects
- Thumbnail support with fallback gradients
- Tag system with hover states
- Smooth reveal animations
- Links to details, GitHub, and PDFs

### 4. Project Detail Pages
- Improved narrative structure
- Sectioned content (Problem, Approach, Impact)
- Embedded PDF viewers
- Video embeds where applicable
- Back navigation

### 5. Navigation
- Horizontal navigation bar
- Active state indicators
- Smooth hover effects
- Responsive mobile layout

### 6. Animations & Interactions
- Scroll-based reveals (fade-in-up)
- Smooth transitions (300ms ease)
- Hover effects on interactive elements
- Parallax on hero section
- Cursor trail effect on hero (desktop only)

## Files Modified

### CSS
- `src/index.css` - Complete redesign with new design system

### JavaScript
- `js/animations.js` - New file for scroll reveals and interactions
- `js/projects.js` - Updated with reveal classes
- `js/publications.js` - Updated with reveal animations
- `js/media.js` - Updated with reveal animations

### HTML
- `index.html` - Hero section, video embed, improved narrative
- `projects.html` - Enhanced intro text
- `about.html` - Improved research interests section
- `publications.html` - Better descriptions
- `media.html` - Enhanced gallery
- `project-*.html` - Updated layouts and animations script

## Remaining Tasks

1. **YouTube Video URL**: Update placeholder in:
   - `index.html` (line ~X)
   - `project-cybathlon-knee-prosthesis.html` (line ~X)
   - Format: `https://www.youtube.com/embed/VIDEO_ID`

2. **Project Detail Pages**: Consider updating all project detail pages to follow the improved structure (Problem/Approach/Impact sections)

3. **Optional Enhancements**:
   - Add more project images/figures
   - Expand media gallery
   - Add more publications as they become available
   - Consider adding a blog/research notes section

## Performance Considerations

- Lazy loading for images
- Intersection Observer for efficient scroll animations
- CSS animations (GPU accelerated)
- Minimal JavaScript footprint
- Optimized font loading

## Accessibility

- High contrast text
- Focus indicators on interactive elements
- Semantic HTML structure
- Alt text for images
- Keyboard navigation support

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Progressive enhancement for older browsers
- Responsive design for mobile devices

---

*This redesign transforms the site from a functional portfolio to a memorable, research-driven showcase that signals technical depth and elite research potential.*