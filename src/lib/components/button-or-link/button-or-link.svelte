<script lang="ts">
	import { autoUI } from '$lib/auto-ui/auto-ui';
	import type {
		AutoUIColor,
		AutoUIHoverEffect,
		AutoUIShape,
		AutoUISize,
		AutoUIJustify,
		AutoUITextTransform,
		AutoUIVariant,
		AutoUIDisplay,
		AutoUIWidth,
		AutoUITransition
	} from '$lib/auto-ui/auto-ui-types';
	import type { AriaRole } from '$lib/types/AriaRole';

	// button
	export let type: 'reset' | 'button' | 'submit' = 'submit';

	// link
	export let href: string | undefined = undefined;
	export let target: '_self' | '_blank' = '_self';

	// auto ui
	export let color: AutoUIColor = 'primary';
	export let display: AutoUIDisplay = 'inline-flex';
	export let hoverColor: AutoUIColor | undefined = undefined;
	export let hoverEffect: AutoUIHoverEffect | undefined = undefined;
	export let justify: AutoUIJustify = 'center';
	export let shape: AutoUIShape = 'rounded';
	export let size: AutoUISize = 'md';
	export let textTransform: AutoUITextTransform = 'none';
	export let variant: AutoUIVariant = href ? 'text' : 'fill';
	export let transition: AutoUITransition = 'regular';
	export let width: AutoUIWidth = 'auto';

	$: auto = autoUI({
		color,
		display,
		hoverEffect,
		hoverColor,
		justify,
		shape,
		size,
		gap: size,
		textTransform,
		transition,
		variant,
		width
	});

	// storybook
	export let storybookSlot: string | undefined = undefined;

	// acessibility
	export let ariaLabel: string | undefined = undefined;
	export let role: AriaRole | undefined = undefined;
	export let ariaDescribedBy: string | undefined = undefined;
	export let ariaSelected: boolean | undefined = undefined;
</script>

{#if href}
	<a {href} {target} {...auto}>
		<slot>{storybookSlot}</slot>
	</a>
{:else}
	<button
		{type}
		on:click
		{role}
		aria-label={ariaLabel}
		aria-describedby={ariaDescribedBy}
		aria-selected={ariaSelected}
		{...auto}
	>
		<slot>{storybookSlot}</slot>
	</button>
{/if}

<style>
	.auto-ui-variant--text:hover {
		text-decoration: underline;
	}
</style>
