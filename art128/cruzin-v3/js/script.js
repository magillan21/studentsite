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

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

fadeElements.forEach(el => fadeObserver.observe(el));

// GSAP 
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.stamp').forEach((stamp, i) => {

  // INK STAMP EFFECT
  gsap.from(stamp, {
    scrollTrigger: {
      trigger: stamp,
      start: 'top 95%',
    },
    scale: 1.5,
    opacity: 0,
    duration: 0.5,
    ease: 'back.out(1.5)',
    delay: i * 0.04,
    onComplete: () => {
      gsap.set(stamp, { opacity: 0.35 });
    }
  });

  // PARALLAX
  const speeds = [-25, -40, -15, -50, -20, -35, -10];
  const speed = speeds[i % speeds.length];

  gsap.to(stamp, {
    y: speed,
    ease: 'none',
    scrollTrigger: {
      trigger: stamp.closest('section'),
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.5,
    }
  });

});