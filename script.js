const html = document.documentElement;
const themeToggle = document.querySelector('[data-theme-toggle]');
const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menuToggle');
const overlay = document.getElementById('overlay');

let currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
html.setAttribute('data-theme', currentTheme);

const moonIcon = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
const sunIcon = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';

function renderThemeIcon() {
  themeToggle.innerHTML = currentTheme === 'dark' ? sunIcon : moonIcon;
  themeToggle.setAttribute('aria-label', currentTheme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
}

renderThemeIcon();

themeToggle.addEventListener('click', () => {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', currentTheme);
  renderThemeIcon();
});

function openSidebar() {
  sidebar.classList.add('open');
  overlay.classList.add('active');
}

function closeSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.remove('active');
}

menuToggle.addEventListener('click', () => {
  if (sidebar.classList.contains('open')) {
    closeSidebar();
  } else {
    openSidebar();
  }
});

overlay.addEventListener('click', closeSidebar);

window.addEventListener('resize', () => {
  if (window.innerWidth > 860) {
    closeSidebar();
  }
});
