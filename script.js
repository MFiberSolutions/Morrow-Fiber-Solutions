document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Smooth Scrolling
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    });

    // Fiber Pulse Effect on Click
    const fiberPulse = document.getElementById('fiberPulse');
    document.addEventListener('click', (e) => {
        fiberPulse.style.left = `${e.clientX}px`;
        fiberPulse.style.top = `${e.clientY}px`;
        fiberPulse.classList.add('active');
        setTimeout(() => fiberPulse.classList.remove('active'), 500);
    });

    // Intersection Observer for Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.service-node, .matrix-cell').forEach(el => {
        observer.observe(el);
    });
});
