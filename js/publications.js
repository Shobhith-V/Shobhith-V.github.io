// Publications data and PDF viewer
let publicationsData = [];

async function loadPublications() {
  try {
    // Try to load from a separate publications JSON file, or use projects data
    const response = await fetch('data/publications.json').catch(() => null);
    if (response && response.ok) {
      publicationsData = await response.json();
    } else {
      // Fallback: extract publications from projects
      const projectsResponse = await fetch('data/projects.json');
      const projects = await projectsResponse.json();
      publicationsData = projects
        .filter(p => p.pdf)
        .map(p => ({
          id: p.id,
          title: p.title,
          date: p.date,
          type: p.type,
          pdf: p.pdf,
          projectId: p.id
        }));
    }
    return publicationsData;
  } catch (error) {
    console.error('Error loading publications:', error);
    return [];
  }
}

function renderPublicationItem(pub) {
  const links = [];
  if (pub.pdf) {
    links.push(`<a href="publications.html?pdf=${pub.pdf}"><i class="fa fa-file-pdf-o"></i> View PDF</a>`);
  }
  if (pub.projectId) {
    links.push(`<a href="project-${pub.projectId}.html"><i class="fa fa-arrow-right"></i> Related Project</a>`);
  }

  return `
    <article class="publication-item">
      <h3>${pub.title}</h3>
      <p class="publication-meta">${pub.type || 'Report'} • ${pub.date}</p>
      ${pub.description ? `<p>${pub.description}</p>` : ''}
      <div class="publication-links">${links.join(' • ')}</div>
    </article>
  `;
}

function renderPublicationsList(publications, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (publications.length === 0) {
    container.innerHTML = '<p>No publications available at this time.</p>';
    return;
  }

  container.innerHTML = publications.map(pub => renderPublicationItem(pub)).join('');
}

function showPDFViewer(pdfPath) {
  const viewerSection = document.getElementById('pdf-viewer-section');
  const publicationsList = document.getElementById('publications-list');
  const viewer = document.getElementById('pdf-viewer');
  const downloadLink = document.getElementById('pdf-download-link');

  if (viewerSection && viewer) {
    viewer.src = pdfPath;
    downloadLink.href = pdfPath;
    viewerSection.style.display = 'block';
    if (publicationsList) {
      publicationsList.style.display = 'none';
    }
    // Scroll to viewer
    viewerSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function hidePDFViewer() {
  const viewerSection = document.getElementById('pdf-viewer-section');
  const publicationsList = document.getElementById('publications-list');
  const viewer = document.getElementById('pdf-viewer');

  if (viewerSection && viewer) {
    viewer.src = '';
    viewerSection.style.display = 'none';
    if (publicationsList) {
      publicationsList.style.display = 'block';
    }
  }
}

// Initialize publications page
document.addEventListener('DOMContentLoaded', async function() {
  // Check if PDF parameter is in URL
  const urlParams = new URLSearchParams(window.location.search);
  const pdfParam = urlParams.get('pdf');
  
  if (pdfParam) {
    // Show PDF viewer
    showPDFViewer(pdfParam);
  } else {
    // Show publications list
    const publications = await loadPublications();
    renderPublicationsList(publications, 'publications-list');
  }
});

