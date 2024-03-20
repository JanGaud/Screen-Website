import { writable } from 'svelte/store';

function createThemeStore() {
    let initialTheme = 'light';

    if (typeof window !== 'undefined') {
        const storedTheme = window.localStorage.getItem('theme') ||
            document.cookie.split('; ').find(row => row.startsWith('theme='))?.split('=')[1];
        if (storedTheme) {
            initialTheme = storedTheme;
        }
    }

    const { subscribe, update } = writable(initialTheme);

    if (typeof window !== 'undefined') {
        document.documentElement.classList.toggle('dark', initialTheme === 'dark');
    }

    return {
        subscribe,
        toggle: () => {
            update(theme => {
                const newTheme = theme === 'light' ? 'dark' : 'light';

                const expirationDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
                document.cookie = `theme=${newTheme}; expires=${expirationDate.toUTCString()}; path=/`;
                window.localStorage.setItem('theme', newTheme);

                document.documentElement.classList.toggle('dark', newTheme === 'dark');

                return newTheme;
            });
        }
    };
}

export const themeStore = createThemeStore();
