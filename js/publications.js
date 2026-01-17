let list, viewerSection, viewer, downloadLink;

function renderPublications() {
  if (!list || !viewerSection || !viewer || !downloadLink) {
    list = document.getElementById("publications-list");
    viewerSection = document.getElementById("pdf-viewer-section");
    viewer = document.getElementById("pdf-viewer");
    downloadLink = document.getElementById("pdf-download-link");
  }
  
  if (!list || typeof publications === 'undefined') {
    console.error('Publications list element or data not found');
    return;
  }

  list.innerHTML = "";

  if (publications.length === 0) {
    list.innerHTML = '<p style="color: var(--color-text-secondary); text-align: center; padding: var(--spacing-2xl);">No publications available at this time.</p>';
    return;
  }

  publications.forEach((pub, index) => {
    const item = document.createElement("div");
    item.className = "publication-item reveal";
    if (index > 0) {
      item.classList.add(`reveal-delay-${Math.min(index, 3)}`);
    }

    const pdfButton = pub.pdf 
      ? `<button onclick="openPDF('${pub.pdf}')"><i class="fa fa-file-pdf-o"></i> View PDF</button>`
      : '';

    item.innerHTML = `
      <h3>${pub.title}</h3>
      <p class="authors">${pub.authors}</p>
      <p class="venue">${pub.venue}, ${pub.year}</p>
      ${pdfButton ? `<div class="pub-actions">${pdfButton}</div>` : ''}
    `;

    list.appendChild(item);
  });
}

function openPDF(pdfPath) {
  if (!list || !viewerSection || !viewer || !downloadLink) {
    list = document.getElementById("publications-list");
    viewerSection = document.getElementById("pdf-viewer-section");
    viewer = document.getElementById("pdf-viewer");
    downloadLink = document.getElementById("pdf-download-link");
  }
  
  if (list) list.style.display = "none";
  if (viewerSection) viewerSection.style.display = "block";
  if (viewer) viewer.src = pdfPath;
  if (downloadLink) downloadLink.href = pdfPath;
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderPublications);
} else {
  // DOM is already ready
  renderPublications();
}
