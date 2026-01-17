// Media gallery loader and renderer
let mediaData = [];

async function loadMedia() {
  try {
    const response = await fetch('data/media.json');
    mediaData = await response.json();
    return mediaData;
  } catch (error) {
    console.error('Error loading media:', error);
    return [];
  }
}

function renderMediaItem(item) {
  return `
    <figure class="media-item">
      <img src="${item.image}" alt="${item.title}" />
      <figcaption>
        <h3>${item.title}</h3>
        ${item.location ? `<p class="media-location">${item.location}</p>` : ''}
        ${item.date ? `<p class="media-date">${item.date}</p>` : ''}
        ${item.description ? `<p>${item.description}</p>` : ''}
      </figcaption>
    </figure>
  `;
}

function renderMediaGallery(mediaItems, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (mediaItems.length === 0) {
    container.innerHTML = '<p>No media items available.</p>';
    return;
  }

  container.innerHTML = mediaItems.map(item => renderMediaItem(item)).join('');
}

// Initialize media page
document.addEventListener('DOMContentLoaded', async function() {
  const media = await loadMedia();
  renderMediaGallery(media, 'media-gallery');
});

