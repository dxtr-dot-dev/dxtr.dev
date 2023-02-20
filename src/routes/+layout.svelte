<script lang="ts">
	import '@fontsource/courier-prime';
	import '@fontsource/fira-mono';
	import 'bootstrap-icons/font/bootstrap-icons.css';

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

<div class="flex-col h-full max-w-screen-lg mx-auto">
	<header class="flex flex-col md:flex-row items-center py-4 px-2">
		<a href="/" class="h-6 overflow-hidden">
			<h1 class="font-heading text-primary text-center text-2xl">DXTR.DEV</h1>
		</a>

		<div class="flex-1" />

		<nav>
			<ul class="gap-4 flex items-center">
				<li aria-current={$page.url.pathname === '/casex' ? 'page' : undefined}>
					<ButtonOrLink href="/casex" color="body">Casex</ButtonOrLink>
				</li>

				<li aria-current={$page.url.pathname === '/casex-template' ? 'page' : undefined}>
					<ButtonOrLink href="/casex-template" color="body">Casex Template</ButtonOrLink>
				</li>

				<li>
					<ThemeDropdownContainer />
				</li>
			</ul>
		</nav>
	</header>

	<main class="px-2">
		<slot />
	</main>
</div>
