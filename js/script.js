/* =====================================================
   DAYA MISSION WEBSITE
   script.js
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ==========================================
       HERO CAROUSEL
    ========================================== */

    const heroCarousel = document.querySelector('#heroCarousel');

    if (heroCarousel) {

        new bootstrap.Carousel(heroCarousel, {
            interval: 5000,
            ride: 'carousel',
            wrap: true,
            pause: 'hover'
        });

    }


    /* ==========================================
       STICKY NAVBAR EFFECT
    ========================================== */

    const navbar = document.querySelector(".navbar");

    function navbarScroll() {

        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }

    navbarScroll();

    window.addEventListener("scroll", navbarScroll);


    /* ==========================================
       SMOOTH SCROLL
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });


    /* ==========================================
       BACK TO TOP BUTTON
    ========================================== */

    const backToTop = document.createElement("div");

    backToTop.id = "backToTop";

    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';

    document.body.appendChild(backToTop);

    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });

    backToTop.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });


    /* ==========================================
       FADE-IN ANIMATION ON SCROLL
    ========================================== */

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("animate");

            }

        });

    }, {

        threshold: 0.15

    });

    document.querySelectorAll("section").forEach(section => {

        section.classList.add("fade-section");

        observer.observe(section);

    });


    /* ==========================================
       ANIMATED STATISTICS COUNTERS
    ========================================== */

    const counters = document.querySelectorAll(".statistics h2");

    let started = false;

    function runCounters() {

        if (started) return;

        const stats = document.querySelector(".statistics");

        if (!stats) return;

        const rect = stats.getBoundingClientRect();

        if (rect.top < window.innerHeight - 100) {

            started = true;

            counters.forEach(counter => {

                const original = counter.innerText;

                const number = parseInt(original.replace(/\D/g, ""));

                if (isNaN(number)) return;

                const suffix = original.replace(/[0-9]/g, "");

                let count = 0;

                const speed = Math.max(20, number / 80);

                const timer = setInterval(() => {

                    count += speed;

                    if (count >= number) {

                        counter.innerText = number + suffix;

                        clearInterval(timer);

                    } else {

                        counter.innerText = Math.floor(count) + suffix;

                    }

                }, 20);

            });

        }

    }

    window.addEventListener("scroll", runCounters);

    runCounters();

});
