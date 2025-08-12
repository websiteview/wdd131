// scripts.js

// Sidebar open/close for mobile
const sidebar = document.getElementById('sidebar');
const openBtn = document.getElementById('open-sidebar');
const closeBtn = document.getElementById('close-sidebar');

openBtn.addEventListener('click', () => {
  sidebar.classList.add('show');
  sidebar.classList.remove('hidden');
  openBtn.setAttribute('aria-expanded', 'true');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('show');
  openBtn.setAttribute('aria-expanded', 'false');
});
