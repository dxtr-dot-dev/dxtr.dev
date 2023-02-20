<script lang="ts">
	import type { ThemeSelection } from '$lib/types/Theme';
	import { clickOutside } from '$lib/actions/click-outside';
	import ButtonOrLink from '$lib/components/button-or-link/button-or-link.svelte';

	export let value: ThemeSelection;
	const themeValues: ThemeSelection[] = ['light', 'dark', 'system'];

	let open = false;
</script>

<div class="relative w-20" use:clickOutside on:outclick={() => (open = false)}>
	<ButtonOrLink type="button" on:click={() => (open = !open)} fullWidth>
		<span class="dark:hidden">Light</span>
		<span class="hidden dark:inline">Dark</span>
	</ButtonOrLink>

	{#if open}
		<div class="absolute top-full mt-1 w-24 rounded overflow-hidden">
			{#each themeValues as themeValue}
				<ButtonOrLink
					color={themeValue === value ? 'primary' : 'paper'}
					hoverColor="primary"
					hoverEffect="inset-shadow"
					fullWidth
					shape="squared"
					textTransform="capitalize"
					noHoverEffect={themeValue === value}
					on:click={() => (value = themeValue)}>{themeValue}</ButtonOrLink
				>
			{/each}
		</div>
	{/if}
</div>

<style lang="postcss">
</style>
