document.addEventListener("DOMContentLoaded", function() {
    // Navigation toggle for mobile view
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');

    if (navbarToggle) {
        navbarToggle.addEventListener('click', function() {
            navbarMenu.classList.toggle('is-active');
        });
    }

    // Form validation for contact form
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const name = document.querySelector('#name').value;
            const email = document.querySelector('#email').value;
            const message = document.querySelector('#message').value;

            if (!name || !email || !message) {
                event.preventDefault();
                alert('Please fill in all fields.');
            }
        });
    }

    const navToggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('nav');

    navToggle.addEventListener('click', function(event) {
        event.stopPropagation();
        if (nav.style.right === '0px') {
            nav.style.right = '-250px';
        } else {
            nav.style.right = '0px';
        }
    });

    document.addEventListener('click', function(event) {
        if (!nav.contains(event.target) && !navToggle.contains(event.target)) {
            nav.style.right = '-250px';
        }
    });
});