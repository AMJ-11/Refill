// script.js

document.addEventListener('DOMContentLoaded', () => {
  // 1. Smooth‑scroll for nav links
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // 2. Payment‑button feedback
  document.querySelectorAll('.payment-buttons button').forEach(btn => {
    btn.addEventListener('click', () => {
      // Show a quick notification
      const msg = document.createElement('div');
      msg.textContent = 'Redirecting to secure checkout…';
      msg.className = 'toast';
      document.body.appendChild(msg);
      setTimeout(() => msg.remove(), 2000);
    });
  });

  // 3. Mobile nav toggle (if you add a button with id="nav-toggle")
  const navToggle = document.getElementById('nav-toggle');
  if (navToggle) {
    const navUl = document.querySelector('nav ul');
    navToggle.addEventListener('click', () => {
      navUl.classList.toggle('open');
    });
  }

  console.log('Refill Cup site loaded');
});
