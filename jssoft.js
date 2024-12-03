document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    // Add smooth scrolling for internal navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            if (link.hash) {
                event.preventDefault();
                const target = document.querySelector(link.hash);
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        });
    });

    // Highlight active section while scrolling
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const link = document.querySelector(`nav a[href="#${section.id}"]`);
            if (scrollPosition >= sectionTop - 10 && scrollPosition < sectionTop + sectionHeight) {
                link.style.color = 'var(--white-color)';
            } else {
                link.style.color = 'var(--highlight-color)';
            }
        });
    });
});
