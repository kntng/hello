import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import { log } from '$utils/log';

// Global writable store to manage mode
// write to document
// and sync with localStorage

// true = light mode
// false = dark mode
// null = system mode

// Fetch theme from localStorage
function fetchTheme(): boolean | null {
	if (!browser) return null;
	const theme = localStorage.getItem('theme');
	return theme === 'light' ? true : theme === 'dark' ? false : null;
}
const mode = writable<boolean | null>(fetchTheme());
// Log theme
mode.subscribe((v) => log(v));

// Write theme to localStorage on change
mode.subscribe((value) => {
	if (!browser) return;
	if (value === null) {
		localStorage.removeItem('theme');
	} else {
		localStorage.setItem('theme', value ? 'light' : 'dark');
	}
});

// Modify document theme on change
mode.subscribe((value) => {
	if (!browser) return;
	if (value === false || (value === null && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
		document.documentElement.classList.add('dark');
	} else {
		document.documentElement.classList.remove('dark');
	}
});

export { mode };
