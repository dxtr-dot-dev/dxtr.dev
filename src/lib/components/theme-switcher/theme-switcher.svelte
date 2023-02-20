<script lang="ts">
	import type { ThemeSelection } from '$lib/types/Theme';
	import { clickOutside } from '$lib/actions/click-outside';
	import ButtonOrLink from '$lib/components/button-or-link/button-or-link.svelte';
	import type { PopoverSelectOption } from '$lib/components/popover-select/popover-select-option';
	import PopoverSelect from '$lib/components/popover-select/popover-select.svelte';

	export let value: ThemeSelection;

	const options: PopoverSelectOption<ThemeSelection>[] = [
		{ icon: 'sun-fill', value: 'light', label: 'light' },
		{ icon: 'moon-fill', value: 'dark', label: 'dark' },
		{ icon: 'display', value: 'system', label: 'system' }
	];

	let open = false;
</script>

<div class="relative" use:clickOutside on:outclick={() => (open = false)}>
	<ButtonOrLink on:click={() => (open = !open)} variant="text" ariaDescribedBy="theme-switcher">
		<span class="dark:hidden">
			<i class="bi bi-sun-fill" />
		</span>

		<span class="hidden dark:inline">
			<i class="bi bi-moon-stars" />
		</span>
	</ButtonOrLink>

	{#if open}
		<PopoverSelect id="theme-switcher" bind:value {options} textTransform="capitalize" />
	{/if}
</div>
