\document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const hamburger = document.getElementById('hamburger');
    const closeBtn = document.getElementById('close-btn');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        sidebar.classList.add('active');
        hamburger.setAttribute('aria-expanded', 'true');
    });

    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            sidebar.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });

    window.addEventListener('scroll', () => {
        let fromTop = window.scrollY + 120;

        navLinks.forEach(link => {
            const section = document.querySelector(link.getAttribute('href'));
            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', e => {
        e.preventDefault();
        const name = contactForm.name.value.trim();

        if(name) {
            alert(Thank you, ${name}! Your message has been received.);
        }
        contactForm.reset();
    });
});