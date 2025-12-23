// Animate logo
window.addEventListener('load', () => {
  const logo = document.getElementById('logo');
  setTimeout(() => {
    logo.style.opacity = 1;
    logo.style.transform = 'scale(1)';
  }, 500);

  // Show menu after animation
  setTimeout(() => {
    document.getElementById('menu').hidden = false;
  }, 2000);
});

// Page navigation
function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(p => p.hidden = true);
  document.getElementById(pageId).hidden = false;
}
