// TOGGLE NAV
const menuButton = document.querySelector('.menu-button');
const siteNav = document.querySelector('.site-nav');

if (menuButton) {
  menuButton.addEventListener('click', () => {
    const state = siteNav.getAttribute('data-nav-state');
    siteNav.setAttribute('data-nav-state', state === 'closed' ? 'open' : 'closed');
  });
}

// FADE UP ON SCROLL
const fadeElements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

fadeElements.forEach(el => observer.observe(el));

