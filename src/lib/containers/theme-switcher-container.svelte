<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { browser } from '$app/environment';
	import ThemeSwitcher from '$lib/components/theme-switcher.svelte';

	const darkModePreference = browser
		? window.matchMedia('(prefers-color-scheme: dark)')
		: undefined;

	let prefersDarkMode = darkModePreference?.matches;
	$: fallbackTheme = prefersDarkMode ? 'dark' : 'light';

	let themeSelection = browser ? localStorage.theme : undefined;
	$: theme = themeSelection || fallbackTheme;

	$: {
		if (browser) {
			const newTheme = themeSelection === fallbackTheme ? undefined : themeSelection;
			if (newTheme) {
				localStorage.theme = newTheme;
			} else {
				localStorage.removeItem('theme');
			}

			if (theme === 'dark') {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		}
	}

	function darkModePreferenceChange() {
		prefersDarkMode = darkModePreference?.matches;
	}

	onMount(() => {
		darkModePreference?.addEventListener('change', darkModePreferenceChange);
	});

	onDestroy(() => {
		darkModePreference?.removeEventListener('change', darkModePreferenceChange);
	});
</script>

<ThemeSwitcher bind:value={themeSelection} />
