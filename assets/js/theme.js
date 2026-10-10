(() => {
    const storageKey = 'portfolio-theme';
    const root = document.documentElement;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
    let preference = null;
    let toggle;

    function validTheme(value) {
        return value === 'light' || value === 'dark' ? value : null;
    }

    try {
        preference = validTheme(window.localStorage.getItem(storageKey));
    } catch {
        // System preference and the toggle still work without browser storage.
    }

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
        if (!preference) applyTheme();
    });
    window.addEventListener('storage', event => {
        if (event.key === storageKey || event.key === null) {
            preference = validTheme(event.newValue);
            applyTheme();
        }
    });

    document.addEventListener('DOMContentLoaded', () => {
        toggle = document.querySelector('#theme-toggle');
        if (!toggle) return;
        applyTheme();
        toggle.hidden = false;
        toggle.addEventListener('click', () => {
            preference = root.dataset.theme === 'dark' ? 'light' : 'dark';
            applyTheme();
            try {
                window.localStorage.setItem(storageKey, preference);
            } catch {
                // Retain the selected theme for this page even if saving fails.
            }
        });
    });
})();
