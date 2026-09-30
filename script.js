const cfg = window.SITE_CONFIG || {};
const $ = (selector) => document.querySelector(selector);

if (cfg.name) {
  $('#profileName').textContent = cfg.name;
  $('#footerName').textContent = cfg.name;
  document.title = `${cfg.name} | 亚马逊运营策略与增长笔记`;
}
if (cfg.role) $('#profileRole').textContent = cfg.role;
if (cfg.email) {
  $('#emailLink').href = `mailto:${cfg.email}`;
  $('#emailLink').textContent = cfg.email;
  $('#emailLink').hidden = false;
}
if (cfg.github) $('#githubLink').href = cfg.github;
$('#year').textContent = new Date().getFullYear();

const themeToggle = $('#themeToggle');
// Storage can be unavailable in private browsing or for local files.
try {
  if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark');
} catch {}
const syncTheme = () => themeToggle.setAttribute('aria-pressed', String(document.body.classList.contains('dark')));
syncTheme();
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  syncTheme();
  try {
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  } catch {}
});

const menuBtn = $('#menuBtn');
const nav = $('#nav');
const closeMenu = () => {
  nav.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
  menuBtn.setAttribute('aria-label', '打开菜单');
};
menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.setAttribute('aria-label', open ? '关闭菜单' : '打开菜单');
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMenu();
});
