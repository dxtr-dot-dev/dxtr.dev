<script lang="ts">
	import type { ThemeSelection } from '$types/Theme';

	export let value: ThemeSelection;
	const themeValues: ThemeSelection[] = ['light', 'dark', 'system'];

	let open = false;
</script>

<div class="relative">
	<button type="button" on:click={() => (open = !open)} aria-label="dropdown item">
		<span class="dark:hidden">Light</span>
		<span class="hidden dark:inline">Dark</span>
	</button>

	{#if open}
		<div class="absolute top-full mt-1 w-24 bg-white dark:bg-gray-900 rounded overflow-hidden">
			{#each themeValues as themeValue}
				<button
					class="capitalize p-2 w-full text-left"
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
		@apply bg-red-500 text-white;
	}
</style>
