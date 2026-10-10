document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('.nav-links a');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    // Content stays visible if animation support or JavaScript is unavailable.
    function enter(element, delay = 0, duration = 400) {
        if (reducedMotion.matches || typeof element.animate !== 'function') return;
        element.getAnimations().forEach(animation => animation.cancel());
        element.animate([
            { opacity: 0, transform: 'translateY(8px)' },
            { opacity: 1, transform: 'translateY(0)' }
        ], { duration, delay, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'backwards' });
    }

    document.querySelectorAll('.greeting, .name, .bio, .hero .btn, .hero-mark')
        .forEach((element, index) => enter(element, index * 40, 480));

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(entries => {
            let stagger = 0;
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                enter(entry.target, stagger++ * 30);
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.08 });
        document.querySelectorAll('.section-title, .skills-category, .project-card, .contact-text, .contact-links, .status-text')
            .forEach(element => observer.observe(element));
    }

    reducedMotion.addEventListener('change', () => {
        if (reducedMotion.matches) {
            document.getAnimations().forEach(animation => animation.cancel());
        }
    });

    function highlightNavigation() {
        let current = '';
        const readingLine = document.querySelector('.header').offsetHeight
            + Math.min(160, window.innerHeight * 0.25);
        sections.forEach(section => {
            if (section.getBoundingClientRect().top <= readingLine) current = section.id;
        });
        if (window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 24) {
            current = 'contact';
        }
        navLinks.forEach(link => {
            const active = link.getAttribute('href') === `#${current}`;
            link.classList.toggle('active', active);
            if (active) link.setAttribute('aria-current', 'location');
            else link.removeAttribute('aria-current');
        });
    }

    let navigationFrame = null;
    function scheduleNavigation() {
        if (navigationFrame !== null) return;
        navigationFrame = window.requestAnimationFrame(() => {
            highlightNavigation();
            navigationFrame = null;
        });
    }
    window.addEventListener('scroll', scheduleNavigation, { passive: true });
    window.addEventListener('resize', scheduleNavigation);
    highlightNavigation();
});
