<script lang="ts">
	import type { Theme } from '$lib/types/Theme';

	export let value: Theme;

	$: nextTheme = value === 'light' ? 'dark' : 'light';

	$: toggle = () => {
		value = value === 'light' ? 'dark' : 'light';
	};
</script>

<button class="relative" on:click={toggle}>
	<span class="sr-only">switch to ${nextTheme} theme</span>

	<div class="rounded-full">
		<span class="dark:hidden">
			<i class="bi bi-sun-fill" />
		</span>

		<span class="hidden dark:inline">
			<i class="bi bi-moon-stars-fill" />
		</span>
	</div>
</button>
