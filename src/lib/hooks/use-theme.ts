import type { Theme } from '$lib/types/Theme';
import { writable, type Writable } from 'svelte/store';
import { onDestroy, onMount } from 'svelte';
import { browser } from '$app/environment';

export function useTheme(): Writable<Theme> {
	if (!browser) return writable('light');

	const localStorageTheme = localStorage.theme as Theme | undefined;

	const darkModePreference = window.matchMedia('(prefers-color-scheme: dark)');
	const getBrowserPreferredTheme = () => (darkModePreference?.matches ? 'dark' : 'light');

	const $theme = writable(localStorageTheme || getBrowserPreferredTheme());

	// Persist $theme changes to local storage

	$theme.subscribe((theme) => {
		const newTheme = theme === getBrowserPreferredTheme() ? undefined : theme;

		if (!theme) {
			localStorage.theme = newTheme;
		} else {
			localStorage.removeItem('theme');
		}
	});

	// Listen to prefered color scheme

	const darkModePreferenceChange = () => $theme.set(getBrowserPreferredTheme());

	onMount(() => {
		darkModePreference?.addEventListener('change', darkModePreferenceChange);
	});

	onDestroy(() => {
		darkModePreference?.removeEventListener('change', darkModePreferenceChange);
	});

	return $theme;
}
