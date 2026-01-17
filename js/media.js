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

function renderMediaItem(item, index) {
  return `
    <figure class="media-item reveal ${index > 0 ? `reveal-delay-${Math.min(index, 3)}` : ''}">
      <img src="${item.image}" alt="${item.title}" loading="lazy" />
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

  container.innerHTML = mediaItems.map((item, index) => renderMediaItem(item, index)).join('');
}

// Initialize media page
document.addEventListener('DOMContentLoaded', async function() {
  const media = await loadMedia();
  renderMediaGallery(media, 'media-gallery');
});

