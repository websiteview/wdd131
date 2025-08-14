// scripts.js

// Sidebar open/close for mobile
/*const sidebar = document.getElementById('sidebar');
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
overlay.addEventListener('click', closeSidebar);  // Cerrar sidebar si se clickea overlay*/

document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const openBtn = document.getElementById('open-sidebar');
  const closeBtn = document.getElementById('close-sidebar');

  // Object requirement
  const sidebarState = {
    isOpen: false
  };

  // Save to localStorage
  const saveSidebarState = (isOpen) => {
    localStorage.setItem('sidebarOpen', isOpen ? 'true' : 'false');
  };

  // Load from localStorage
  const loadSidebarState = () => {
    const isOpen = localStorage.getItem('sidebarOpen') === 'true';
    if (isOpen) openSidebar();
  };

  const openSidebar = () => {
    sidebar.classList.add('show');
    sidebar.classList.remove('hidden');
    overlay.classList.add('show');
    openBtn.setAttribute('aria-expanded', 'true');
    sidebarState.isOpen = true;
  };

  const closeSidebar = () => {
    sidebar.classList.remove('show');
    sidebar.classList.add('hidden');
    overlay.classList.remove('show');
    openBtn.setAttribute('aria-expanded', 'false');
    sidebarState.isOpen = false;
  };

  // Event listeners
  openBtn?.addEventListener('click', () => {
    openSidebar();
    saveSidebarState(true);
  });

  closeBtn?.addEventListener('click', () => {
    closeSidebar();
    saveSidebarState(false);
  });

  overlay?.addEventListener('click', () => {
    closeSidebar();
    saveSidebarState(false);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('show')) {
      closeSidebar();
      saveSidebarState(false);
    }
  });

  // Array + template literal requirement
  const navLinks = ['tours.html', 'benefits.html', 'faq.html'];
  navLinks.forEach(link => {
    console.log(`Loaded nav link: ${link}`);
  });

  // Restore state on load
  loadSidebarState();
});

