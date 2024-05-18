"use strict";
document.addEventListener('DOMContentLoaded', function () {
    var sections = document.querySelectorAll('section');
    var observerOptions = {
        threshold: 0.1
    };
    var observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    sections.forEach(function (section) {
        observer.observe(section);
    });
    // Navbar scroll effect
    var navbar = document.querySelector('.navbar-sticky');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        }
        else {
            navbar.classList.remove('scrolled');
        }
    });
    // Mobile menu toggle
    var mobileMenuButton = document.querySelector('.mobile-menu-button');
    var mobileMenu = document.querySelector('.mobile-menu');
    mobileMenuButton.addEventListener('click', function () {
        mobileMenuButton.classList.toggle('open');
        mobileMenu.classList.toggle('open');
    });
});
var contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;
        if (name && email && message) {
            console.log('Form submitted successfully:', { name: name, email: email, message: message });
            alert('Thank you for your message!');
        }
        else {
            alert('Please fill in all fields.');
        }
    });
}
