<script lang="ts">
	import '@fontsource/courier-prime';
	import '@fontsource/fira-mono';
	import 'bootstrap-icons/font/bootstrap-icons.css';

	import { page } from '$app/stores';

	import Logo from '$lib/components/logo.svelte';
	import { useTheme } from '$lib/hooks/use-theme';
	import { useThemeMeta } from '$lib/hooks/use-theme-meta';
	import '../app.css';

	const theme = useTheme();
	useThemeMeta(theme);

	$: toggle = () => theme.update((current) => (current === 'light' ? 'dark' : 'light'));
</script>

<svelte:head>
	<script>
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
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
			<span><span class="text-primary">DX</span>TR.DEV</span>
		</a>

		<div class="flex-1" />

		<nav>
			<ul class="flex items-center text-sm">
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

				<li
					aria-current={$page.url.pathname === '/dx' ? 'page' : undefined}
					class:selected={$page.url.pathname === '/dx'}
				>
					<a href="/dx">D<span class="text-primary">X</span></a>
				</li>

				<li>
					<button class="relative text-primary" on:click={toggle}>
						<span class="sr-only">toggle dark mode</span>

						<i class="dark:hidden bi bi-sun-fill" />
						<i class="hidden dark:inline bi bi-moon-stars-fill" />
					</button>
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

	li {
		@apply leading-normal;
	}

	li > * {
		@apply px-3;
	}

	li:not(:first-child):not(:last-child) {
		@apply border-l border-l-paper;
	}
</style>
