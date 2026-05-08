// TOGGLE NAV
const menuButton = document.querySelector('.menu-button');
const siteNav = document.querySelector('.site-nav');

if (menuButton) {
  menuButton.addEventListener('click', () => {
    const state = siteNav.getAttribute('data-nav-state');
    siteNav.setAttribute('data-nav-state', state === 'closed' ? 'open' : 'closed');
  });
}

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

});

// RECIPE CARDS STAGGER
gsap.from('.recipe-card', {
  scrollTrigger: {
    trigger: '#recipes .row',
    start: 'top 80%',
  },
  y: 40,
  opacity: 0,
  duration: 0.6,
  ease: 'power2.out',
  stagger: 0.15,
  clearProps: 'transform',
});

// PASSPORT STAGGER
gsap.from('.destination .one-third', {
  scrollTrigger: {
    trigger: '.destination .row',
    start: 'top 80%',
  },
  y: 40,
  opacity: 0,
  duration: 0.6,
  ease: 'power2.out',
  stagger: 0.1,
});

// AIRPLANE DRIFT IN
gsap.from('.airplane', {
  scrollTrigger: {
    trigger: '.skill',
    start: 'top 80%',
  },
  xPercent: -150,
  duration: 1.5,
  ease: 'power2.out',
  immediateRender: false,
});

// HEADER ANIMATION — desktop only
if (window.innerWidth >= 768) {
  const headerTl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 0.6 } });

  headerTl
    .from('.site-logo', {
      x: -60,
      opacity: 0,
    })
    .from('.site-nav', {
      y: -20,
      opacity: 0,
      duration: 0.6,
      clearProps: 'all',
    }, '-=0.3');
}
 
// FOOTER
gsap.from('.site-footer', {
  scrollTrigger: {
    trigger: '.site-footer',
    start: 'top 90%',
  },
  y: 40,
  opacity: 0,
  duration: 0.8,
  ease: 'power2.out',
});

// INGREDIENTS
gsap.from('.ingredients-grid img', {
  scrollTrigger: {
    trigger: '.ingredients-grid',
    start: 'top 80%',
  },
  y: -60,
  opacity: 0,
  duration: 0.5,
  ease: 'bounce.out',
  stagger: 0.15,
  clearProps: 'transform',
});

gsap.utils.toArray('.subsection-title').forEach(title => {
  if (title.closest('#about') || title.closest('#submissions')) return;
  gsap.from(title, {
    scrollTrigger: {
      trigger: title,
      start: 'top 85%',
    },
    y: 30,
    opacity: 0,
    duration: 0.7,
    ease: 'power2.out',
  });
});
