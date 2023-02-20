<script lang="ts">
	import '@fontsource/courier-prime';
	import '@fontsource/fira-mono';

	import { page } from '$app/stores';
	import ThemeDropdownContainer from '$lib/containers/theme-dropdown-container.svelte';
	import '../app.css';
	import ButtonOrLink from '$lib/components/button-or-link/button-or-link.svelte';
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
				<ButtonOrLink href="/casex" variant="text" color="body" hoverColor="secondary"
					>Casex</ButtonOrLink
				>
			</li>

			<li aria-current={$page.url.pathname === '/casex-template' ? 'page' : undefined}>
				<ButtonOrLink href="/casex-template" variant="text" color="body" hoverColor="tertiary"
					>Casex Template</ButtonOrLink
				>
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
