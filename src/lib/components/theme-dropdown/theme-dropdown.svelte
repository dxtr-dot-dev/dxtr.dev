<script lang="ts">
	import type { ThemeSelection } from '$lib/types/Theme';
	import { clickOutside } from '$lib/actions/click-outside';

	export let value: ThemeSelection;
	const themeValues: ThemeSelection[] = ['light', 'dark', 'system'];

	let open = false;
</script>

<div class="relative" use:clickOutside on:outclick={() => (open = false)}>
	<button
		type="button"
		class="rounded bg-paper text-body px-4 py-1"
		on:click={() => (open = !open)}
		aria-label="dropdown item"
	>
		<span class="dark:hidden">Light</span>
		<span class="hidden dark:inline">Dark</span>
	</button>

	{#if open}
		<div class="absolute top-full mt-1 w-24 bg-paper rounded overflow-hidden">
			{#each themeValues as themeValue}
				<button
					class="capitalize p-2 w-full text-left hover:bg-primary hover:bg-opacity-50 transition"
					class:selected={themeValue === value}
					type="button"
					on:click={() => (value = themeValue)}>{themeValue}</button
				>
			{/each}
		</div>
	{/if}
</div>

<style lang="postcss">
	.selected {
		@apply !bg-primary !bg-opacity-100 text-body-contrast;
	}
</style>
