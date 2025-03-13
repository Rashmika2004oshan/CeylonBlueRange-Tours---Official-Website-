// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Select key elements once for efficiency
    const burger = document.querySelector('.burger');
    const nav = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('nav a');
    const downloadBtn = document.querySelector('.download-btn');
    const bookNowBtn = document.querySelector('.book-now-btn');

    // Toggle Navigation Function
    function toggleNav() {
        nav.classList.toggle('active');
        burger.classList.toggle('toggle');

        // Animate burger lines (for visual feedback)
        const line1 = burger.querySelector('.line1');
        const line2 = burger.querySelector('.line2');
        const line3 = burger.querySelector('.line3');

        if (burger.classList.contains('toggle')) {
            line1.style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            line2.style.opacity = '0';
            line3.style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            line1.style.transform = 'rotate(0) translate(0)';
            line2.style.opacity = '1';
            line3.style.transform = 'rotate(0) translate(0)';
        }
    }

    // Event Listener for Burger Menu (Click and Touch for Mobile)
    if (burger) {
        burger.addEventListener('click', toggleNav);
        burger.addEventListener('touchstart', function (e) {
            e.preventDefault(); // Prevent double-tap zoom on mobile
            toggleNav();
        });
    }

    // Close Menu on Nav Link Click and Add Smooth Scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Close the menu
            nav.classList.remove('active');
            burger.classList.remove('toggle');
            const line1 = burger.querySelector('.line1');
            const line2 = burger.querySelector('.line2');
            const line3 = burger.querySelector('.line3');
            line1.style.transform = 'rotate(0) translate(0)';
            line2.style.opacity = '1';
            line3.style.transform = 'rotate(0) translate(0)';

            // Smooth scrolling for anchor links
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });

        // Add touch support for nav links
        link.addEventListener('touchstart', function (e) {
            e.preventDefault(); // Prevent default touch behavior
            this.click(); // Trigger the click event
        });
    });

    // Download Button Click Animation
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function () {
            this.classList.add('clicked');
            setTimeout(() => this.classList.remove('clicked'), 300);
        });

        // Touch support for download button
        downloadBtn.addEventListener('touchstart', function (e) {
            e.preventDefault();
            this.classList.add('clicked');
            setTimeout(() => this.classList.remove('clicked'), 300);
        });
    }

    // Book Now Button Click Animation and Optional Hover Sound
    if (bookNowBtn) {
        bookNowBtn.addEventListener('click', function () {
            this.classList.add('clicked');
            setTimeout(() => this.classList.remove('clicked'), 200);
        });

        bookNowBtn.addEventListener('touchstart', function (e) {
            e.preventDefault();
            this.classList.add('clicked');
            setTimeout(() => this.classList.remove('clicked'), 200);
        });

        // Optional hover sound (uncomment and provide sound file if desired)
        /*
        bookNowBtn.addEventListener('mouseenter', function () {
            playHoverSound();
        });

        function playHoverSound() {
            const hoverSound = new Audio('path/to/hover-sound.mp3');
            hoverSound.volume = 0.2;
            hoverSound.play().catch(e => console.log('Audio play failed:', e));
        }
        */
    }
});

