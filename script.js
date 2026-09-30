const cfg = window.SITE_CONFIG || {};
const $ = (s) => document.querySelector(s);

if (cfg.name) {
  $('#profileName').textContent = cfg.name;
  $('#footerName').textContent = cfg.name;
  document.title = `${cfg.name} | Amazon Ops Blog`;
}
if (cfg.role) $('#profileRole').textContent = cfg.role;
if (cfg.email) {
  $('#emailLink').href = `mailto:${cfg.email}`;
  $('#emailLink').textContent = cfg.email === 'your-email@example.com' ? '发送邮件' : cfg.email;
}
if (cfg.github) $('#githubLink').href = cfg.github;
$('#year').textContent = new Date().getFullYear();

const themeToggle = $('#themeToggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') document.body.classList.add('light');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
});

const menuBtn = $('#menuBtn');
const nav = $('#nav');
menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
