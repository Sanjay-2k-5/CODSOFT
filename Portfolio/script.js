document.addEventListener('DOMContentLoaded', () => {
    const menuicon = document.querySelector('#menu-icon');
    const navlinks = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');

    menuicon.onclick = () => {
        navlinks.classList.toggle('active');
    };

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navlinks.classList.remove('active');
        });
    });
});