# Editing Guide

## How to Edit the About Page

The About page (`about.html`) is a simple HTML file that you can edit directly. Here's what each section does:

### Structure Overview

The About page contains several sections:

1. **Header** (lines 12-35) - Contact information
   - Name and subtitle
   - Updated date
   - Address
   - Social media links

2. **About Section** (lines 41-53) - Personal introduction
   - Brief bio
   - Education details

3. **Experience Section** (lines 56-89) - Work experience
   - Individual experience entries

4. **CV Section** (lines 92-101) - CV download link

5. **Research Interests** (lines 104-113) - Research interests list

### Common Edits

#### Update Personal Information

To change your bio, edit the paragraph in the About section:
```html
<p>I am Shobhith Vadlamudi, a fourth year undergraduate student...</p>
```

#### Add/Edit Experience

Each experience entry follows this pattern:
```html
<div class="experience">
  <h3>Job Title - Company</h3>
  <p><strong>Start Date - End Date</strong></p>
  <p>Description...</p>
  <ul>
    <li>Bullet point 1</li>
    <li>Bullet point 2</li>
  </ul>
  <p><a href="project-xyz.html">View project details →</a></p>
</div>
```

To add a new experience:
1. Copy an existing `<div class="experience">` block
2. Update the title, dates, description, and bullets
3. Optionally link to a project detail page

#### Update Contact Information

Edit the header table (lines 24-34):
- Address: Line 25
- Email: Line 32 (change the `mailto:` link)
- Social links: Lines 28-34

#### Update Research Interests

Edit the list in the Research Interests section (lines 107-112):
```html
<ul>
  <li><strong>Topic</strong>: Description</li>
  <li><strong>Another Topic</strong>: Description</li>
</ul>
```

### Tips

- Keep the structure consistent with existing sections
- Use `<strong>` for bold text
- Use `<ul>` and `<li>` for bullet lists
- Link to project pages when relevant: `<a href="project-id.html">View project →</a>`

---

## How to Add Travel Photos

### Step 1: Add Your Images

Place your travel photos in the `assets/images/` directory:
```
assets/images/your-photo-name.jpg
```

**Supported formats**: JPG, PNG, GIF, WebP

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

**Fields:**
- `id`: Unique identifier (lowercase, use hyphens)
- `title`: Photo title (e.g., "Sunset at Kuari Pass")
- `description`: Optional description
- `image`: Path to your image file
- `location`: Where the photo was taken (optional)
- `date`: When the photo was taken (optional)

### Step 3: Example Entry

Here's the existing Kuari Pass entry as an example:
```json
{
  "id": "kuari-pass",
  "title": "Kuari Pass Trek",
  "description": "My first Himalayan trek - Kuari Pass",
  "image": "assets/images/kuari.jpg",
  "location": "Uttarakhand, India",
  "date": "2024"
}
```

### Complete Example

To add a new travel photo:

1. Save your photo as `assets/images/paris-2024.jpg`

2. Add to `data/media.json`:
```json
{
  "id": "paris-trip",
  "title": "Paris in Spring",
  "description": "Beautiful spring day at the Eiffel Tower",
  "image": "assets/images/paris-2024.jpg",
  "location": "Paris, France",
  "date": "April 2024"
}
```

3. The photo will automatically appear on the Media page!

### Tips for Photos

- **Image size**: Large images will automatically scale, but consider optimizing for web (2-3 MB max per image)
- **Image names**: Use descriptive, lowercase names with hyphens (e.g., `trip-to-nepal-2024.jpg`)
- **Ordering**: Photos appear in the order they're listed in `data/media.json` (first = top)
- **Multiple photos**: You can add as many entries as you want to `data/media.json`

### Organizing Multiple Photos from One Trip

You can create separate entries for each photo:

```json
[
  {
    "id": "paris-day-1",
    "title": "Arrival in Paris",
    "image": "assets/images/paris-day1.jpg",
    "location": "Paris, France",
    "date": "April 2024"
  },
  {
    "id": "paris-day-2",
    "title": "Eiffel Tower Visit",
    "image": "assets/images/paris-day2.jpg",
    "location": "Paris, France",
    "date": "April 2024"
  }
]
```

---

## Quick Reference

### Files to Edit

| What to Edit | File to Edit |
|-------------|-------------|
| Personal bio, education, experience | `about.html` |
| Travel photos | `data/media.json` |
| Projects | `data/projects.json` |
| Publications | `data/publications.json` |

### Image Locations

- Travel photos: `assets/images/`
- Project thumbnails: `assets/images/`
- CV and documents: `assets/docs/`

### Viewing Changes

After editing:
1. Save the file
2. Refresh your browser (or restart local server if testing locally)
3. Navigate to the page you edited

---

## Need Help?

- **About page**: Edit `about.html` directly - it's straightforward HTML
- **Media page**: Edit `data/media.json` - just add JSON entries
- **Navigation**: Updated automatically - "Media" link now appears in the menu
- **Styling**: Photos are styled automatically with borders and captions

