document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('nav a, .cta').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
