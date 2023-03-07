import type { Theme } from '$lib/types/Theme';
import { writable, type Writable } from 'svelte/store';
import { onDestroy, onMount } from 'svelte';
import { browser } from '$app/environment';

export function useTheme(): Writable<Theme | undefined> {
	const $theme = writable<Theme | undefined>();
	if (!browser) return $theme;

	const localStorageTheme = localStorage.theme as Theme | undefined;

	const darkModePreference = window.matchMedia('(prefers-color-scheme: dark)');
	const getBrowserPreferredTheme = () => (darkModePreference?.matches ? 'dark' : 'light');

	$theme.set(localStorageTheme || getBrowserPreferredTheme());

	// Persist $theme changes to local storage

	$theme.subscribe((theme) => {
		const shouldStore = theme !== getBrowserPreferredTheme();

		if (shouldStore) {
			localStorage.theme = theme;
		} else {
			localStorage.removeItem('theme');
		}
	});

	// Listen to prefered color scheme

	const darkModePreferenceChange = () => $theme.set(getBrowserPreferredTheme());
	onMount(() => darkModePreference?.addEventListener('change', darkModePreferenceChange));
	onDestroy(() => darkModePreference?.removeEventListener('change', darkModePreferenceChange));

	return $theme;
}
