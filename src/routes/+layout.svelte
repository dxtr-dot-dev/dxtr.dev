<script lang="ts">
	import '@fontsource/courier-prime';
	import '@fontsource/fira-mono';

	import { page } from '$app/stores';
	import ThemeDropdownContainer from '$lib/containers/theme-dropdown-container.svelte';
	import '../app.css';
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

<div class="flex-col h-full">
	<header class="p-4">
		<h1 class="font-heading text-primary text-center text-2xl">DXTR.DEV</h1>
	</header>

	<nav>
		<ul class="gap-4 flex justify-center">
			<li aria-current={$page.url.pathname === '/casex' ? 'page' : undefined}>
				<a href="/casex">Casex</a>
			</li>

			<li aria-current={$page.url.pathname === '/casex-template' ? 'page' : undefined}>
				<a href="/casex-template">Casex Template</a>
			</li>

			<li>
				<ThemeDropdownContainer />
			</li>
		</ul>
	</nav>

	<main class="p-4">
		<slot />
	</main>
</div>
