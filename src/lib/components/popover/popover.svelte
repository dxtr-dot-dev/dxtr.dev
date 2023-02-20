<script lang="ts">
	import { autoUI } from '$lib/auto-ui/auto-ui';
	import type {
		AutoUIColor,
		AutoUIShape,
		AutoUISize,
		AutoUIVariant,
		AutoUIWidth
	} from '$lib/auto-ui/auto-ui-types';

	export let id: string;
	export let position: 'bottom' = 'bottom';

	// auto ui
	export let color: AutoUIColor = 'primary';
	export let shape: AutoUIShape = 'rounded';
	export let variant: AutoUIVariant = 'fill';
	export let width: AutoUIWidth = 'auto';

	$: auto = autoUI({
		color,
		display: 'flex-col',
		hoverEffect: 'none',
		justify: 'left',
		shape,
		size: 'none',
		variant,
		width
	});
</script>

<div {id} class={`${auto.class} ${position}`} style={auto.style} role="listbox">
	<slot />
</div>

<style lang="postcss">
	div {
		position: absolute;
	}

	.bottom {
		@apply top-full;
		@apply right-0;
		@apply mt-4;
	}
</style>
