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

	// auto ui
	export let color: AutoUIColor = 'paper';
	export let display: AutoUIDisplay = 'flex';
	export let justify: AutoUIJustify = 'center';
	export let shape: AutoUIShape = 'rounded';
	export let size: AutoUISize = 'md';
	export let textTransform: AutoUITextTransform = 'none';
	export let variant: AutoUIVariant = 'fill';
	export let transition: AutoUITransition = 'regular';
	export let width: AutoUIWidth = 'full';

	$: auto = autoUI({
		color,
		display,
		justify,
		shape,
		size,
		gap: size,
		textTransform,
		transition,
		variant,
		width
	});

	export let value = '';
</script>

<input class={auto.class} style={auto.style} type="text" bind:value />
