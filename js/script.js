
// =====================================
// Daya Mission Website
// script.js
// =====================================

// Initialize Bootstrap Carousel
document.addEventListener("DOMContentLoaded", function () {

    const heroCarousel = document.querySelector('#heroCarousel');

    if (heroCarousel) {

        new bootstrap.Carousel(heroCarousel, {
            interval: 5000,
            pause: "hover",
            ride: "carousel",
            wrap: true
        });

    }

});
