<script lang="ts">
	import type { UIColor, UIEffect, UIShape, UITextTransform, UIVariant } from '$lib/types/UI';
	import type { AriaRole } from '$lib/types/AriaRole';
	import { c } from '$lib/utils/c';

	export let color: UIColor = 'primary';
	export let hoverColor: UIColor | undefined = undefined;
	export let hoverEffect: UIEffect | false = 'outer-shadow';

	export let variant: UIVariant = 'filled';
	export let shape: UIShape = 'rounded';
	export let fullWidth: boolean = false;
	export let textTransform: UITextTransform | undefined = undefined;

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
			`variant--${variant}`,
			`shape--${shape}`,
			`hover-effect--${hoverEffect || 'none'}`,
			`text-transform--${textTransform}`,
			fullWidth && 'full-width'
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

	/* variant */

	.variant--filled {
		background: rgb(var(--button-color));
	}

	.variant--outlined {
		border: 1px solid rgb(var(--button-color));
		color: rgb(var(--button-color));
	}

	/* shape */

	.shape--squared {
	}

	.shape--rounded {
		@apply rounded;
	}

	.shape--rounded-full {
		@apply rounded-full;
	}

	/* hover effect */

	.hover-effect--inner-shadow {
		box-shadow: inset 1000px 1000px transparent;
	}

	.hover-effect--inner-shadow:hover {
		box-shadow: inset 1000px 1000px rgba(var(--button-hover-color), 0.25);
	}

	.hover-effect--outer-shadow:hover {
		@apply shadow-lg;
	}

	/* text transform */

	.text-transform--capitalize {
		@apply capitalize;
	}

	.text-transform--uppercase {
		@apply uppercase;
	}

	.text-transform--lowercase {
		@apply lowercase;
	}

	/* width */

	.full-width {
		@apply w-full;
	}
</style>
