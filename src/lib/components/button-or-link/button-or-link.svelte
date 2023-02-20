<script lang="ts">
	import type { UIColor, UIEffect, UIShape, UITextTransform, UIVariant } from '$lib/types/UI';
	import type { AriaRole } from '$lib/types/AriaRole';
	import { c } from '$lib/utils/c';

	export let color: UIColor = 'primary';
	export let hoverColor: UIColor | undefined = undefined;
	export let hoverEffect: UIEffect | undefined = 'outer-shadow';

	export let variant: UIVariant = 'filled';
	export let shape: UIShape = 'rounded';
	export let fullWidth: boolean = false;
	export let textTransform: UITextTransform | undefined = undefined;
	export let noHoverEffect: boolean = false;

	// button
	export let type: 'reset' | 'button' | 'submit' = 'submit';

	// link
	export let href: string | undefined = undefined;
	export let target: '_self' | '_blank' = '_self';

	// storybook
	export let storybookSlot: string | undefined = undefined;

	// acessibility
	export let ariaLabel: string | undefined = undefined;
	export let role: AriaRole | undefined = undefined;

	$: props = {
		class: c([
			variant,
			textTransform,
			shape,
			fullWidth && 'w-full',
			noHoverEffect && 'no-hover',
			`hover-effect--${hoverEffect}`
		]),

		style: c([
			`--button-color: var(--color-${color});`,
			`--button-color-text: var(--color-${color}-text);`,
			`--button-hover-color: var(--color-${hoverColor || `${color}-text`});`
		]),

		// Acessibility
		'aria-label': ariaLabel,
		role: role
	};
</script>

{#if href}
	<a {href} {target} {...props}>
		<slot>{storybookSlot}</slot>
	</a>
{:else}
	<button {type} on:click {...props} role="">
		<slot>{storybookSlot}</slot>
	</button>
{/if}

<style lang="postcss">
	button,
	a {
		@apply px-2 py-1;
		color: rgb(var(--button-color-text));
		transition: 0.3s all ease;
	}

	.filled {
		background: rgb(var(--button-color));
	}

	.hover-effect--inset-shadow {
		box-shadow: inset 1000px 1000px transparent;
	}

	.hover-effect--inset-shadow:hover {
		box-shadow: inset 1000px 1000px rgba(var(--button-hover-color), 0.25);
	}

	.hover-effect--outer-shadow:hover {
		@apply shadow-lg;
	}

	.outlined {
		border: 1px solid var(--button-color);
	}
</style>
