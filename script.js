document.addEventListener('DOMContentLoaded', function () {

    // Header scroll effect
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
    }

    // Smooth scrolling for navigation links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    if (anchorLinks.length > 0) {
        anchorLinks.forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId && targetId !== '#') {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                }

                // Close mobile menu when a link is clicked
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    if (mobileMenu) {
                        mobileMenu.classList.remove('active');
                    }
                }
            });
        });
    }

    // Typing Animation
    const typedTextElement = document.querySelector('.typed-text');
    if (typedTextElement) {
        const options = {
            strings: ['Web Developer', 'App Developer', 'Digital Marketing Specialist', 'Data Scientist', 'Accountant', 'Business Development Executive', 'Financial Advisor'],
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000,
            loop: true
        };

        new Typed('.typed-text', options);
    }

    // Add active class to nav links based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    if (sections.length > 0 && navLinks.length > 0) {
        window.addEventListener('scroll', function () {
            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= (sectionTop - sectionHeight / 3)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }

    // Back to top button functionality
    const backToTopBtn = document.createElement('div');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });

    backToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Add scroll reveal animations
    const revealElements = document.querySelectorAll('.section-title, .about-text, .skill-domain, .education-item, .project-card, .certificate-item');

    function checkReveal() {
        const triggerBottom = window.innerHeight * 0.8;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.add('reveal-visible');
            }
        });
    }

    // Add reveal class to all elements
    revealElements.forEach(element => {
        element.classList.add('reveal');
    });

    // Check on load and scroll
    window.addEventListener('scroll', checkReveal);
    window.addEventListener('load', checkReveal);

    // Initialize checkReveal on page load
    checkReveal();
});