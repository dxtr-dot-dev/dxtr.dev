<script lang="ts">
	import type {
		UIColor,
		UIEffect,
		UIShape,
		UISize,
		UITextAlign,
		UITextTransform,
		UIVariant
	} from '$lib/types/UI';
	import type { AriaRole } from '$lib/types/AriaRole';
	import { c } from '$lib/utils/c';

	// button
	export let type: 'reset' | 'button' | 'submit' = 'submit';

	// link
	export let href: string | undefined = undefined;
	export let target: '_self' | '_blank' = '_self';

	// UI
	export let size: UISize = 'md';
	export let variant: UIVariant = href ? 'text' : 'fill';
	export let shape: UIShape = 'rounded';
	export let textTransform: UITextTransform = 'none';
	export let textAlign: UITextAlign = 'center';
	export let fullWidth: boolean = false;

	export let color: UIColor = 'primary';
	export let hoverColor: UIColor | 'none' | undefined = undefined;
	$: hoverColorWithFallback = (() => {
		if (hoverColor) return hoverColor;

		if (variant === 'text') return 'none';

		return `${color}-text`;
	})();

	export let hoverEffect: UIEffect | undefined = undefined;
	$: hoverEffectWithFallback = (() => {
		if (hoverEffect) return hoverEffect;

		switch (variant) {
			case 'text':
				return 'text-color';
			default:
				return 'outer-shadow';
		}
	})();

	// storybook
	export let storybookSlot: string | undefined = undefined;

	// acessibility
	export let ariaLabel: string | undefined = undefined;
	export let role: AriaRole | undefined = undefined;

	$: props = {
		class: c([
			`size--${size}`,
			`variant--${variant}`,
			`shape--${shape}`,
			`hover-effect--${hoverEffectWithFallback}`,
			`text-transform--${textTransform}`,
			fullWidth && 'full-width'
		]),

		style: c([
			`--button-color: var(--color-${color});`,
			`--button-color-text: var(--color-${color}-text);`,
			`--button-hover-color: var(--color-${hoverColorWithFallback});`
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
		color: rgb(var(--button-color-text));
		transition: 0.2s all ease;
		display: inline-flex;
		align-items: center;
		@apply gap-2;
	}

	/* size */

	.size--xs {
		@apply text-xs;
		@apply px-1.5 py-0.5;
	}

	.size--sm {
		@apply text-sm;
		@apply px-2 py-1;
	}

	.size--md {
		@apply px-3 py-1.5;
	}

	.size--lg {
		@apply px-5 py-2.5;
		@apply text-lg;
	}

	.size--xl {
		@apply px-6 py-3;
		@apply text-xl;
	}

	/* variant */

	.variant--fill {
		background: rgb(var(--button-color));
	}

	.variant--outline {
		border: 1px solid rgb(var(--button-color));
		color: rgb(var(--button-color));
	}

	.variant--text {
		color: rgb(var(--button-color));
	}

	.variant--text:hover {
		text-decoration: underline;
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

	.hover-effect--text-color:hover {
		color: rgb(var(--button-hover-color));
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

	/* text align */
	.text-align--left {
		@apply justify-start;
	}

	.text-align--center {
		@apply justify-center;
	}

	.text-align--right {
		@apply justify-end;
	}

	/* width */

	.full-width {
		@apply w-full;
	}
</style>
