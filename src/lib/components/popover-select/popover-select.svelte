<script lang="ts">
	import { autoUI } from '$lib/auto-ui/auto-ui';
	import type {
		AutoUIColor,
		AutoUIHoverEffect,
		AutoUIJustify,
		AutoUIShape,
		AutoUISize,
		AutoUITextTransform,
		AutoUITransition,
		AutoUIVariant,
		AutoUIWidth
	} from '$lib/auto-ui/auto-ui-types';
	import Popover from '$lib/components/popover/popover.svelte';
	import ButtonOrLink from '../button-or-link/button-or-link.svelte';
	import type { PopoverSelectOption } from './popover-select-option';

	export let id: string;

	type T = $$Generic<string>;
	export let value: T;
	export let options: PopoverSelectOption<T>[];

	// auto ui
	export let color: AutoUIColor = 'paper';
	export let selectedColor: AutoUIColor = 'primary';
	export let hoverColor: AutoUIColor | undefined = undefined;
	export let shape: AutoUIShape = 'rounded';
	export let size: AutoUISize = 'md';
	export let textTransform: AutoUITextTransform = 'none';
	export let variant: AutoUIVariant = 'fill';
	export let transition: AutoUITransition = 'regular';
	export let width: AutoUIWidth = 'auto';

	$: auto = autoUI({
		display: 'flex',
		hoverEffect: 'inner-shadow',
		hoverColor,
		justify: 'left',
		shape,
		size,
		gap: size,
		textTransform,
		transition,
		variant,
		width: 'full'
	});

	$: ulAuto = autoUI({ display: 'flex-col', gap: size });
</script>

<Popover {id} {color} {shape} {variant} {width}>
	<ul class={`p-2 ${ulAuto.class}`} style={ulAuto.style}>
		{#each options as option}
			<li>
				<button
					class={auto.class}
					style={autoUI({ color: option.value === value ? selectedColor : color }).style}
					role="option"
					aria-selected={option.value === value}
					color={option.value === value ? selectedColor : color}
					on:click={() => (value = option.value)}
				>
					{#if option.icon}
						<i class={`bi bi-${option.icon}`} />
					{/if}

					{option.label}
				</button>
			</li>{/each}
	</ul>
</Popover>
