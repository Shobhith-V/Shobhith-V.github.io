const list = document.getElementById("publications-list");
const viewerSection = document.getElementById("pdf-viewer-section");
const viewer = document.getElementById("pdf-viewer");
const downloadLink = document.getElementById("pdf-download-link");

function renderPublications() {
  list.innerHTML = "";

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
  list.style.display = "none";
  viewerSection.style.display = "block";
  viewer.src = pdfPath;
  downloadLink.href = pdfPath;
}

renderPublications();
