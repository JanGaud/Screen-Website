// src/stores/themeStore.js
import { writable } from 'svelte/store';

function createThemeStore() {
    const { subscribe, set, update } = writable(
        typeof window !== 'undefined' ? localStorage.getItem('theme') || 'light' : 'light'
    );

    return {
        subscribe,
        toggle: () => {
            update(theme => {
                const newTheme = theme === 'light' ? 'dark' : 'light';
                if (typeof window !== 'undefined') {
                    localStorage.setItem('theme', newTheme);
                    document.documentElement.classList.toggle('dark', newTheme === 'dark');
                }
                return newTheme;
            });
        }
    };
}

export const themeStore = createThemeStore();
