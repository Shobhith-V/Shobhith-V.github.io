# Website Setup & Maintenance Guide

## Repository Structure

```
.
├── index.html              # Home page
├── projects.html           # Projects listing page
├── project-*.html          # Individual project detail pages
├── publications.html       # Publications & PDFs page
├── about.html              # About & CV page
├── media.html              # Media & Travel page
├── data/
│   ├── projects.json       # Project data (add new projects here)
│   ├── publications.json   # Publication data (optional)
│   └── media.json          # Media/Travel photos data
├── js/
│   ├── navigation.js       # Navigation component
│   ├── projects.js         # Project listing & filtering
│   ├── publications.js     # Publications & PDF viewer
│   └── media.js            # Media gallery
├── src/
│   ├── index.css           # Main stylesheet
│   ├── reset.css           # CSS reset
│   └── index.js            # Grid alignment utilities
├── assets/
│   ├── images/             # Project images and photos
│   └── docs/               # CV and other documents
└── public/
    └── reports/            # PDF reports (place PDFs here)
```

## Adding a New Project

### Step 1: Add Project Data

Edit `data/projects.json` and add a new project object:

```json
{
  "id": "unique-project-id",
  "title": "Project Title",
  "summary": "One-line summary of the project",
  "tags": ["Tag1", "Tag2", "Tag3"],
  "date": "Month YYYY - Present",
  "type": "Research Project",
  "github": "https://github.com/username/repo",
  "pdf": "public/reports/project-report.pdf",
  "description": "Long-form description with **markdown-style** formatting.\n\nCan include multiple paragraphs.",
  "thumbnail": "assets/images/project-image.jpg"
}
```

**Fields:**
- `id`: Unique identifier (used in URL: `project-{id}.html`)
- `title`: Project title
- `summary`: Short one-line description (shown in project cards)
- `tags`: Array of tags for filtering
- `date`: Date range string
- `type`: Project type (e.g., "Research Project", "Internship", "Research")
- `github`: GitHub repository URL (or `null`)
- `pdf`: Path to PDF report (or `null`)
- `description`: Long description (supports `**bold**` markdown)
- `thumbnail`: Path to thumbnail image (or `null`)

### Step 2: Create Project Detail Page

Create a new file `project-{id}.html` based on the existing project detail pages. Copy the structure from `project-pfizer-bioprocess.html` and update:

1. Page title in `<title>` tag
2. Project title in `<h1>`
3. Project metadata (date, type)
4. Tags in the project-tags div
5. Project description content
6. Any images or figures

**Note**: The project detail pages are static HTML files. You can also use the `project-detail.js` loader if you prefer dynamic loading, but static pages are simpler for GitHub Pages.

### Step 3: Add Images (Optional)

Place project images in `assets/images/` and reference them in the project data or detail page.

## Adding a PDF Report

### Step 1: Place PDF File

Copy your PDF file to `public/reports/` directory:
```
public/reports/your-report-name.pdf
```

### Step 2: Link from Project

In `data/projects.json`, set the `pdf` field:
```json
"pdf": "public/reports/your-report-name.pdf"
```

### Step 3: Add to Publications (Optional)

Edit `data/publications.json` and add:
```json
{
  "id": "publication-id",
  "title": "Publication Title",
  "date": "2024",
  "type": "Technical Report",
  "description": "Brief description",
  "pdf": "public/reports/your-report-name.pdf",
  "projectId": "related-project-id"
}
```

The PDF will be viewable at:
- `publications.html?pdf=public/reports/your-report-name.pdf`
- Or linked from the project detail page

## Adding Travel Photos

### Step 1: Add Your Images

Place your travel photos in the `assets/images/` directory:
```
assets/images/your-photo-name.jpg
```

### Step 2: Add Photo to Media Gallery

Edit `data/media.json` and add a new entry:

```json
{
  "id": "unique-photo-id",
  "title": "Photo Title",
  "description": "Brief description of the photo",
  "image": "assets/images/your-photo-name.jpg",
  "location": "City, Country",
  "date": "Month Year"
}
```

## Styling Guidelines

The website uses a minimalist, research-oriented design:

- **Typography**: JetBrains Mono monospace font
- **Color Scheme**: Neutral colors with dark mode support
- **Layout**: Grid-based system aligned to character width
- **No animations**: Clean, static presentation

To modify styles, edit `src/index.css`. Key classes:
- `.project-card`: Project listing cards
- `.project-detail`: Project detail pages
- `.tag`: Tag badges
- `.pdf-viewer`: PDF iframe container
- `.media-item`: Media gallery items

## Navigation

Navigation is automatically rendered on all pages via `js/navigation.js`. The current page is set via the `data-current-page` attribute on the `#nav-container` div.

## Testing Locally

Since the site uses `fetch()` to load JSON files, you'll need a local server:

### Python
```bash
python -m http.server 8000
```

### Node.js
```bash
npx http-server
```

Then open `http://localhost:8000` in your browser.

## GitHub Pages Deployment

1. Push changes to your repository
2. GitHub Pages will automatically serve the site
3. Ensure all file paths are relative (they are by default)

