document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('.nav-links a');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const previewDialog = document.querySelector('.image-dialog');

    if (previewDialog && typeof previewDialog.showModal === 'function') {
        const previewImage = previewDialog.querySelector('.dialog-image');
        const previewTitle = previewDialog.querySelector('#preview-title');
        document.querySelectorAll('[data-preview]').forEach(link => {
            link.addEventListener('click', event => {
                // Preserve opening the original image in a new tab.
                if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
                event.preventDefault();
                previewTitle.textContent = link.dataset.preview;
                previewImage.src = link.href;
                previewImage.alt = link.querySelector('img').alt;
                previewDialog.showModal();
                document.documentElement.classList.add('preview-open');
            });
        });
        const closePreview = previewDialog.querySelector('.preview-close');
        closePreview.addEventListener('click', () => previewDialog.close());
        previewDialog.addEventListener('keydown', event => {
            // The close button is the only interactive control in this dialog.
            if (event.key === 'Tab') {
                event.preventDefault();
                closePreview.focus();
            }
        });
        previewDialog.addEventListener('click', event => {
            if (event.target !== previewDialog) return;
            const bounds = previewDialog.getBoundingClientRect();
            if (event.clientX < bounds.left || event.clientX > bounds.right
                || event.clientY < bounds.top || event.clientY > bounds.bottom) previewDialog.close();
        });
        previewDialog.addEventListener('close', () => document.documentElement.classList.remove('preview-open'));
    }

    // Content stays visible if animation support or JavaScript is unavailable.
    function enter(element, delay = 0, duration = 320) {
        if (reducedMotion.matches || typeof element.animate !== 'function') return;
        element.getAnimations().forEach(animation => animation.cancel());
        element.animate([
            { opacity: 0, transform: 'translateY(4px)' },
            { opacity: 1, transform: 'translateY(0)' }
        ], { duration, delay, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'backwards' });
    }

    document.querySelectorAll('.greeting, .name, .bio, .hero .btn, .hero-mark')
        .forEach((element, index) => enter(element, index * 30, 380));

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(entries => {
            let stagger = 0;
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                enter(entry.target, stagger++ * 30);
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.08 });
        document.querySelectorAll('.section-title, .skills-category, .project-card, .contact-links')
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
