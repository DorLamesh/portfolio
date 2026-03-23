// ─── THEME TOGGLE ────────────────────────────────────────────────
const html   = document.documentElement;
const toggle = document.getElementById('themeToggle');

const saved = localStorage.getItem('theme');
if (saved) html.setAttribute('data-theme', saved);

const themeOrder = ['dark', 'grey', 'light'];

toggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme') || 'dark';
  const idx = themeOrder.indexOf(current);
  const next = themeOrder[(idx + 1) % themeOrder.length];
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// ─── SECTION NAVIGATION ───────────────────────────────────────────
const pageIds  = ['home', 'projects', 'writing', 'about'];
const navLinks = document.querySelectorAll('.nav-link, .nav-name');

function showSection(id) {
  if (!pageIds.includes(id)) id = 'home';

  pageIds.forEach(pid => {
    document.getElementById(pid).classList.remove('active');
  });
  document.getElementById(id).classList.add('active');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    link.style.color = (href === `#${id}`) ? 'var(--text)' : '';
  });
}

// Intercept all nav clicks
document.querySelector('.nav-name').addEventListener('click', e => {
  e.preventDefault();
  history.pushState(null, '', '#home');
  showSection('home');
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const id = link.getAttribute('href').slice(1);
    history.pushState(null, '', `#${id}`);
    showSection(id);
  });
});

// Handle browser back/forward
window.addEventListener('popstate', () => {
  showSection(location.hash.slice(1) || 'home');
});

// Initial load
const initId = location.hash.slice(1);
showSection(pageIds.includes(initId) ? initId : 'home');
