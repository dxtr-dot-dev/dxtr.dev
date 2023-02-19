<script lang="ts">
	import { browser } from '$app/environment';
	import ThemeDropdown from '$components/theme-dropdown/theme-dropdown.svelte';

	const darkModePreference = browser
		? window.matchMedia('(prefers-color-scheme: dark)')
		: undefined;

	let prefersDarkMode = darkModePreference?.matches;
	let themeSelection = browser ? localStorage.theme : undefined;

	$: theme = browser
		? themeSelection && themeSelection !== 'system'
			? themeSelection
			: prefersDarkMode
			? 'dark'
			: 'light'
		: undefined;

	$: {
		darkModePreference?.addEventListener('change', () => {
			prefersDarkMode = darkModePreference.matches;
		});
	}

	$: {
		if (browser) {
			localStorage.theme = themeSelection;

			if (theme === 'dark') {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		}
	}
</script>

<ThemeDropdown bind:value={themeSelection} />
