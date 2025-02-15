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
});