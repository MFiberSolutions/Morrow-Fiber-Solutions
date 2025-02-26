document.addEventListener("DOMContentLoaded", function () {
    /* =========== MOBILE NAV TOGGLE =========== */
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        menuToggle.classList.toggle("open");
    });

    /* =========== SMOOTH SCROLLING =========== */
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
            navLinks.classList.remove("active");
            menuToggle.classList.remove("open");
        });
    });

    /* =========== BACK TO TOP BUTTON =========== */
    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
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

    /* =========== FORM VALIDATION =========== */
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                alert("Please fill out all required fields.");
                return;
            }

            alert("Thank you for reaching out! We will get back to you soon.");
            contactForm.reset();
        });
    }

    /* =========== ANIMATIONS ON SCROLL (AOS LIBRARY) =========== */
    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true
        });
    }
});
