document.addEventListener('DOMContentLoaded', function() {

    //TOGGLE NAV
    const navButton = document.querySelector('.menu-button');
    const navList = document.querySelector('.site-nav');

    // Check Nav State 
    navButton.onclick = () => {
        if (navList.getAttribute('data-nav-state') === 'closed') {
            navList.setAttribute('data-nav-state', 'open');
        } else {
            navList.setAttribute('data-nav-state', 'closed');
        }

    }
});