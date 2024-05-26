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
    // GameBoy Menu Navigation
    var gameboyContainer = document.getElementById('gameboy-container');
    var gameMenuItems = document.querySelectorAll('.menu-item');
    var contentSections = document.querySelectorAll('section:not(#gameboy-container)');
    var footer = document.querySelector('footer');
    gameMenuItems.forEach(function (item) {
        item.addEventListener('click', function () {
            var _a;
            var target = item.getAttribute('data-target');
            if (target) {
                gameboyContainer === null || gameboyContainer === void 0 ? void 0 : gameboyContainer.classList.add('hidden');
                (_a = document.querySelector(target)) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
                footer === null || footer === void 0 ? void 0 : footer.classList.remove('hidden');
            }
        });
    });
    // Contact Form
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
});
