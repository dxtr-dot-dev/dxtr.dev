<script lang="ts">
	import type { UIColor, UIShape, UITextTransform, UIVariant } from '$lib/types/UI';
	import type { AriaRole } from '$lib/types/AriaRole';

	export let color: UIColor = 'primary';
	export let hoverColor: UIColor = 'body';
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
		class: [
			variant,
			shape !== 'squared' && shape,
			`color-${color}`,
			fullWidth && 'w-full',
			textTransform,
			noHoverEffect && 'no-hover'
		]
			.filter(Boolean)
			.join(' '),
		'aria-label': ariaLabel,
		role: role,
		style: `--button-color: var(--color-${color}); --button-hover-color: var(--color-${hoverColor});`
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
		transition: 0.3s all ease;
	}

	.shape-rounded {
		@apply rounded;
	}

	.shape-rounded-full {
		@apply rounded-full;
	}

	.filled {
		background: rgb(var(--button-color));
		box-shadow: inset 1000px 1000px transparent;
	}

	.filled:not(.color-paper) {
		@apply text-body-contrast;
	}

	.filled:not(.no-hover):hover {
		box-shadow: inset 1000px 1000px rgba(var(--button-hover-color), 0.25);
	}

	.outlined {
		border: 1px solid var(--button-color);
	}
</style>
