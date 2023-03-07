<script lang="ts">
	import '@fontsource/courier-prime';
	import '@fontsource/fira-mono';
	import 'bootstrap-icons/font/bootstrap-icons.css';

	import { page } from '$app/stores';

	import '../app.css';
	import ThemeSwitcherContainer from '$lib/containers/theme-switcher-container.svelte';
	import Logo from '$lib/components/logo.svelte';
</script>

<svelte:head>
	<script>
		const useSystemTheme = !('theme' in localStorage);

		if (
			localStorage.theme === 'dark' ||
			(useSystemTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			document.querySelector('meta[name="theme-color"]').content = '#121212';
		}
	</script>
</svelte:head>

<div class="border-b border-b-paper">
	<header class="flex flex-col md:flex-row gap-2 items-center py-4 container">
		<a href="/" class="flex items-center gap-4 font-heading text-xl overflow-hidden">
			<Logo class="h-5" />
			<span class="h-5"><span class="text-primary">DX</span>TR.DEV</span>
		</a>

		<div class="flex-1" />

		<nav>
			<ul class="gap-8 flex items-center">
				<li
					aria-current={$page.url.pathname === '/casex' ? 'page' : undefined}
					class:selected={$page.url.pathname === '/casex'}
				>
					<a href="/casex">CASE<span class="text-primary">X</span></a>
				</li>

				<li
					aria-current={$page.url.pathname === '/casex-template' ? 'page' : undefined}
					class:selected={$page.url.pathname === '/casex-template'}
				>
					<a href="/casex-template">CASE<span class="text-primary">X</span> TEMPALTE</a>
				</li>

				<li>
					<ThemeSwitcherContainer />
				</li>
			</ul>
		</nav>
	</header>
</div>

<main class="container pb-8">
	<slot />
</main>

<style lang="postcss">
	.selected {
		@apply font-bold underline;
	}
</style>
