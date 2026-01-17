// Projects data loader and renderer
let projectsData = [];

async function loadProjects() {
  try {
    const response = await fetch('data/projects.json');
    projectsData = await response.json();
    return projectsData;
  } catch (error) {
    console.error('Error loading projects:', error);
    return [];
  }
}

function renderProjectCard(project) {
  const tagsHTML = project.tags.map(tag => 
    `<span class="tag">${tag}</span>`
  ).join('');

  const linksHTML = [];
  if (project.github) {
    linksHTML.push(`<a href="${project.github}" target="_blank" rel="noopener noreferrer"><i class="fa fa-github"></i> Code</a>`);
  }
  if (project.pdf) {
    linksHTML.push(`<a href="publications.html?pdf=${project.pdf}"><i class="fa fa-file-pdf-o"></i> Report</a>`);
  }
  linksHTML.push(`<a href="project-${project.id}.html"><i class="fa fa-arrow-right"></i> Details</a>`);

  const thumbnailHTML = project.thumbnail 
    ? `<img src="${project.thumbnail}" alt="${project.title}" class="project-thumbnail" loading="lazy" />`
    : `<div class="project-thumbnail" style="background: linear-gradient(135deg, var(--color-bg-tertiary), var(--color-bg-elevated)); height: 250px; display: flex; align-items: center; justify-content: center; color: var(--color-text-tertiary); font-family: var(--font-headline); text-transform: uppercase; letter-spacing: 0.1em;">${project.title.charAt(0)}</div>`;

  return `
    <article class="project-card reveal">
      ${thumbnailHTML}
      <div class="project-content">
        <h3><a href="project-${project.id}.html">${project.title}</a></h3>
        <p class="project-meta">${project.type} • ${project.date}</p>
        <p class="project-summary">${project.summary}</p>
        <div class="project-tags">${tagsHTML}</div>
        <div class="project-links">${linksHTML.join('')}</div>
      </div>
    </article>
  `;
}

function renderProjectsList(projects, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (projects.length === 0) {
    container.innerHTML = '<p>No projects found.</p>';
    return;
  }

  container.innerHTML = projects.map(project => renderProjectCard(project)).join('');
}

function getUniqueTags(projects) {
  const tags = new Set();
  projects.forEach(project => {
    project.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
}

function renderTagFilter(projects, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const tags = getUniqueTags(projects);
  if (tags.length === 0) return;

  let filterHTML = '<div class="tag-filter">';
  filterHTML += '<label>Filter by tag: </label>';
  filterHTML += '<button class="filter-btn active" data-tag="all">All</button>';
  tags.forEach(tag => {
    filterHTML += `<button class="filter-btn" data-tag="${tag}">${tag}</button>`;
  });
  filterHTML += '</div>';

  container.innerHTML = filterHTML;

  // Add event listeners
  container.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const selectedTag = this.getAttribute('data-tag');
      
      // Update active state
      container.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      // Filter projects
      const filtered = selectedTag === 'all' 
        ? projects 
        : projects.filter(p => p.tags.includes(selectedTag));
      
      renderProjectsList(filtered, 'projects-container');
    });
  });
}

// Initialize projects page
document.addEventListener('DOMContentLoaded', async function() {
  const projects = await loadProjects();
  renderProjectsList(projects, 'projects-container');
  renderTagFilter(projects, 'tag-filter-container');
});

