<script lang="ts">
	import type { Theme } from '$lib/types/Theme';

	export let value: Theme;

	$: nextTheme = value === 'light' ? 'dark' : 'light';

	$: toggle = () => {
		value = value === 'light' ? 'dark' : 'light';
	};
</script>

<button class="relative text-primary" on:click={toggle}>
	<span class="sr-only">switch to ${nextTheme} theme</span>

	<i class="dark:hidden bi bi-sun-fill" />
	<i class="hidden dark:inline bi bi-moon-stars-fill" />
</button>
