<script lang="ts">
	import type { ThemeSelection } from '$lib/types/Theme';
	import { clickOutside } from '$lib/actions/click-outside';
	import ButtonOrLink from '$lib/components/button-or-link/button-or-link.svelte';

	export let value: ThemeSelection;
	const themeItems: { icon: string; value: ThemeSelection }[] = [
		{ icon: 'sun-fill', value: 'light' },
		{ icon: 'moon-fill', value: 'dark' },
		{ icon: 'display', value: 'system' }
	];

	let open = false;
</script>

<div class="relative" use:clickOutside on:outclick={() => (open = false)}>
	<ButtonOrLink on:click={() => (open = !open)} variant="text" fullWidth>
		<span class="dark:hidden">
			<i class="bi bi-sun-fill" />
		</span>
		<span class="hidden dark:inline">
			<i class="bi bi-moon-stars" />
		</span>
	</ButtonOrLink>

	{#if open}
		<ul
			class="absolute top-full right-0 w-30 rounded overflow-hidden p-1 bg-paper flex flex-col gap-1"
		>
			{#each themeItems as item}
				<li>
					<ButtonOrLink
						color={item.value === value ? 'primary' : 'paper'}
						hoverColor="primary"
						hoverEffect={item.value === value ? 'none' : 'inner-shadow'}
						fullWidth
						textTransform="capitalize"
						textAlign="left"
						on:click={() => (value = item.value)}
					>
						<i class={`bi bi-${item.icon}`} /> {item.value}</ButtonOrLink
					>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style lang="postcss">
</style>
