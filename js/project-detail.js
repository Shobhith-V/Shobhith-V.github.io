// Project detail page loader
async function loadProjectDetail(projectId) {
  try {
    const response = await fetch('data/projects.json');
    const projects = await response.json();
    const project = projects.find(p => p.id === projectId);
    
    if (!project) {
      document.getElementById('project-content').innerHTML = '<p>Project not found.</p>';
      return;
    }

    renderProjectDetail(project);
  } catch (error) {
    console.error('Error loading project:', error);
    document.getElementById('project-content').innerHTML = '<p>Error loading project.</p>';
  }
}

function renderProjectDetail(project) {
  const tagsHTML = project.tags.map(tag => 
    `<span class="tag">${tag}</span>`
  ).join('');

  const linksHTML = [];
  if (project.github) {
    linksHTML.push(`<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link"><i class="fa fa-github"></i> GitHub Repository</a>`);
  }
  if (project.pdf) {
    linksHTML.push(`<a href="publications.html?pdf=${project.pdf}" class="project-link"><i class="fa fa-file-pdf-o"></i> View Report</a>`);
  }

  const thumbnailHTML = project.thumbnail 
    ? `<figure><img src="${project.thumbnail}" alt="${project.title}" /><figcaption>${project.title}</figcaption></figure>`
    : '';

  // Convert markdown-style formatting to HTML
  const descriptionHTML = project.description
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>');

  const content = `
    <article class="project-detail">
      <header>
        <h1>${project.title}</h1>
        <p class="project-meta">${project.type} • ${project.date}</p>
        <div class="project-tags">${tagsHTML}</div>
        ${linksHTML.length > 0 ? `<div class="project-links">${linksHTML.join(' ')}</div>` : ''}
      </header>
      ${thumbnailHTML}
      <div class="project-description">
        <p>${descriptionHTML}</p>
      </div>
    </article>
  `;

  document.getElementById('project-content').innerHTML = content;
}

// Initialize project detail page
document.addEventListener('DOMContentLoaded', function() {
  // Get project ID from URL
  const path = window.location.pathname;
  const filename = path.split('/').pop();
  const projectId = filename.replace('project-', '').replace('.html', '');
  
  loadProjectDetail(projectId);
});

