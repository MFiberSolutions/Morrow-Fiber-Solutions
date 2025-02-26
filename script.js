document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });

    // Contact Form Submission Alert
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("📨 Your message has been sent! We'll get back to you soon.");
            form.reset();
        });
    }

    // Animated Button Hover Effect
    const ctaButton = document.querySelector(".cta-button");
    if (ctaButton) {
        ctaButton.addEventListener("mouseover", () => {
            ctaButton.style.transform = "scale(1.15)";
            ctaButton.style.transition = "transform 0.2s ease-in-out";
        });
        ctaButton.addEventListener("mouseleave", () => {
            ctaButton.style.transform = "scale(1)";
        });
    }
});
