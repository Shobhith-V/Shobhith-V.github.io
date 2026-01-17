// Navigation component - reusable across all pages
function renderNavigation(currentPage = 'home') {
  const navItems = [
    { id: 'home', label: 'Home', href: 'index.html' },
    { id: 'projects', label: 'Projects & Research', href: 'projects.html' },
    { id: 'publications', label: 'Publications', href: 'publications.html' },
    { id: 'about', label: 'About', href: 'about.html' },
    { id: 'media', label: 'Media', href: 'media.html' }
  ];

  let navHTML = '<nav id="main-nav" role="navigation">';
  navHTML += '<ul class="nav-list">';
  
  navItems.forEach(item => {
    const isActive = item.id === currentPage ? ' class="active"' : '';
    navHTML += `<li${isActive}><a href="${item.href}">${item.label}</a></li>`;
  });
  
  navHTML += '</ul></nav>';
  return navHTML;
}

// Insert navigation into page
document.addEventListener('DOMContentLoaded', function() {
  const navContainer = document.getElementById('nav-container');
  if (navContainer) {
    const currentPage = navContainer.getAttribute('data-current-page') || 'home';
    navContainer.innerHTML = renderNavigation(currentPage);
  }
});

