<script lang="ts">
	import Header from './Header.svelte';
	import '../app.css';
	import ThemeSwitch from '$components/theme-switch/ThemeSwitch.svelte';
	import { browser } from '$app/environment';

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

<svelte:head>
	<script>
		const useSystemTheme = !('theme' in localStorage) || localStorage.theme === 'system';

		if (
			localStorage.theme === 'dark' ||
			(useSystemTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	</script>
</svelte:head>

<div class="h-full flex-col bg-slate-100 dark:bg-black p-4">
	<Header />

	<main>
		<slot />
	</main>

	<ThemeSwitch bind:value={themeSelection} />
</div>

<style lang="postcss">
	:global(html, body) {
		height: theme(height.full);
	}
</style>
