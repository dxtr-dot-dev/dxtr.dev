<script lang="ts">
	import '@fontsource/courier-prime';
	import '@fontsource/fira-mono';
	import 'bootstrap-icons/font/bootstrap-icons.css';

	import { page } from '$app/stores';

	import '../app.css';
	import ThemeSwitcherContainer from '$lib/containers/theme-switcher-container.svelte';

	export const links = [
		{ href: '/casex', label: 'Casex' },
		{ href: '/casex-template', label: 'Casex Template' }
	];
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

<div class="border-b border-b-paper">
	<header class="flex flex-col md:flex-row gap-2 items-center py-4 container">
		<a href="/" class="font-heading text-primary text-xl h-5 overflow-hidden">DXTR.DEV</a>

		<div class="flex-1" />

		<nav>
			<ul class="gap-4 flex items-center">
				{#each links as link}
					<li
						aria-current={$page.url.pathname === link.href ? 'page' : undefined}
						class:selected={$page.url.pathname === link.href}
					>
						<a href={link.href}>{link.label}</a>
					</li>
				{/each}

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
