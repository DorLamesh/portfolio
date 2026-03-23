// ─── THEME TOGGLE ────────────────────────────────────────────────
const html   = document.documentElement;
const toggle = document.getElementById('themeToggle');

// Persist preference
const saved = localStorage.getItem('theme');
if (saved) html.setAttribute('data-theme', saved);

toggle.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// ─── NAV ACTIVE STATE ─────────────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${id}`
          ? 'var(--text)'
          : '';
      });
    }
  });
}, { threshold: 0.5 });

sections.forEach(s => observer.observe(s));
