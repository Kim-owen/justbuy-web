// Theme Store — persists user's preference in localStorage
import { browser } from '$app/environment';

function createThemeStore() {
    // Read saved preference or system preference
    function getInitial() {
        if (!browser) return 'dark';
        const saved = localStorage.getItem('jb-theme');
        if (saved) return saved;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    let theme = $state(getInitial());

    // Apply the theme attribute and save to localStorage
    function apply(val) {
        if (!browser) return;
        document.documentElement.setAttribute('data-theme', val);
        localStorage.setItem('jb-theme', val);
    }

    // Apply immediately on load
    if (browser) apply(theme);

    return {
        get value() { return theme; },
        toggle() {
            theme = theme === 'dark' ? 'light' : 'dark';
            apply(theme);
        },
        get isDark() { return theme === 'dark'; }
    };
}

export const themeStore = createThemeStore();
