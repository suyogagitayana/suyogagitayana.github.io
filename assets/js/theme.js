(() => {
    const root = document.documentElement;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
    let preference = null;
    let toggle;

    function applyTheme() {
        const theme = preference || (systemTheme.matches ? 'dark' : 'light');
        root.dataset.theme = theme;
        const themeColor = document.querySelector('meta[name="theme-color"]');
        if (themeColor) themeColor.content = theme === 'dark' ? '#171a1f' : '#f4f5f6';
        if (toggle) {
            const label = `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`;
            toggle.setAttribute('aria-label', label);
            toggle.title = label;
        }
    }

    // Runs before the stylesheets to avoid flashing the wrong theme on reload.
    applyTheme();
    systemTheme.addEventListener('change', () => {
        preference = null;
        applyTheme();
    });

    document.addEventListener('DOMContentLoaded', () => {
        toggle = document.querySelector('#theme-toggle');
        if (!toggle) return;
        applyTheme();
        toggle.hidden = false;
        toggle.addEventListener('click', () => {
            preference = root.dataset.theme === 'dark' ? 'light' : 'dark';
            applyTheme();
        });
    });
})();
