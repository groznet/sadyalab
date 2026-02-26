// Load header.html, footer.html from components
// Load header.html
fetch('/components/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;

        // Now the DOM exists → attach mobile menu toggle
        const menuBtn = document.getElementById('menuBtn');
        const mobileMenu = document.getElementById('mobileMenu');

        if (menuBtn && mobileMenu) {
            menuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }
    });

// Load footer.html
fetch('/components/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });

// Load hero.html
fetch('/components/hero.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('hero-section').innerHTML = data;
    });

// Load benefits.html
fetch('/components/benefits.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('benefits-section').innerHTML = data;
    });

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    document.querySelectorAll('.section').forEach(section => {
        const bg = section.querySelector('.section-bg');
        const sectionTop = section.offsetTop;

        const speed = 0.3; // adjust strength
        const yPos = (scrollY - sectionTop) * speed;

        bg.style.transform = `translateY(${yPos}px)`;
    });
});