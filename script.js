document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    const carousel = document.querySelector('.testimonial-carousel');
    let scrollAmount = 0;
    setInterval(() => {
        if (scrollAmount < carousel.scrollWidth - carousel.clientWidth) {
            scrollAmount += 300;
        } else {
            scrollAmount = 0;
        }
        carousel.scrollTo({
            top: 0,
            left: scrollAmount,
            behavior: 'smooth'
        });
    }, 5000);
});
