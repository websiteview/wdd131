// scripts.js

// Sidebar open/close for mobile
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');  // Nuevo elemento overlay
const openBtn = document.getElementById('open-sidebar');
const closeBtn = document.getElementById('close-sidebar');

function openSidebar() {
  sidebar.classList.add('show');
  sidebar.classList.remove('hidden');
  overlay.classList.add('show');  // Mostrar overlay
  openBtn.setAttribute('aria-expanded', 'true');
}

function closeSidebar() {
  sidebar.classList.remove('show');
  sidebar.classList.add('hidden');
  overlay.classList.remove('show');  // Ocultar overlay
  openBtn.setAttribute('aria-expanded', 'false');
}

openBtn.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);  // Cerrar sidebar si se clickea overlay
