
const module = (() => {
    'use strict';
    const toggleButton = document.querySelector('#toggle-button');
    const navbarMenu = document.querySelector('#navbar-menu');

    toggleButton.addEventListener('click', () =>{
        navbarMenu.classList.toggle('navbar__menu--active');
    });
})();  