<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { browser } from '$app/environment';
	import ThemeDropdown from '$lib/components/theme-switcher/theme-switcher.svelte';

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
		if (browser) {
			localStorage.theme = themeSelection;

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

<ThemeDropdown bind:value={themeSelection} />
