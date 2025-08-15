// scripts.js

document.addEventListener('DOMContentLoaded', () => {
  // Sidebar variables y funciones (tu código original)
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const openBtn = document.getElementById('open-sidebar');
  const closeBtn = document.getElementById('close-sidebar');

  const sidebarState = {
    isOpen: false
  };

  const saveSidebarState = (isOpen) => {
    localStorage.setItem('sidebarOpen', isOpen ? 'true' : 'false');
  };

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

  // Logica navLinks (solo un console log)
  const navLinks = ['tours.html', 'benefits.html', 'faq.html'];
  navLinks.forEach(link => {
    console.log(`Loaded nav link: ${link}`);
  });

  loadSidebarState();

  // --- LOGIN / REGISTER UI & LOGIC ---

  // Variables para login/register UI
  const loginBtns = document.querySelectorAll('.login-btn');
  const subscribeBtn = document.querySelector('.cta-button');
  const profileSection = document.querySelector('.profile');
  const profilePic = profileSection?.querySelector('.profile-pic');
  const profileName = profileSection?.querySelector('h2');
  const profileEmail = profileSection?.querySelector('p');

  const defaultAvatar = 'images/user-silhouette.svg';
  const loginPage = 'sign-in-register.html';

  const currentUserEmail = localStorage.getItem('loggedInUser');

  function updateUIForLogin(email) {
    loginBtns.forEach(btn => (btn.textContent = 'Sign Out'));
    if (profilePic) profilePic.src = defaultAvatar;
    if (profileName) profileName.style.display = 'none';
    if (profileEmail) {
      profileEmail.textContent = email;
      profileEmail.style.display = 'block';
    }
  }

  function updateUIForLogout() {
    loginBtns.forEach(btn => (btn.textContent = 'Log In'));
    if (profilePic) profilePic.src = 'images/profile.jpg';
    if (profileName) profileName.style.display = '';
    if (profileEmail) profileEmail.textContent = 'frinx.mendoza2@gmail.com';
  }

  if (currentUserEmail) {
    updateUIForLogin(currentUserEmail);
  } else {
    updateUIForLogout();
  }

  // Event listener para botones login/logout
  loginBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isLoggedIn = localStorage.getItem('loggedInUser');
      if (isLoggedIn) {
        localStorage.removeItem('loggedInUser');
        updateUIForLogout();
        window.location.href = loginPage;
      } else {
        window.location.href = loginPage;
      }
    });
  });

  // Event listener para botón subscribe
  if (subscribeBtn) {
    subscribeBtn.addEventListener('click', () => {
      window.location.href = loginPage;
    });
  }
});
