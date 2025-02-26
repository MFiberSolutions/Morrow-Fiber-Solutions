document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your message has been sent to the Fiber Wizards!');
    this.reset();
});
