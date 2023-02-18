<script lang="ts">
	import type { ThemeSelection } from '$types/Theme';
	import { clickOutside } from '$actions/click-outside';

	export let value: ThemeSelection;
	const themeValues: ThemeSelection[] = ['light', 'dark', 'system'];

	let open = false;
</script>

<div class="relative">
	<button
		type="button"
		class="rounded bg-gray-900 dark:bg-white text-white dark:text-black px-4 py-1"
		on:click={() => (open = !open)}
		aria-label="dropdown item"
	>
		<span class="dark:hidden">Light</span>
		<span class="hidden dark:inline">Dark</span>
	</button>

	{#if open}
		<div
			class="absolute top-full mt-1 w-24 bg-gray-200 dark:bg-gray-900 rounded overflow-hidden"
			use:clickOutside
			on:outclick={() => (open = false)}
		>
			{#each themeValues as themeValue}
				<button
					class="capitalize p-2 w-full text-left dark:hover:bg-cyan-900 hover:bg-cyan-100 transition"
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
		@apply !bg-cyan-600 text-white;
	}
</style>
